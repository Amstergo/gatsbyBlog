import React from "react"

import Layout from "../components/layout"
import Banner from "../components/banner"
import Carousel from "../components/caruosel"
import ContentLayout from "../components/contentLayout"
import Listing from "../components/listing/index"
import Sidebar from "../components/sidebar/index"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Banner />
    <Carousel />
    <ContentLayout>
      <Listing />
      <Sidebar />
    </ContentLayout>
  </Layout>
)

export default IndexPage
