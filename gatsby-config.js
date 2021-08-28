module.exports = {
  siteMetadata: {
    title: `The Nine Queens`,
    description: `The Nine Queens is a leading Software Development company  offering its inimitable proficiency and end to end services. We are greatly pivoted on latest technology. Established half a decade ago, The Nine Queens aims to render its clients top notch, scalable, sustainable and dynamic software solutions.`,
    author: `@sraman`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Nine Queens`,
        short_name: `starter`,
        start_url: `/`,
        background_color: '#fb9b19',
        theme_color: '#2c2d32',
        display: `minimal-ui`,
        icon: `src/images/download.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-143394545-1`
      }
    }
  ]
}
