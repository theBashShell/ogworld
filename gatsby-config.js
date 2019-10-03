const path = require('path');

module.exports = {
  siteMetadata: {
    title: `OG World | Openning Ghana to the World`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `static`, `images`),
      },
    },
  ],
};
