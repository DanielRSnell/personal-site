import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";

CMS.registerPreviewStyle("../layouts/sass/main.scss");
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
