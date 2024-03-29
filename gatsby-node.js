/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const postsQuery = await graphql(`
    {
      blog {
        posts: postsConnection(first: 100) {
          edges {
            node {
              status
              updatedAt
              createdAt
              id
              title
              slug
              content
              coverImage {
                status
                updatedAt
                createdAt
                id
                handle
                fileName
                height
                width
                size
                mimeType
                url
              }
              dateAndTime
              tags
              author {
                id
                name
              }
            }
          }
        }
      }
    }
  `)

  postsQuery.data.blog.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.slug}`,
      component: path.resolve("./src/components/postLayout.js"),
      context: {
        data: node,
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
