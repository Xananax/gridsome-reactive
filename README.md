![Logo](./src/assets/Logo.svg)

# Vue-Remark Blog & Website Template

Uses [Vue-Remark](https://github.com/gridsome/gridsome/tree/master/packages/vue-remark/) which allows to use components in Markdown (like [MDX](https://mdxjs.com/)).

Heavily inspired from [Lauragift's minimal blog](https://github.com/lauragift21/gridsome-minimal-blog) template.

It thrives to provide a complete base to build decent applications easily, while making opting out of features easy-ish.

Additionally, the following niceties are included:

- Templates things:
  - Use [pug](https://pugjs.org/) and [Stylus](http://stylus-lang.com/) for templates.
  - Demonstrates adding metadata to `gridsome.config.js` that becomes available on metadata queries.
  - Globally available `<Markdown>` components which *remarks* internal text (plugins don't work with it though). 
- Styles & Themes:
  - Uses the [Stylish](https://www.fontsquirrel.com/fonts/stylish) font (edit `src/config/style` to remove).
  - Ready to use icons with [vue-font-awesome](https://github.com/FortAwesome/vue-fontawesome). Just use `<fa-icon i="spinner"/>` (or `<fa-icon i="github" size="lg"/>`). Add/remove the icons you want in `src/components/fontAwesome.js`.
- Pipeline things:
  - Generates a sitemap and an RSS feed automatically, which does transform Markdown to HTML (both [gridsome-plugin-rss](https://github.com/gridsome/gridsome/issues/514) and [gridsome-plugin-feed](https://github.com/onecrayon/gridsome-plugin-feed/issues/2) don't by default).
  - Can load SVGs as Vue components.
  - Favicon automatically generated from SVG Logo (in `static/logo.svg`).
  - Auto-registers all components in the `components` directory. This is probably *not suitable* for ambitious projects, where magic is not desirable. Remove it by removing `src/config/autoLoadComponents`.
- Markdown Handling:
  - Markdown uses [Mermaid](https://github.com/temando/remark-mermaid), [TOC](https://github.com/remarkjs/remark-toc), as well as Gridsome's [PrismJS](https://www.npmjs.com/package/@gridsome/remark-prismjs). Links get nofollow by default.
  - **Note**: While [this issue](https://github.com/gridsome/gridsome/issues/902) is worked on, you'll have to enter `timeToRead` yourself in the blog posts.

## Deploy Gridsome project
Use this deploy button to get your own copy of the repository.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lauragift21/gridsome-minimal-blog)
