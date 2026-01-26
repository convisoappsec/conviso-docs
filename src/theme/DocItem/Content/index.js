import React from "react";
import Content from "@theme-original/DocItem/Content";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { useLocation } from "@docusaurus/router";
import ContributionCTA from "@site/src/components/ContributionCTA/ContributionCTA";
import ResourcesFooter from "@site/src/components/ResourcesFooter/ResourcesFooter";

export default function DocItemContent(props) {
  const { metadata } = useDoc();
  const { pathname } = useLocation();
  const hideExtras =
    metadata?.unversionedId === "index" ||
    pathname === "/" ||
    pathname === "/index" ||
    pathname === "/index.html";

  return (
    <>
      <Content {...props} />
      {!hideExtras && <ContributionCTA />}
      {!hideExtras && <ResourcesFooter />}
    </>
  );
}
