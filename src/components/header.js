import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Title>
        <TitleLink to="/">{siteTitle}</TitleLink>
      </Title>
    </HeaderContainer>
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
`
const TitleLink = styled(Link)`
  color: white;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
