<p align="center">
  <a href="https://www.jamify.org">
    <img alt="Jamify" src="https://avatars1.githubusercontent.com/u/66115190?s=200&v=4" />
  </a>
</p>
<h1 align="center">
  Jamify's blog starter <br/>
</h1>

[![Released under MIT license.](https://badgen.net/github/license/micromatch/micromatch)](https://github.com/styxlab/gatsby-starter-try-ghost/blob/master/LICENSE)
[![gatsby-starter-try-ghost npm package version.](https://badgen.net/npm/v/gatsby-starter-try-ghost)](https://www.npmjs.org/package/gatsby-starter-try-ghost)

A [Gatsby](https://www.gatsbyjs.org/) starter for creating blogs from headless [Ghost CMS](https://ghost.org/changelog/jamstack/). 

Turn your Ghost blog into a flaring fast static website. This Gatsby theme is a front-end replacement of the Ghost Handlebars engine featuring an enhanced Ghost Casper look and feel. All content is sourced from a headless Ghost CMS.

&nbsp;

## 🎓 Tutorials

Check out the [Tutorials](https://www.jamify.org) for practical guides on using this project.

&nbsp;

## 🎉 Demo

>Play with the [Demo](https://demo.jamify.org/) to get a first impression.


[![gatsby-starter-try-ghost](https://static.gotsby.org/v1/assets/images/jamify-demo.png)](https://styxlab.github.io) 

&nbsp;

## ✨ Features

- Ghost Casper look and feel
- Images with [lazy-loading and blur-up effect](https://using-gatsby-image.gatsbyjs.org/) 🚀 🆕
- Infinite Scroll ✨
- Featured posts pinned on top 🆕
- Sticky navigation headers
- Hover on author avatar
- Styled 404 page
- SEO optimized
- Fully responsive
- Advanced routing 🆕
- Composable and extensible
- Incremental build enabled 🚀 🆕 

&nbsp;

## 🚀 Performance

![Lighthouse Score](https://static.gotsby.org/v1/assets/images/jamify-lighthouse.png)

&nbsp;

## 📦 Included Plugins

The following plugins have been included for convenience:

| Name | Version | Description |   
| ---- | ------- | ----------- |
| [`gatsby-theme-ghost-dark-mode`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-dark-mode) | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-dark-mode)](https://www.npmjs.com/package/gatsby-theme-ghost-dark-mode) | Dark mode toggle 🌗 |
| [`gatsby-rehype-ghost-links`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-rehype-ghost-links) | [![version](https://badgen.net/npm/v/gatsby-rehype-ghost-links)](https://www.npmjs.com/package/gatsby-rehype-ghost-links) | Rewrite CMS links from absolute to relative |
| [`gatsby-rehype-prismjs`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-rehype-prismjs) | [![version](https://badgen.net/npm/v/gatsby-rehype-prismjs)](https://www.npmjs.com/package/gatsby-rehype-prismjs) | Syntax highlighting with [PrismJS](http://prismjs.com/) |
| [`gatsby-theme-ghost-members`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-members) 🆕 | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-members)](https://www.npmjs.com/package/gatsby-theme-ghost-members) | Member Subscriptions |


If you don't need them, you can take them out in `gatsby-config.js` and `package.json` which may save you some time during the build process.

&nbsp;

## 🔥 More Plugins

Additional features can be integrated by installing Gatsby themes or plugins. The following plugins have been tested to work with [`gatsby-starter-try-ghost`](https://github.com/styxlab/gatsby-starter-try-ghost):

| Name | Version | Description |   
| ---- | ------- | ----------- |
| [`gatsby-rehype-inline-images`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-rehype-inline-images) 🆕 | [![version](https://badgen.net/npm/v/gatsby-rehype-inline-images)](https://www.npmjs.com/package/gatsby-rehype-inline-images) | Lazy-loading inline images with blur-up |
| [`gatsby-theme-ghost-contact`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-contact) | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-contact)](https://www.npmjs.com/package/gatsby-theme-ghost-contact) | Contact page |
| [`gatsby-theme-ghost-commento`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-commento) | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-commento)](https://www.npmjs.com/package/gatsby-theme-ghost-commento) | Commenting system with [Commento](https://commento.io/) |
| [`gatsby-theme-ghost-toc`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-toc) 🆕 | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-toc)](https://www.npmjs.com/package/gatsby-theme-ghost-toc) | Table of Contents |
| [`gatsby-plugin-ackee-tracker`](https://github.com/burnsy/gatsby-plugin-ackee-tracker) | [![version](https://badgen.net/npm/v/gatsby-plugin-ackee-tracker)](https://www.npmjs.com/package/gatsby-plugin-ackee-tracker) | Site tracking with [Ackee](https://github.com/electerious/Ackee) |
| [`gatsby-plugin-google-analytics`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics) | [![version](https://badgen.net/npm/v/gatsby-plugin-google-analytics)](https://www.npmjs.com/package/gatsby-plugin-google-analytics) | Site tracking with [Google Analytics](https://developers.google.com/analytics) |

&nbsp;

## 🏁 Getting Started

1. Install this starter by running

    ```bash
    gatsby new try-ghost https://github.com/styxlab/gatsby-starter-try-ghost
    ```

2. Change directory

    ```bash
    cd try-ghost
    ```

3. Run

    ```bash
    yarn develop
    ```
    and visit your site at `http://localhost:8000`.
    
&nbsp;

## 💡 Configure

```js
    //siteConfig.js
    module.exports = {
        // Do not include a trailing slash!
        siteUrl: `https://your-blog.com`,

        // Maximum number of post shown per page
        // Infinite Scroll: Initial chunk of posts, subsequent posts are fetched one by one
        postsPerPage: 3, 
    
        // This allows an alternative site title for meta data for pages.
        siteTitleMeta: `Gatsby Starter Ghost CMS`, 

        // This allows an site description for meta data for pages.
        siteDescriptionMeta: `Turn your Ghost blog into a flaring fast static site with Gatsby`, 
    
        // Used for App and Offline manifest e.g. Mobile Home Screen
        shortTitle: `Ghost`, 
        siteIcon: `favicon.png`, 
        backgroundColor: `#e9e9e9`,
        themeColor: `#15171A`,

        // Include Gatsby images for lazy loading and image optimizations (default: true)
        gatsbyImages: true,

        // Overwrite navigation menu (default: []), label is case sensitive
        // overwriteGhostNavigation: [{ label: `Home`, url: `/` }],
    }
```

In the configuration shown above, the most important fields to be changed are `siteUrl`, `siteTitleMeta` and `siteDescriptionMeta`. Update at least those to fit your needs.

&nbsp;

## 🔑 Ghost Content API keys

All content is sourced from a Ghost CMS. By default, content is fetched from the demo location at `https://cms.gotsby.org`. Surely you want to source your own content. There are two ways to make your content keys available. Choose the method according to your build scenario.

### Building with cloud providers

If you build your project with a cloud provider (e.g. Gatsby, Netlify, Vercel), the best option is to provide the keys with environment variables:

| Key | Value (example) |
| ----| ----- |
| GHOST_API_URL | http:\/\/localhost:2368 |
| GHOST_CONTENT_API_KEY | 9fccdb0e4ea5b572e2e5b92942 |

The place where you can define them depends on the provider, but you usually find the option under the site settings. This avoids publishing keys in a public repository and is most secure.

### Building locally

If you build locally or on a private network where the build directory is not accessible to the world, you can safely add a new `.ghost.json` file in your base directory with the following JSON structure:

```bash

    {
        "development": {
            "apiUrl": "http://localhost:2368",
            "contentApiKey": "9fccdb0e4ea5b572e2e5b92942"
        },
        "production": {
            "apiUrl": "http://localhost:2368",
            "contentApiKey": "9fccdb0e4ea5b572e2e5b92942"
        }
    }
```

This file is part of `.gitignore` to avoid accidentally publishing it to your public repository. Change the `apiUrl` and `contentApiKey` to match your own Ghost CMS Content API keys.

&nbsp;

## 🤯 Ensure headless mode of Ghost CMS

For best SEO results it is strongly recommended to disable the default Ghost Handlebars theme front-end by selecting the *Make this site private* flag within your Ghost admin settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the authoritative source for search engines.

&nbsp;

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/styxlab/gatsby-starter-try-ghost)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/styxlab/gatsby-starter-try-ghost)

&nbsp;

## 🔧 Update

It is recommended to install [npm-upgrade](https://www.npmjs.com/package/npm-upgrade) with `sudo npm install npm-upgrade -g`. Change into the base directory and update all packages with:

```bash    
    npm-upgrade
```

You will be prompted to update all packages within your `package.json` file. Next, download the new packages:

```bash
    yarn
    yarn clean
```
The update process is now complete and you can start a new build with `yarn build` (or `yarn develop`).

&nbsp;

## 💣 Reporting issues

Please report all bugs and issues at [gatsby-theme-try-ghost/issues](https://github.com/styxlab/gatsby-theme-try-ghost/issues) as all development is happening there.

&nbsp;

## 🧐 Disclaimer

This project is not affiliated with [Gatsby](https://www.gatsbyjs.org/) or [Ghost](https://ghost.org/).

&nbsp;

# Copyright & License

Copyright (c) 2020 styxlab - Released under the [MIT license](LICENSE).
