import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { LAST_DOC_KEY } from '@site/src/theme/releaseStorageKeys';

// Routes that are NOT documentation pages (docs live at the site root "/").
function isDocRoute(pathname) {
  if (!pathname) return false;
  // Exclude release notes, support, and the bare home root.
  if (pathname === '/' || pathname === '') return false;
  if (pathname.startsWith('/releases')) return false;
  if (pathname.startsWith('/support')) return false;
  return true;
}

// Wraps the whole app. On every navigation to a documentation page, remember
// it so the Release Notes screen can offer a "continue reading" shortcut.
export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const { pathname, search, hash } = location;
    if (isDocRoute(pathname)) {
      try {
        window.sessionStorage.setItem(LAST_DOC_KEY, pathname + search + hash);
      } catch (e) {
        /* storage unavailable — ignore */
      }
    }
  }, [location]);

  return <>{children}</>;
}
