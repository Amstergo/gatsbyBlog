import React from "react"

import Layout from "../components/layout"
import Listing from "../components/listing"
import PhotoList from "../components/photoList"
import Carousel from "../components/caruosel"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <PhotoList />
    <Carousel />
    <Listing />
  </Layout>
)

export default IndexPage
