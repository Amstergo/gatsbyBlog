import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, StaticQuery, Link } from "gatsby"

import Social from "./social"
import Menu from "./menu"

const Header = ({ siteTitle, children }) => (
  <StaticQuery
    query={ImageQuery}
    render={data => (
      <HeaderWrapper>
        <HeaderContainer>
          <Title>
            <ImageContainer fluid={data.imageOne.childImageSharp.fluid} />
            <TitleLink to="/">{siteTitle}</TitleLink>
          </Title>
          <Menu />
          <Social />
        </HeaderContainer>
      </HeaderWrapper>
    )}
  />
)

const HeaderWrapper = styled.header`
  background-color: white;

  @media (max-width: 960px) {
    background-color: black;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 1.0875rem;
  display: grid;
  grid-template-columns: 0.4fr 1fr 0.4fr;
  grid-template-rows: 80px;

  @media (max-width: 960px) {
    grid-template-areas: "logo toogle" "menu menu";
    grid-template-columns: 0.4fr 1fr;
    max-width: 660px;
  }
`

const Title = styled.h1`
  margin: 0;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 960px) {
    grid-area: logo;
  }
`
const TitleLink = styled(Link)`
  color: #373f4d;
  background-image: none;
  transition: 0.3s;
  font-weight: bold;

  &:hover {
    color: #373f4db5;
  }
`

const ImageContainer = styled(Img)`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`

// const ImgFb = styled.div`
//   background: url(${Facebook});
//   width: 15px;
//   height: 15px;
//
//   &:hover {
//   }
// `

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const ImageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "gatsby-icon.png" }) {
      ...squareImage
    }
  }
`

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
