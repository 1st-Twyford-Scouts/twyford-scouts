require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.twyfordscouts.org.uk",
    title: "1st Twyford Scout Group",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        enableTags: true
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image"
  ],
};
