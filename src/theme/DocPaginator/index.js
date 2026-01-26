import React from "react";
import DocPaginator from "@theme-original/DocPaginator";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { useLocation } from "@docusaurus/router";

export default function DocPaginatorWrapper(props) {
  const { metadata } = useDoc();
  const { pathname } = useLocation();
  const hidePaginator =
    metadata?.unversionedId === "index" ||
    pathname === "/" ||
    pathname === "/index" ||
    pathname === "/index.html";

  if (hidePaginator) {
    return null;
  }

  return <DocPaginator {...props} />;
}
