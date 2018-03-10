import React from "react";
import { TestimonialPostTemplate } from "../../templates/testimonial-post";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    title={entry.getIn(["data", "title"])}
  />
);

export default BlogPostPreview;
