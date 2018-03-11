---
templateKey: home-page
title: Example
subtitle: Example
featuredImage: /img/chemex.jpg
description: Example
---
# We wanted to make something...

![coffee](/img/coffee.png)

Something goes here.

```
import React from "react";
import { HomePageTemplate } from "../../templates/home-page";

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default HomePagePreview;

```
