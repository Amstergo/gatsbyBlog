import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaCalendar, FaUser, FaComments } from "react-icons/fa"

import styled from "styled-components"

const postImgLayout = () => (
  <PostImgContainer>
    <StaticQuery
      query={POST_IMG_QUERY}
      render={data => (
        <div>
          <Img fluid={data.blog1.childImageSharp.fluid} />
        </div>
      )}
    />
    <PostImgContainerData>
      <li>
        <Link to="/">
          <FaUser />
          <span>admin</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaCalendar />
          <span>March 17,2019</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaComments />
          <span>2 Comments</span>
        </Link>
      </li>
    </PostImgContainerData>
  </PostImgContainer>
)

const PostImgContainer = styled.div`
  position: relative;
`

const PostImgContainerData = styled.ul`
  position: absolute;
  left: 0;
  bottom: 0;
  background: white;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 420px;
  padding-left: 20px;
  align-items: center;
  margin: 0;
  font-size: 80%;

  @media (max-width: 430px) {
    font-size: 70%;
    position: inherit;
    padding-left: 0;
  }

  li {
    margin: 0;
    padding-right: 25px;

    &:last-child {
      padding-right: 0;
    }

    a {
      background-image: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: gray;
      padding: 15px 0;

      span {
        margin-left: 10px;
      }
    }
  }
`

export const POST_IMG_QUERY = graphql`
  query {
    blog1: file(relativePath: { eq: "blog1.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default postImgLayout
