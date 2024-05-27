import React from "react"

import "./mainContentDividerWrapperComponent.css"

import ContentDivider from "../mainContentDivider/mainContentDivider"

export default function contentDividderWrapperComponent() {
  return (
    <div className="contentWrapper">
      <ContentDivider />
    </div>
  );
}