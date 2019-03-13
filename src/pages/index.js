import React from "react"

import Layout from "../components/layout"
import Listing from "../components/listing"
import PhotoList from "../components/photoList"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <PhotoList />
    <Listing />
  </Layout>
)

export default IndexPage
