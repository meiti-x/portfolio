module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "meitix",
    author: {
      name: "meitix",
    },

    siteUrl: "https://mahdi-momeni.github.io/portfolio/",
    description:
      "Software engineer and open-source creator. This is my digital garden.",
    feedUrl: "https://www.taniarascia.com/rss.xml",
    logo: "https://www.taniarascia.com/logo.png",
  },
  plugins: [
    // ===================================================================================
    // Meta
    // ===================================================================================

    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "meitix",
        short_name: "meitix",
        description:
          "Software engineer and open source creator. This is my digital garden.",
        start_url: "/",
        background_color: "white",
        theme_color: "#6b76f3",
        display: "minimal-ui",
        icon: `static/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [
                    { "content:encoded": edge.node.html },
                    { author: "hello@taniarascia.com" },
                  ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 30,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "post" } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        slug
                        title
                        date
                        template
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Tania Rascia | RSS Feed",
          },
        ],
      },
    },

    // ===================================================================================
    // Images and static
    // ===================================================================================

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },

    // ===================================================================================
    // Markdown
    // ===================================================================================

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              // linkImagesToOriginal: false,
              backgroundColor: "transparent",
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: true,
              },
            },
          },
        ],
      },
    },
  ],
};
