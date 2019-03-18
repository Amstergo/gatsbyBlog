import React from "react"
import styled from "styled-components"

const ContentLayout = ({ children }) => (
  <ContentWrapper>{children}</ContentWrapper>
)

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  grid-column-gap: 1.6em;
  margin-top: 50px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export default ContentLayout
