---
templateKey: home-page
title: 'Hi, I''m Daniel Snell'
subtitle: Growth Expert and Aspiring Full Stack Developer
featuredImage: /img/13062476_1675246516059028_7757371603691209831_n (1).jpg
description: Example
---
# We wanted to make something...

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
