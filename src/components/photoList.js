import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const PhotoList = () => (
  <StaticQuery
    query={ImageQuery}
    render={data => (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {styles => (
          <Banner style={{ ...styles }}>
            <Img fluid={data.heroImage.childImageSharp.fluid} />
            <BannerText>
              <h3>Tours & Travels</h3>
              <h1>Amazing Places on earth</h1>
              <h4>March 13, 2019</h4>
            </BannerText>
          </Banner>
        )}
      </Spring>
    )}
  />
)

const Banner = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(1, 3, 15, 0.2);
    top: 0;
    left: 0;
    z-index: -1;
  }
`

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);

  h1,
  h3,
  h4 {
    color: white;
  }
`

export const HeroBannerImage = graphql`
  fragment HeroBannerImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const ImageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero-banner.png" }) {
      ...HeroBannerImage
    }
  }
`

export default PhotoList
