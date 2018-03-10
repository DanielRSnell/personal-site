import React from "react";
import { ReviewPageTemplate } from "../../templates/review-page";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <ReviewPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default ReviewPagePreview;
