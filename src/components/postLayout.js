import React from "react"
import styled from "styled-components"

import Layout from "./layout"

const PostLayout = ({ pageContext: { data } }) => (
  <Layout>
    <Container>
      <h1>{data.title}</h1>
      <Author>
        {data.author.name}
        <span>{data.dateAndTime}</span>
      </Author>
      <p>{data.content}</p>
      <img src={data.coverImage.url} alt="" />
    </Container>
  </Layout>
)

const Container = styled.div`
  margin: 50px 0;
`

const Author = styled.h3`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  span {
    color: #b1b1b1;
    font-size: 70%;
  }
`

export default PostLayout
