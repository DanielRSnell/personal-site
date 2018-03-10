import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ReviewPagePreview from "./preview-templates/ReviewPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import TestimonialPostPreview from "./preview-templates/TestimonialPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";

CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("review", reviewPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("testimonial", TestimonialPostPreview);
