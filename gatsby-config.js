// const p5 = require("p5");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Graeme Mounsey, Digital Designer`,
    siteUrl: `https://www.graemeswork.com`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "c801247646f33d14dc8b3bd036e667",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `pages`,
        // Path to the directory
        path: `${__dirname}/src/pages/`,
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `projects`,
        // Path to the directory
        path: `${__dirname}/src/projects/`,
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "react-p5-wrapper",
    "gatsby-transformer-remark",
    `gatsby-plugin-netlify`,
    `gatsby-plugin-anchor-links`,
  ],
  siteMetadata: {
    title: "Graeme Mounsey",
    description: "Digital Designer. Communication Design Student at Parsons.",
    year: "2023",
  },
};
