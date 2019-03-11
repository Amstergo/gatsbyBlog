/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const results = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  results.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/posts${node.frontmatter.slug}`,
      component: path.resolve("./src/components/postLayout.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  // const { createPage } = actions

  // return new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             frontmatter {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //       createPage({
  //         path: `/posts${node.frontmatter.slug}`,
  //         component: path.resolve("./src/components/postLayout.js"),
  //       })
  //     })
  //     resolve()
  //   })
  // })

  // return async ({ graphql, actions }) => {
  //   try {
  //     const data = await graphql(`
  //       {
  //         allMarkdownRemark {
  //           edges {
  //             node {
  //               frontmatter {
  //                 slug
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `)
  //     const result = await data.allMarkdownRemark.edges.forEach(({ node }) => {
  //       createPage({
  //         path: node.frontmatter.slug,
  //         component: path.resolve("./src/components/postLayout.js"),
  //       })
  //     })
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
}
