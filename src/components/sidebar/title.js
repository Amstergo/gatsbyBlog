import React from "react"
import styled from "styled-components"

const Title = props => <TextTitle>{props.title}</TextTitle>

const TextTitle = styled.h3`
  color: #3a414e;
  position: relative;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    width: 20%;
    height: 4px;
    background-color: #ff9907;
    bottom: 4px;
    left: 0;
    z-index: -1;
  }
`

export default Title
