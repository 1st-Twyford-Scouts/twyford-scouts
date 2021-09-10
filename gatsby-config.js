module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "TwyfordScouts",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "bPdv3A4oG_H9wfLKn_g-ktCjuw6ThkmgNBlLDZzz7vQ",
        spaceId: "amtvha5r3fwq",
        enableTags: true
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image"
  ],
};
