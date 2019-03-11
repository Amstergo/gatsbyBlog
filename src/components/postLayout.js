import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./layout"

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`

export default class postLayout extends Component {
  render() {
    console.log(this.props.data)
    const { markdownRemark } = this.props.data

    return (
      <Layout>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}
