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
        spaceId: "",
      },
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};
