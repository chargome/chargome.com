---
id: remark-code-highlighting
title: Setup code highlighting for remark 
subtitle: Be a bright ass light in this dark ass world
datePublished: 03-09-2022
tags: ['react', 'next.js', 'typescript', 'prism']
---

&nbsp;

## Problem

Out of the box, .md files parsed with [remark](https://remark.js.org/) do not add syntax highlighting to the generated html. For injecting the neccessary styles, we will make use of a popular library that accomplishes this task for us: [Prism](https://prismjs.com/).

This article will show how to use syntax highlighting for your .md file code snippets. You will be able to choose a theme of your preference.

## Setup

My setup (the page you are currently on) runs on the following stack:
  - [Next.js](https://nextjs.org/) with [Typescript](https://www.typescriptlang.org/)
  - [remark](https://remark.js.org/) and [gray-matter](https://github.com/jonschlinkert/gray-matter) for parsing .md files

## Steps

### 1: install and prepare

Assuming you have a [next.js app with remark](https://nextjs.org/blog/markdown) up and running, install [remark-prism](https://www.npmjs.com/package/remark-prism):

```
npm i remark-prism
```
&nbsp;

Next, [download a prism theme of your choice](https://prismjs.com/download.html), and copy only the css file included to your repo (e.g. to a styles folder). Include it in your app:

```ts
// e.g. in _app.tsx
import 'path/to/your/styles/prism.css'
```
&nbsp;

Alternatively you can include the stylesheet from a cdn:
```ts
// e.g. in the <Head> of _app.tsx
<link
  href="https://unpkg.com/prismjs@0.0.1/themes/prism-[YOUR-THEME].css"
  rel="stylesheet"
/>
```
&nbsp;

### 2: create your md parser
For parsing your md files, you have to add the remark-prism library to your remark pipeline:
```ts
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

const parseMdContent = (rawContent: string): string => {
  const processedContent = await remark()
      .use(html, { sanitize: false })
      .use(prism)
      .process(rawContent);
  return processedContent.toString();
};
```
&nbsp;

## Outcome
The return value now contains the generated html with all classes appropriately set for highlighting using the prism css class we included earlier.

You can check out a full implementation for this website [here](https://github.com/chargome/chargome.com).

I'm gonna be honest here, I just created this article to test out my blog and the syntax highlighting for myself. 🦧



