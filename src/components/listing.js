import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
            id
            slug
          }
        }
      }
    }
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(e => (
        <article key={e.node.frontmatter.id}>
          <Link to={`/posts${e.node.frontmatter.slug}`}>
            <h2>{e.node.frontmatter.title}</h2>
          </Link>
          <p>{e.node.frontmatter.date}</p>
          <p>{e.node.excerpt}</p>
          <Link to={`/posts${e.node.frontmatter.slug}`}>Read more</Link>
        </article>
      ))
    }
  />
)

export default Listing
