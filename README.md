# gatsby-starter-try-ghost 

A Gatsby starter for creating blogs from headless [Ghost CMS](https://ghost.org/changelog/jamstack/). 

Turn your Ghost blog into a lightning fast static website. This Gatsby theme is a front-end replacement of the Ghost Handlebars engine featuring the standard Ghost Casper skin and functionality. All content is sourced from a headless Ghost CMS.


## Demo

>Play with the [Demo](https://styxlab.github.io) to get a first impression.


[![gatsby-starter-try-ghost](https://atmolabs.org/content/images/ghost-screenshot.jpg)](https://styxlab.github.io) 

&nbsp;


## Features

- Ghost Casper look and feel
- Sticky navigation headers
- [Gatsby images](https://using-gatsby-image.gatsbyjs.org/) :rocket: :new:
- Syntax highlighting with PrismJS :new:
- Rewrite CMS links to relative :new:
- Hover on author avatar
- Secondary navigation
- Styled 404 page
- SEO optimized
- Fully responsive
- Composable and extensible

## Performance

![Lighthouse Score](https://cms.gotsby.org/content/images/gotsby-lighthouse.png)


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
        siteUrl: `https://your-blog.com`, // Do not include a trailing slash!
    
        postsPerPage: 12, //for future use
    
        siteTitleMeta: `Gatsby Starter Ghost CMS`, // This allows an alternative site title for meta data for pages.
        siteDescriptionMeta: `Gastby Starter with Ghost CMS and Casper Skin`, // This allows an site description for meta data for pages.
    
        shareImageWidth: 1000, // Change to the width of your default share image
        shareImageHeight: 523, // Change to the height of your default share image
    
        shortTitle: `Ghost`, // Used for App manifest e.g. Mobile Home Screen
        siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
        backgroundColor: `#e9e9e9`, // Used for Offline Manifest
        themeColor: `#15171A`, // Used for Offline Manifest
    }
```

In the configuration shown above, the most important fields to be changed are `siteUrl`, `siteTitleMeta` and `siteDescriptionMeta`. Update at least those to fit your needs.


## Ghost Content API keys

All content is sourced from a Ghost CMS. If you don't customize the file `.ghost.json` content is fetched from the demo location at `https://cms.gotsby.org`. Surely you want to source your own content. Change the keys to match your own Ghost CMS Content API keys:

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

## Deploy

```bash
    gatsby build
```

After completion of the build process your static site can be found in the `public/` folder. Copy those files over to your webserver.

## Deploying on Gatsby Cloud

Fork `gatsby-starter-try-ghost` in GitHub. After logging into Gatsby Cloud make sure Gatsby Cloud has access rights to the forked repository. Select 'I already have a Gatsby Site' and then pick `gatsby-starter-try-ghost`. Skip integrations. For a first test also skip content keys. The build should start immediately and show the demo site. Provide content keys in order to source in your own Ghost content.

## Optimizing

You can disable the default Ghost Handlebars theme front-end by enabling the `Make this site private` flag within your Ghost settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the source of truth for SEO.


# Copyright & License

Copyright (c) 2020 styxlab - Released under the [MIT license](LICENSE).
