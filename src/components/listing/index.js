import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

import PostImgLayout from "./postImgLayout"

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(e => (
        <PostContainer key={e.node.frontmatter.id}>
          <PostImgLayout />
          <Link to={`/posts${e.node.frontmatter.slug}`}>
            <h2>{e.node.frontmatter.title}</h2>
          </Link>
          <p>{e.node.frontmatter.date}</p>
          <p>{e.node.excerpt}</p>
          <Link to={`/posts${e.node.frontmatter.slug}`}>Read more</Link>
        </PostContainer>
      ))
    }
  />
)

const PostContainer = styled.article`
  box-shadow: 0 0 20px 0px #dededead;
  padding: 10px;
  margin-bottom: 10px;
`

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

export default Listing
