import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const links = [
  {
    name: "Home page",
    path: "/",
  },
  {
    name: "Projects",
    path: "/some-path",
  },
]

const Footer = () => (
  <FooterWrapper>
    <ul>
      {links.map(i => (
        <li key={i.name}>
          <Link to={i.path}>{i.name}</Link>
        </li>
      ))}
    </ul>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  border-top: 1px solid red;
  margin-top: 20px;
`

export default Footer
