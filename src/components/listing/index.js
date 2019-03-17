import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { IoIosArrowRoundForward } from "react-icons/io"

import PostImgLayout from "./postImgLayout"

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(e => (
        <PostContainer key={e.node.frontmatter.id}>
          <PostImgLayout />
          <PostTextContainer>
            <Title to={`/posts${e.node.frontmatter.slug}`}>
              <h2>{e.node.frontmatter.title}</h2>
            </Title>
            <Desc>{e.node.excerpt}</Desc>
            <ReadMore to={`/posts${e.node.frontmatter.slug}`}>
              <span>Read more</span>
              <IoIosArrowRoundForward
                style={{ fontSize: "200%", marginLeft: "5px" }}
              />
            </ReadMore>
          </PostTextContainer>
        </PostContainer>
      ))
    }
  />
)

const PostContainer = styled.article`
  margin-top: 50px;
`

const PostTextContainer = styled.div`
  padding-top: 40px;
`

const Title = styled(Link)`
  h2 {
    font-weight: bold;
    color: #0000009e;
  }
`

const Desc = styled.p`
  color: #777;
`

const ReadMore = styled(Link)`
  background-color: black;
  color: #ff9907;
  text-transform: uppercase;
  font-size: 80%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  max-width: 170px;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background-color: #ff9907;
    color: black;
  }
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
            id
            slug
          }
        }
      }
    }
  }
`

export default Listing
