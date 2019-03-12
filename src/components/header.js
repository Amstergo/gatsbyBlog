import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, StaticQuery, Link } from "gatsby"

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
        </HeaderContainer>
      </HeaderWrapper>
    )}
  />
)

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
  display: flex;
`
const TitleLink = styled(Link)`
  color: white;
`

const ImageContainer = styled(Img)`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`

const ImageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
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
