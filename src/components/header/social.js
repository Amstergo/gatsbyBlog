import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Facebook from "../../images/facebook-logo.svg"
import Twitter from "../../images/twitter.svg"
import Telegram from "../../images/telegram.svg"
import Istagram from "../../images/instagram.svg"

const Social = () => (
  <SocialWrapper>
    <Link to="/">
      <img src={Facebook} alt="twitter" />
    </Link>
    <Link to="/">
      <img src={Twitter} alt="twitter" />
    </Link>
    <Link to="/">
      <img src={Istagram} alt="instagram" />
    </Link>
    <Link to="/">
      <img src={Telegram} alt="telegram" />
    </Link>
  </SocialWrapper>
)

const SocialWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    width: 15px;
    height: 15px;
    margin-right: 20px;
    margin-bottom: 0;
    transition: 0.2s;
    background-image: none;

    img {
      margin: 0;
    }

    img:hover {
      fill: red;
    }
  }

  a:last-child {
    margin: 0;
  }

  @media (max-width: 960px) {
    display: none;
  }
`

export default Social
