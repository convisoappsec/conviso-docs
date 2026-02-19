import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useHistory, useLocation } from "@docusaurus/router";
import { translate } from "@docusaurus/Translate";
import {
  ReactContextError,
  useDocsPreferredVersion,
} from "@docusaurus/theme-common";
import { useActivePlugin } from "@docusaurus/plugin-content-docs/client";
import {
  fetchIndexesByWorker,
  searchByWorker,
} from "@easyops-cn/docusaurus-search-local/dist/client/client/theme/searchByWorker";
import { SuggestionTemplate } from "@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/SuggestionTemplate";
import { EmptyTemplate } from "@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/EmptyTemplate";
import {
  Mark,
  searchBarShortcut,
  searchBarShortcutHint,
  searchBarShortcutKeymap,
  searchBarPosition,
  docsPluginIdForPreferredVersion,
  indexDocs,
  hideSearchBarWithNoSearchContext,
  useAllContextsWithNoSearchContext,
  searchContextByPaths,
} from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated";
import { searchResultLimits } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGeneratedConstants";
import {
  parseKeymap,
  matchesKeymap,
  getKeymapHints,
} from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/keymap";
import { isMacPlatform } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/platform";
import LoadingRing from "@easyops-cn/docusaurus-search-local/dist/client/client/theme/LoadingRing/LoadingRing";
import styles from "./SearchBar.module.css";

const SEARCH_PARAM_HIGHLIGHT = "_highlight";

async function fetchAutoCompleteJS() {
  const autoCompleteModule = await import("@easyops-cn/autocomplete.js");
  const autoComplete = autoCompleteModule.default;
  if (autoComplete.noConflict) {
    autoComplete.noConflict();
  } else if (autoCompleteModule.noConflict) {
    autoCompleteModule.noConflict();
  }
  return autoComplete;
}

function labelForContext(path) {
  if (path === "api") {
    return "API Reference";
  }
  if (path === "new-cli") {
    return "CLI";
  }
  return path;
}

export default function SearchBar({ handleSearchBarToggle }) {
  const isBrowser = useIsBrowser();
  const {
    siteConfig: { baseUrl },
  } = useDocusaurusContext();

  const activePlugin = useActivePlugin();
  let versionUrl = baseUrl;

  try {
    const { preferredVersion } = useDocsPreferredVersion(
      activePlugin?.pluginId ?? docsPluginIdForPreferredVersion
    );
    if (preferredVersion && !preferredVersion.isLast) {
      versionUrl = preferredVersion.path + "/";
    }
  } catch (e) {
    if (indexDocs && !(e instanceof ReactContextError)) {
      throw e;
    }
  }

  const history = useHistory();
  const location = useLocation();
  const searchBarRef = useRef(null);
  const indexStateMap = useRef(new Map());
  const focusAfterIndexLoaded = useRef(false);
  const search = useRef(null);

  const [loading, setLoading] = useState(false);
  const [inputChanged, setInputChanged] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [searchContext, setSearchContext] = useState("");
  const [manualContextSelection, setManualContextSelection] = useState(false);

  useEffect(() => {
    if (!Array.isArray(searchContextByPaths) || manualContextSelection) {
      return;
    }

    let nextContext = "";
    if (location.pathname.startsWith(versionUrl)) {
      const uri = location.pathname.substring(versionUrl.length);
      for (const item of searchContextByPaths) {
        const path = typeof item === "string" ? item : item.path;
        if (uri === path || uri.startsWith(`${path}/`)) {
          nextContext = path;
          break;
        }
      }
    }

    setSearchContext(nextContext);
  }, [location.pathname, versionUrl, manualContextSelection]);

  const hidden =
    !!hideSearchBarWithNoSearchContext &&
    Array.isArray(searchContextByPaths) &&
    searchContext === "";

  const loadIndex = useCallback(async () => {
    if (hidden || indexStateMap.current.get(searchContext)) {
      return;
    }

    indexStateMap.current.set(searchContext, "loading");
    search.current?.autocomplete.destroy();
    setLoading(true);

    const [autoComplete] = await Promise.all([
      fetchAutoCompleteJS(),
      fetchIndexesByWorker(versionUrl, searchContext),
    ]);

    search.current = autoComplete(
      searchBarRef.current,
      {
        hint: false,
        autoselect: true,
        openOnFocus: true,
        cssClasses: {
          root: clsx(styles.searchBar, {
            [styles.searchBarLeft]: searchBarPosition === "left",
          }),
          noPrefix: true,
          dropdownMenu: styles.dropdownMenu,
          input: styles.input,
          hint: styles.hint,
          suggestions: styles.suggestions,
          suggestion: styles.suggestion,
          cursor: styles.cursor,
          dataset: styles.dataset,
          empty: styles.empty,
        },
      },
      [
        {
          source: async (input, callback) => {
            const result = await searchByWorker(
              versionUrl,
              searchContext,
              input,
              searchResultLimits
            );
            callback(result);
          },
          templates: {
            suggestion: SuggestionTemplate,
            empty: EmptyTemplate,
          },
        },
      ]
    )
      .on("autocomplete:selected", function (event, { document: { u, h }, tokens }) {
        searchBarRef.current?.blur();

        let url = u;
        if (Mark && tokens.length > 0) {
          const params = new URLSearchParams();
          for (const token of tokens) {
            params.append(SEARCH_PARAM_HIGHLIGHT, token);
          }
          url += `?${params.toString()}`;
        }
        if (h) {
          url += h;
        }

        history.push(url);
      })
      .on("autocomplete:closed", () => {
        searchBarRef.current?.blur();
      });

    indexStateMap.current.set(searchContext, "done");
    setLoading(false);

    if (focusAfterIndexLoaded.current) {
      const input = searchBarRef.current;
      if (input.value) {
        search.current?.autocomplete.open();
      }
      input.focus();
    }
  }, [hidden, searchContext, versionUrl, history]);

  useEffect(() => {
    if (focused) {
      loadIndex();
    }
  }, [focused, searchContext, loadIndex]);

  useEffect(() => {
    if (!Mark) {
      return;
    }

    const keywords = isBrowser
      ? new URLSearchParams(location.search).getAll(SEARCH_PARAM_HIGHLIGHT)
      : [];

    setTimeout(() => {
      const root = document.querySelector("article");
      if (!root) {
        return;
      }

      const mark = new Mark(root);
      mark.unmark();
      if (keywords.length > 0) {
        mark.mark(keywords, {
          exclude: [".theme-doc-toc-mobile > button"],
        });
      }

      setInputValue(keywords.join(" "));
      search.current?.autocomplete.setVal(keywords.join(" "));
    });
  }, [isBrowser, location.search, location.pathname]);

  const onInputFocus = useCallback(() => {
    focusAfterIndexLoaded.current = true;
    loadIndex();
    setFocused(true);
    handleSearchBarToggle?.(true);
  }, [handleSearchBarToggle, loadIndex]);

  const onInputBlur = useCallback(() => {
    setFocused(false);
    handleSearchBarToggle?.(false);
  }, [handleSearchBarToggle]);

  const onInputMouseEnter = useCallback(() => {
    loadIndex();
  }, [loadIndex]);

  const onInputChange = useCallback((event) => {
    setInputValue(event.target.value);
    if (event.target.value) {
      setInputChanged(true);
    }
  }, []);

  const isMac = isBrowser ? isMacPlatform() : false;

  useEffect(() => {
    const searchBar = searchBarRef.current;
    const domValue = searchBar?.value;
    if (domValue) {
      setInputValue(domValue);
    }
  }, []);

  useEffect(() => {
    if (!searchBarShortcut || !searchBarShortcutKeymap) {
      return;
    }

    const parsedKeymap = parseKeymap(searchBarShortcutKeymap);
    const handleShortcut = (event) => {
      if (matchesKeymap(event, parsedKeymap)) {
        event.preventDefault();
        searchBarRef.current?.focus();
        onInputFocus();
      }
    };

    document.addEventListener("keydown", handleShortcut);
    return () => {
      document.removeEventListener("keydown", handleShortcut);
    };
  }, [onInputFocus]);

  const onClearSearch = useCallback(() => {
    const params = new URLSearchParams(location.search);
    params.delete(SEARCH_PARAM_HIGHLIGHT);
    const paramsStr = params.toString();
    const searchUrl =
      location.pathname + (paramsStr !== "" ? `?${paramsStr}` : "") + location.hash;

    if (searchUrl !== location.pathname + location.search + location.hash) {
      history.push(searchUrl);
    }

    setInputValue("");
    search.current?.autocomplete.setVal("");
  }, [location.pathname, location.search, location.hash, history]);

  const onContextChange = useCallback((event) => {
    const next = event.target.value;
    setManualContextSelection(true);
    setSearchContext(next);
    indexStateMap.current.delete(next);
    if (search.current) {
      search.current.autocomplete.destroy();
      search.current = null;
    }
    setLoading(false);
  }, []);

  const allowedContexts = ["api", "new-cli"];

  return (
    <div
      className={clsx("navbar__search", styles.searchBarContainer, {
        [styles.searchIndexLoading]: loading && inputChanged,
        [styles.focused]: focused,
      })}
      hidden={hidden}
      dir="ltr"
    >
      <div className={styles.searchControls}>
        <select
          className={styles.searchContextSelect}
          value={searchContext}
          onChange={onContextChange}
          aria-label={translate({
            id: "theme.SearchBar.contextLabel",
            message: "Search context",
          })}
        >
          <option value="">Other documents</option>
          {allowedContexts.map((ctx) => (
            <option key={ctx} value={ctx}>
              {labelForContext(ctx)}
            </option>
          ))}
        </select>
      </div>

      <input
        placeholder={translate({
          id: "theme.SearchBar.label",
          message: "Search",
        })}
        aria-label="Search"
        className={clsx(`navbar__search-input ${styles.searchInput}`, {
          [styles.searchInputWithContext]: true,
        })}
        onMouseEnter={onInputMouseEnter}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={onInputChange}
        ref={searchBarRef}
        value={inputValue}
      />

      <LoadingRing className={styles.searchBarLoadingRing} />

      {searchBarShortcut &&
        searchBarShortcutHint &&
        (inputValue !== "" ? (
          <button className={styles.searchClearButton} onClick={onClearSearch}>
            ✕
          </button>
        ) : (
          isBrowser &&
          searchBarShortcutKeymap && (
            <div className={styles.searchHintContainer}>
              {getKeymapHints(searchBarShortcutKeymap, isMac).map((hint, index) => (
                <kbd key={index} className={styles.searchHint}>
                  {hint}
                </kbd>
              ))}
            </div>
          )
        ))}
    </div>
  );
}
