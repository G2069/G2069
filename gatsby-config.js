module.exports = {
  pathPrefix: "/gatsby-g-102-v1.02",
  siteMetadata: {
    title: `G-2069`,
    //description for search engine optimization
    description: `Your Metaverse World - Start conquering the metaverse.`,
    author: `@G2069`,
    siteUrl: `https://g2069.com`,
    image:`src/images/seo-image.png`,
    keywords: `G2069, G-2069, NFT games, best NFT game, Metaverse, Best metaverse game, Play to earn, Play-to-Earn, BNB game, Gamefi, Binance Smart Chain Game`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-J97ZZTLCWM",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `G2069 - Your metaverse world`,
        short_name: `G2069`,
        start_url: `/`,
        background_color: `#5ed3e0`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-196x196.png`,
        icons: [
          {
            src: `src/images/logo-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `src/images/logo-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `src/images/logo-196x196.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
