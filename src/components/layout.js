/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header/index"
import Footer from "./footer"
// import Archive from "./archive"

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>
          <main>{children}</main>
        </Wrapper>
        <Footer />
        {/* <Archive /> */}
      </>
    )}
  />
)

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
