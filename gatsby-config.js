module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "/mit",
  siteMetadata: {
    siteUrl: `https://2022.igem.wiki`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/_content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images-v2`,
          { resolve: `gatsby-remark-images`, options: { maxWidth: 960 } },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-numbered-footnotes`,
        ],
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [require("rehype-katex")],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-minify`,
  ],
};
