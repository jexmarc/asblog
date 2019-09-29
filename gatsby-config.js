module.exports = {
   siteMetadata: {
      title: `AmmoSeek Blog`,
      description: `Welcome to the new AmmoSeek Blog. Here is where we'll keep you up to date with all the news, tips, tricks, features, offers, and more!`,
      author: `@gatsbyjs`,
   },
   plugins: [
      `gatsby-plugin-react-helmet`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`,
         },
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'posts',
            path: `${__dirname}/src/posts`,
         },
      },
      'gatsby-transformer-remark',
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,

      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/AS-Circle-Logo-For-LightBackgrounds-128x128.png`, // This path is relative to the root of the site.
         },
      },
      'gatsby-plugin-styled-components',
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
   ],
}
