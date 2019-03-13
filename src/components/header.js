import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, StaticQuery, Link } from "gatsby"

import Facebook from "../images/facebook-logo.svg"
import Twitter from "../images/twitter.svg"
import Telegram from "../images/telegram.svg"
import Istagram from "../images/instagram.svg"

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
          <Menu>
            {menu.map(i => (
              <li key={i.name}>
                <Link to={i.path}>{i.name}</Link>
              </li>
            ))}
          </Menu>
          <Social>
            <Link to="/">
              <img src={Facebook} alt="twitter" />
            </Link>
            <Link to="/">
              <img src={Twitter} alt="twitter" />
            </Link>
            <Link to="/">
              <img src={Istagram} alt="instagram" />
            </Link>
            <Link to="/">
              <img src={Telegram} alt="telegram" />
            </Link>
          </Social>
        </HeaderContainer>
      </HeaderWrapper>
    )}
  />
)

const HeaderWrapper = styled.header`
  background: white;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 1.0875rem;
  display: grid;
  grid-template-columns: 0.4fr 1fr 0.4fr;
  grid-template-rows: 80px;
`

const Title = styled.h1`
  margin: 0;
  display: flex;
  justify-content: end;
  align-items: center;
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

const Menu = styled.ul`
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 20px 0 0;

    a {
      color: #3a414e;
      transition: 0.3s;
      background-image: none;

      &:hover {
        color: #ff9907;
      }
    }
  }

  li:last-child {
    margin: 0;
  }
`

const Social = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    width: 15px;
    height: 15px;
    margin-right: 20px;
    margin-bottom: 0;
    transition: 0.2s;
    background-image: none;

    img {
      margin: 0;
    }

    img:hover {
      fill: red;
    }
  }

  a:last-child {
    margin: 0;
  }
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

const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Archive",
    path: "/",
  },
  {
    name: "Category",
    path: "/",
  },
  {
    name: "Pages",
    path: "/",
  },
  {
    name: "Contact",
    path: "/",
  },
]

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
