import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort: { fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          frontmatter {
            id
            title
            slug
            date
          }
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ul>
            {allMarkdownRemark.edges.map(i => (
              <li key={i.node.frontmatter.id}>
                <Link to={`/posts${i.node.frontmatter.slug}`}>
                  {i.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </>
    )}
  />
)

export default Archive
