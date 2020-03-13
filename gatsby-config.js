module.exports = {
  siteMetadata: {
    siteName: 'kwikcart',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATOCMS_API },
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey:  process.env.SNIPCART_API,
        autopop: true
      }
    }
  ]
};