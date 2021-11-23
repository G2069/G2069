module.exports = {
  pathPrefix: "/gatsby-g-102-v1.02",
  siteMetadata: {
    title: `G-2069`,
    //description for search engine optimization
    description: `Your Metaverse World - Start conquering the metaverse.`,
    author: `@G2069`,
    siteUrl: `https://g2069.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
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
        icon: `src/images/coin.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
