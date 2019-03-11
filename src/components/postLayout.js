import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./layout"

class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    console.log(markdownRemark)

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

export default postLayout
export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: { slug: { eq: "/first-post" } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
