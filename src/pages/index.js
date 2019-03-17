import React from "react"

import Layout from "../components/layout"
import Listing from "../components/listing/index"
import Banner from "../components/banner"
import Carousel from "../components/caruosel"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Banner />
    <Carousel />
    <Listing />
  </Layout>
)

export default IndexPage
