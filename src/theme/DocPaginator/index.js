import React from "react";
import DocPaginator from "@theme-original/DocPaginator";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { useLocation } from "@docusaurus/router";

export default function DocPaginatorWrapper(props) {
  let metadata = null;
  try {
    metadata = useDoc()?.metadata ?? null;
  } catch (error) {
    metadata = null;
  }
  const { pathname } = useLocation();
  const hasDocContext = Boolean(metadata);
  const hidePaginator =
    !hasDocContext ||
    metadata?.unversionedId === "index" ||
    pathname === "/" ||
    pathname === "/index" ||
    pathname === "/index.html";

  if (hidePaginator) {
    return null;
  }

  return <DocPaginator {...props} />;
}
