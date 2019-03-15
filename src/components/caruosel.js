import React from "react"
import Slider from "react-slick"
import styled from "styled-components"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

//import Arrow from "../images/arrow-right.svg"

const Carousel = () => (
  <StaticQuery
    query={ImageQuery}
    render={data => (
      <CarouselWrapper>
        <Slider {...settings}>
          {/* {items.map(i => (
            <div key={i.id}>
              <Img fluid={data.i.img.childImageSharp.fluid} />
              <h2>{i.tag}</h2>
              <h3>{i.desc}</h3>
              <h4>{i.date}</h4>
            </div>
          ))} */}
          <CarouselItemWrapper>
            <Img fluid={data.slide1.childImageSharp.fluid} />
            <CarouselItemTextWrapper>
              <LinkTag to="/">Fashion</LinkTag>
              <Link to="/">
                <h3>New york fashion week's continued the evolution</h3>
              </Link>
              <h5>2 days ago</h5>
            </CarouselItemTextWrapper>
          </CarouselItemWrapper>
          <CarouselItemWrapper>
            <Img fluid={data.slide2.childImageSharp.fluid} />
            <CarouselItemTextWrapper>
              <LinkTag to="/">Fashion</LinkTag>
              <Link to="/">
                <h3>New york fashion week's continued the evolution</h3>
              </Link>
              <h5>2 days ago</h5>
            </CarouselItemTextWrapper>
          </CarouselItemWrapper>
          <CarouselItemWrapper>
            <Img fluid={data.slide3.childImageSharp.fluid} />
            <CarouselItemTextWrapper>
              <LinkTag to="/">Fashion</LinkTag>
              <Link to="/">
                <h3>New york fashion week's continued the evolution</h3>
              </Link>
              <h5>2 days ago</h5>
            </CarouselItemTextWrapper>
          </CarouselItemWrapper>
          <CarouselItemWrapper>
            <Img fluid={data.slide2.childImageSharp.fluid} />
            <CarouselItemTextWrapper>
              <LinkTag to="/">Fashion</LinkTag>
              <Link to="/">
                <h3>New york fashion week's continued the evolution</h3>
              </Link>
              <h5>2 days ago</h5>
            </CarouselItemTextWrapper>
          </CarouselItemWrapper>
        </Slider>
      </CarouselWrapper>
    )}
  />
)

const CarouselWrapper = styled.div`
  margin-top: 30px;
  position: relative;
  overflow: hidden;
`

const CarouselItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`

const CarouselItemTextWrapper = styled.div`
  padding: 15px 10px;
  text-align: center;

  h5 {
    color: #797979;
  }

  h3 {
    line-height: 1.3;
    transition: 0.2s;
  }

  h3:hover {
    text-shadow: 1px 2px 3px #c1c1c1;
  }
`

const LinkTag = styled(Link)`
  text-transform: uppercase;
  background-image: none;
  background-color: #222222;
  padding: 5px 40px;
  line-height: 4;
  color: #ff9907;
`

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  initialSlide: 0,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "red",
//         position: "absolute",
//         background: "url()",
//       }}
//       onClick={onClick}
//     />
//   )
// }
//
// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   )
// }

// const items = [
//   {
//     id: "1",
//     img: "slide1",
//     tag: "Fashion",
//     desc: "New york fashion week's continued the evolution",
//     date: "2 days ago",
//   },
// {
//   id: "2",
//   img: data.slide2.childImageSharp.fluid,
//   tag: "Fashion",
//   desc: "New york fashion week's continued the evolution",
//   date: "2 days ago",
// },
// {
//   id: "3",
//   img: data.slide3.childImageSharp.fluid,
//   tag: "Fashion",
//   desc: "New york fashion week's continued the evolution",
//   date: "2 days ago",
// },
// ]

export const CarouselImage = graphql`
  fragment CarouselImage on File {
    childImageSharp {
      fluid(maxWidth: 360) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const ImageQuery = graphql`
  query {
    slide1: file(relativePath: { eq: "blog-slide1.png" }) {
      ...CarouselImage
    }
    slide2: file(relativePath: { eq: "blog-slide2.png" }) {
      ...CarouselImage
    }
    slide3: file(relativePath: { eq: "blog-slide3.png" }) {
      ...CarouselImage
    }
  }
`

export default Carousel
