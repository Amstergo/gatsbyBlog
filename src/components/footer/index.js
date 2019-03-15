import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import FbSvg from "../../images/facebook-logo-hover.svg"

const Footer = () => (
  <StaticQuery
    query={ImageQuery}
    render={data => (
      <FooterWrapper>
        <FooterContainer>
          <div>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
          </div>
          <Newsletter>
            <h4>Newsletter</h4>
            <p>Stay update with our latest</p>
            <form>
              <input placeholder="Enter Email" />
              <button />
            </form>
          </Newsletter>
          <InstConatainer>
            <h4>Instragram Feed</h4>
            <ul>
              <li>
                <Img fluid={data.i1.childImageSharp.fluid} />
              </li>
              <li>
                <Img fluid={data.i2.childImageSharp.fluid} />
              </li>
              <li>
                <Img fluid={data.i3.childImageSharp.fluid} />
              </li>
              <li>
                <Img fluid={data.i4.childImageSharp.fluid} />
              </li>
              <li>
                <Img fluid={data.i5.childImageSharp.fluid} />
              </li>
              <li>
                <Img fluid={data.i6.childImageSharp.fluid} />
              </li>
              <li>
                <Img fluid={data.i7.childImageSharp.fluid} />
              </li>
              <li>
                <Img fluid={data.i8.childImageSharp.fluid} />
              </li>
            </ul>
          </InstConatainer>
          <div>
            <h4>Follow Us</h4>
            <p>Let us be social</p>
            <FollowIcons>
              <Link to="/">
                <img src={FbSvg} />
              </Link>
              <Link to="/">
                <img src={FbSvg} />
              </Link>
              <Link to="/">
                <img src={FbSvg} />
              </Link>
              <Link to="/">
                <img src={FbSvg} />
              </Link>
            </FollowIcons>
          </div>
        </FooterContainer>
        <span>
          Copyright ©2019 All rights reserved | This template is made with love
          by Amstergo
        </span>
      </FooterWrapper>
    )}
  />
)

const FooterWrapper = styled.footer`
  background-color: black;
  margin-top: 20px;
  padding: 110px 20px;

  > span {
    color: #797979;
    display: block;
    text-align: center;
    font-size: 80%;
  }
`

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.8fr 0.9fr 0.9fr 0.7fr;
  grid-column-gap: 2em;

  h4 {
    color: white;
    font-weight: bold;
  }

  p {
    color: #797979;
    font-size: 80%;
    max-width: 260px;
  }

  @media (max-width: 1110px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 610px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1em;

    p {
      max-width: 100%;
    }
  }
`

const Newsletter = styled.div`
  form {
    display: flex;

    input {
      background-color: #191919;
      border: none;
      font-size: 70%;
      padding-left: 15px;
      height: 40px;
      width: 80%;
      transition: 0.2s;

      &:focus {
        background-color: white;
        outline: none;
      }

      &::placeholder {
        color: #4f4f4f;
      }
    }

    button {
      background-color: #ff9907;
      border: none;
      width: 40px;
      height: 40px;

      &:after {
        content: "⟶";
      }
    }
  }
`

const InstConatainer = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    max-width: 310px;

    li {
      width: 58px;
      margin: 0 3px 8px;
    }

    @media (max-width: 610px) {
      max-width: 100%;

      li {
        margin-right: 10%;
      }
    }
  }
`

const FollowIcons = styled.div`
  display: flex;

  a {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    background-image: none;
  }

  @media (max-width: 610px) {
    margin-bottom: 1em;
  }
`

export const FooterInstImage = graphql`
  fragment FooterInstImage on File {
    childImageSharp {
      fluid(maxWidth: 58) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const ImageQuery = graphql`
  query {
    i1: file(relativePath: { eq: "i1.jpg" }) {
      ...FooterInstImage
    }
    i2: file(relativePath: { eq: "i2.jpg" }) {
      ...FooterInstImage
    }
    i3: file(relativePath: { eq: "i3.jpg" }) {
      ...FooterInstImage
    }
    i4: file(relativePath: { eq: "i4.jpg" }) {
      ...FooterInstImage
    }
    i5: file(relativePath: { eq: "i5.jpg" }) {
      ...FooterInstImage
    }
    i6: file(relativePath: { eq: "i6.jpg" }) {
      ...FooterInstImage
    }
    i7: file(relativePath: { eq: "i7.jpg" }) {
      ...FooterInstImage
    }
    i8: file(relativePath: { eq: "i8.jpg" }) {
      ...FooterInstImage
    }
  }
`

export default Footer
