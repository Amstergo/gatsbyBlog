import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Spring } from "react-spring/renderprops"

const PhotoList = () => (
  <StaticQuery
    query={ImageQuery}
    render={data => (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {styles => (
          <div style={{ ...styles }}>
            <Img fluid={data.heroImage.childImageSharp.fluid} />
          </div>
        )}
      </Spring>
    )}
  />
)

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
