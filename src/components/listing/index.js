import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { IoIosArrowRoundForward } from "react-icons/io"
import { FaCalendar, FaUser, FaComments } from "react-icons/fa"

const Listing = () => (
  <ListingContainer>
    <StaticQuery
      query={LISTING_POSTS_QUERY}
      render={data =>
        data.allSitePage.edges.map(e => (
          <PostContainer key={e.node.context.data.id}>
            <PostImgContainer>
              <img src={e.node.context.data.coverImage.url} alt="" />
              <PostImgContainerData>
                <li>
                  <Link to="/">
                    <FaUser />
                    <span>{e.node.context.data.author.name}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaCalendar />
                    <span>{e.node.context.data.dateAndTime}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaComments />
                    <span>2 Comments</span>
                  </Link>
                </li>
              </PostImgContainerData>
            </PostImgContainer>
            <PostTextContainer>
              <TagsContainer>
                <span>Теги: </span>
                <Tags>
                  {e.node.context.data.tags.map(tag => (
                    <li>
                      <Link to="/">#{tag}</Link>
                    </li>
                  ))}
                </Tags>
              </TagsContainer>
              <Title to={`/posts/${e.node.context.data.slug}`}>
                <h2>{e.node.context.data.title}</h2>
              </Title>
              <Desc>{e.node.context.data.content}</Desc>
              <ReadMore to={`/posts/${e.node.context.data.slug}`}>
                <span>Read more</span>
                <IoIosArrowRoundForward
                  style={{ fontSize: "200%", marginLeft: "5px" }}
                />
              </ReadMore>
            </PostTextContainer>
          </PostContainer>
        ))
      }
    />
  </ListingContainer>
)

const ListingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1em;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
`

const PostContainer = styled.article`
  margin-bottom: 50px;
`

const PostTextContainer = styled.div`
  padding-top: 10px;
`

const Title = styled(Link)`
  h2 {
    font-weight: bold;
    color: #0000009e;
  }
`

const Desc = styled.p`
  color: #777;
`

const ReadMore = styled(Link)`
  background-color: black;
  color: #ff9907;
  text-transform: uppercase;
  font-size: 80%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  max-width: 170px;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background-color: #ff9907;
    color: black;
  }
`

const PostImgContainer = styled.div`
  position: relative;
  height: 400px;

  img {
    margin: 0;
    max-height: 400px;
    width: 100%;
  }
`

const PostImgContainerData = styled.ul`
  position: absolute;
  left: 0;
  bottom: 0;
  background: white;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 420px;
  align-items: center;
  margin: 0;
  font-size: 80%;

  @media (max-width: 430px) {
    font-size: 70%;
    position: inherit;
    padding-left: 0;
  }

  li {
    margin: 0;
    padding-right: 25px;

    &:last-child {
      padding-right: 0;
    }

    a {
      background-image: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: gray;
      padding: 15px 0;

      span {
        margin-left: 10px;
      }
    }
  }
`

const TagsContainer = styled.div`
  display: flex;
  color: #868686b3;
  align-items: baseline;
`

const Tags = styled.ul`
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 80%;

  li {
    padding-left: 10px;

    &:first-child {
      padding-left: 0;
    }

    a {
      background-image: none;
      color: #868686b3;

      &:hover {
        color: #ff9907;
      }
    }
  }
`

const LISTING_POSTS_QUERY = graphql`
  query {
    allSitePage(
      filter: {
        component: {
          eq: "/home/amster/projects/siteBot/src/components/postLayout.js"
        }
      }
    ) {
      edges {
        node {
          context {
            data {
              id
              slug
              title
              tags
              content
              dateAndTime(formatString: "MMMM DD, YYYY")
              author {
                name
              }
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  }
`

export default Listing
