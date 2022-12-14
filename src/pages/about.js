import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="This is my about page" />
      <h1>About Page</h1>
      <p>Ibas is a web developer, teacher and a creative writer.</p>
    </Layout>
  )
}

export default About