import React from "react";
import Content from "@theme-original/DocItem/Content";
import ResourcesFooter from "@site/src/components/ResourcesFooter/ResourcesFooter";

export default function DocItemContent(props) {
  return (
    <>
      <Content {...props} />
      <ResourcesFooter />
    </>
  );
}
