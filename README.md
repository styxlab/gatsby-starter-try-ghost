# gatsby-starter-try-ghost
[![Released under MIT license.](https://badgen.net/github/license/micromatch/micromatch)](https://github.com/styxlab/gatsby-starter-try-ghost/blob/master/LICENSE)
[![gatsby-starter-try-ghost npm package version.](https://badgen.net/npm/v/gatsby-starter-try-ghost)](https://www.npmjs.org/package/gatsby-starter-try-ghost)

A Gatsby starter for creating blogs from headless [Ghost CMS](https://ghost.org/changelog/jamstack/). 

Turn your Ghost blog into a flaring fast static website. This Gatsby theme is a front-end replacement of the Ghost Handlebars engine featuring the standard Ghost Casper skin and functionality. All content is sourced from a headless Ghost CMS.


## Tutorials ✨ 🆕

>Check out the [Tutorials](https://www.jamify.org) for practical guides on using this project.


## Demo

>Play with the [Demo](https://demo.jamify.org/) to get a first impression.


[![gatsby-starter-try-ghost](https://static.gotsby.org/v1/assets/images/jamify-demo.png)](https://styxlab.github.io) 

&nbsp;


## Features

- Ghost Casper look and feel
- Infinite Scroll ✨ 🆕
- [Gatsby images](https://using-gatsby-image.gatsbyjs.org/) 🚀
- Featured posts pinned on top 🆕
- Sticky navigation headers
- Hover on author avatar
- Styled 404 page
- SEO optimized
- Fully responsive
- Advanced routing 🆕
- Composable and extensible


## Performance

![Lighthouse Score](https://static.gotsby.org/v1/assets/images/jamify-lighthouse.png)

## Included Plugins

The following plugins have been included for convenience:

| Name | Version | Description |   
| ---- | ------- | ----------- |
| [`gatsby-theme-ghost-dark-mode`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-dark-mode) | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-dark-mode)](https://www.npmjs.com/package/gatsby-theme-ghost-dark-mode) | Dark mode toggle 🌗 |
| [`gatsby-rehype-ghost-links`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-rehype-ghost-links) | [![version](https://badgen.net/npm/v/gatsby-rehype-ghost-links)](https://www.npmjs.com/package/gatsby-rehype-ghost-links) | Rewrite CMS links from absolute to relative |
| [`gatsby-rehype-prismjs`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-rehype-prismjs) | [![version](https://badgen.net/npm/v/gatsby-rehype-prismjs)](https://www.npmjs.com/package/gatsby-rehype-prismjs) | Syntax highlighting with [PrismJS](http://prismjs.com/) |
| [`gatsby-theme-ghost-members`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-members) 🆕 | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-members)](https://www.npmjs.com/package/gatsby-theme-ghost-members) | Member Subscriptions |


If you don't need them, you can take them out in `gatsby-config.js` and `package.json` which may save you some time during the build process.


## More Plugins

Additional features can be integrated by installing Gatsby themes or plugins. The following plugins have been tested to work with [`gatsby-starter-try-ghost`](https://github.com/styxlab/gatsby-starter-try-ghost):

| Name | Version | Description |   
| ---- | ------- | ----------- |
| [`gatsby-theme-ghost-contact`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-contact) | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-contact)](https://www.npmjs.com/package/gatsby-theme-ghost-contact) | Contact page |
| [`gatsby-theme-ghost-commento`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-commento) | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-commento)](https://www.npmjs.com/package/gatsby-theme-ghost-commento) | Commenting system with [Commento](https://commento.io/) |
| [`gatsby-theme-ghost-toc`](https://github.com/styxlab/gatsby-theme-try-ghost/tree/master/packages/gatsby-theme-ghost-toc) 🆕 | [![version](https://badgen.net/npm/v/gatsby-theme-ghost-toc)](https://www.npmjs.com/package/gatsby-theme-ghost-toc) | Table of Contents |
| [`gatsby-plugin-ackee-tracker`](https://github.com/burnsy/gatsby-plugin-ackee-tracker) | [![version](https://badgen.net/npm/v/gatsby-plugin-ackee-tracker)](https://www.npmjs.com/package/gatsby-plugin-ackee-tracker) | Site tracking with [Ackee](https://github.com/electerious/Ackee) |
| [`gatsby-plugin-google-analytics`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics) | [![version](https://badgen.net/npm/v/gatsby-plugin-google-analytics)](https://www.npmjs.com/package/gatsby-plugin-google-analytics) | Site tracking with [Google Analytics](https://developers.google.com/analytics) |


## Getting Started

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
    gatsby develop
    ```
    and visit your site at `http://localhost:8000`.

## Configure

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
    
        // Change to the width and height of your default share image
        shareImageWidth: 1000, 
        shareImageHeight: 523,
    
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


## Ghost Content API keys

All content is sourced from a Ghost CMS. By default, content is fetched from the demo location at `https://cms.gotsby.org`. Surely you want to source your own content. In your base directory `try-ghost`, add a new file `.ghost.json` that contains the following JSON structure:

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

Change the url and keys to match your own Ghost CMS Content API keys.

## Deploy

```bash
    gatsby build
```

After completion of the build process your static site can be found in the `public/` folder. Copy those files over to your webserver.

## Deploy on Gatsby Cloud

Fork `gatsby-starter-try-ghost` in GitHub. After logging into Gatsby Cloud make sure Gatsby Cloud has access rights to your forked repository. Select *I already have a Gatsby Site* and then pick *gatsby-starter-try-ghost*. Skip integrations. For a first test also skip content keys. The build should start immediately and show the demo site. Provide content keys in order to source in your own content from Ghost CMS.

## Ensure headless mode of Ghost CMS

For best SEO results it is strongly recommended to disable the default Ghost Handlebars theme front-end by selecting the *Make this site private* flag within your Ghost admin settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the authoritative source for search engines.

## Reporting issues

Please report all bugs and issues at [gatsby-theme-try-ghost/issues](https://github.com/styxlab/gatsby-theme-try-ghost/issues) as all development is happening there.

# Copyright & License

Copyright (c) 2020 styxlab - Released under the [MIT license](LICENSE).
