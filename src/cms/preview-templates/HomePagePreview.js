import React from "react";
import { HomePageTemplate } from "../../templates/home-page";

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePageTemplate
    content={widgetFor("content")}
    description={entry.getIn(["data", "description"])}
    title={entry.getIn(["data", "title"])}
  />
);

export default HomePagePreview;
