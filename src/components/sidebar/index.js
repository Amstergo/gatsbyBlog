import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Title from "./title"

const Sidebar = props => (
  <SidebarWrapper>
    <SidebarBox>
      <Title title="Newsletter" />
      <Subscribe>
        <input placeholder="Enter email" />
        <Link to="/">Subscribe</Link>
      </Subscribe>
    </SidebarBox>
    <SidebarBox>
      <Title title="Category" />
    </SidebarBox>
  </SidebarWrapper>
)

const SidebarWrapper = styled.div``

const SidebarBox = styled.div`
  background-color: #f9f9ff;
  padding: 50px 30px;
  margin-bottom: 30px;
`

const Subscribe = styled.form`
  input {
    border: 1px solid rgba(112, 111, 135, 0.2);
    height: 55px;
    padding: 0 15px;
    font-size: 14px;
    width: 100%;
    outline: none;
    color: #999;
  }

  a {
    background-image: none;
    background-color: #222;
    color: #ff9907;
    text-transform: uppercase;
    display: block;
    padding: 13px 0;
    text-align: center;
    font-size: 13px;
    margin-top: 15px;
    transition: 0.2s;

    &:hover {
      background-color: #222222c7;
    }
  }
`

export default Sidebar
