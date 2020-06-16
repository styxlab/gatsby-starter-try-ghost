module.exports = {
    // Do not include a trailing slash!
    siteUrl: `https://demo.jamify.org`,

    // Enable infinite scroll (default: true)
    infiniteScroll: true,

    // Initial number fetched, scrolling lazy loads posts one by one
    // If infinite scroll is disabled: maximum number of post shown per page
    postsPerPage: 3,

    // This allows an alternative site title for meta data for pages.
    siteTitleMeta: `Gatsby Starter Ghost CMS`,

    // This allows an site description for meta data for pages.
    siteDescriptionMeta: `Turn your Ghost blog into a flaring fast static site with Gatsby`,

    // Change to the width and height of your default share image
    shareImageWidth: 1000,
    shareImageHeight: 523,

    // Used for App and Offline manifest e.g. Mobile Home Screen
    shortTitle: `Jamify`,
    siteIcon: `favicon.png`,
    backgroundColor: `#e9e9e9`,
    themeColor: `#15171A`,

    // Include Gatsby images for lazy loading and image optimizations
    gatsbyImages: true,

    // Show more logs for debugging purposes (default: false)
    verbose: false,

    // Severity for verbose mode: (`info`, `warn`, `error`)
    severity: `info`,

    // External URL for serving images, videos and other media (e.g. `https://media.jamify.org`)
    mediaUrl: null,
}
