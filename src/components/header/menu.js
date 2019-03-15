import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Menu = () => (
  <MenuWrapper>
    {menu.map(i => (
      <li key={i.name}>
        <Link to={i.path}>{i.name}</Link>
      </li>
    ))}
  </MenuWrapper>
)

const MenuWrapper = styled.ul`
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

export default Menu
