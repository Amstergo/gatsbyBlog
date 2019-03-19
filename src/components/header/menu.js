import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Menu = () => (
  <>
    <MenuBtn type="checkbox" id="menu-btn" />
    <MenuIcon for="menu-btn">
      <Navicon />
    </MenuIcon>
    <MenuWrapper>
      {menu.map(i => (
        <li key={i.name}>
          <Link to={i.path}>{i.name}</Link>
        </li>
      ))}
    </MenuWrapper>
  </>
)

const MenuWrapper = styled.ul`
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: max-height 0.2s ease-out;

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

  @media (max-width: 960px) {
    max-height: 0;
    flex-direction: column;
    grid-area: menu;

    li {
      border-bottom: 1px solid #ededed33;
      display: block;
      width: 100%;
      margin: 0;

      &:first-child {
        border-top: 1px solid #ededed33;
      }

      &:last-child {
        border-bottom: none;
      }

      a {
        line-height: 3;
        display: block;
        padding-left: 10px;
      }
    }
  }
`

const Navicon = styled.span`
  background-color: #333;
  display: none;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;

  &::after,
  ::before {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  &::after {
    top: 5px;
  }

  &::before {
    top: -5px;
  }

  @media (max-width: 960px) {
    display: block;
    grid-area: toogle;
    align-self: center;
    justify-self: end;
    background-color: white;

    &::after,
    &::before {
      background-color: white;
    }
  }
`
const MenuIcon = styled.label`
  display: none;

  @media (max-width: 960px) {
    display: block;
    grid-area: toogle;
    align-self: center;
    justify-self: end;
    background-color: inherit;
    padding: 20px 10px;
  }
`

const MenuBtn = styled.input`
  display: none;

  &:checked + ${MenuIcon} + ${MenuWrapper} {
    max-height: 300px;
  }

  &:checked + ${MenuIcon} + ${Navicon} {
    background-color: white;
  }

  &:checked ~ ${MenuIcon} ${Navicon}:after {
    transform: rotate(-45deg);
  }

  &:checked ~ ${MenuIcon} ${Navicon}:before {
    transform: rotate(45deg);
  }

  &:checked
    ~ ${MenuIcon}
    ${Navicon}:after,&:checked
    ~ ${MenuIcon}
    ${Navicon}:before {
    top: 0;
  }

  @media (max-width: 960px) {
    &:checked ~ ${MenuIcon} ${Navicon} {
      background-color: black;
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

export default Menu
