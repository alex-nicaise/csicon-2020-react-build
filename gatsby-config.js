module.exports = {
  siteMetadata: {
    title: `CSI Conference 2020`,
    description: `CSICon 2020 is a production of the Committee for Skeptical Inquiry, the people who bring you Skeptical Inquirer magazine, the group that began organized skepticism a generation ago.`,
    author: `Alex Nicaise`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `csicon-2020-react-build`,
        short_name: `csicon-2020`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `https://csiconference.org/graphql`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}