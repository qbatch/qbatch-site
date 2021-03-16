import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container, Button } from "react-bootstrap"
function Success() {
  return (
    <Layout>
      <SEO title="Success" />
      <div className="bg-selego py-75 text-center">
        <Container>
          <h3 className="mb-3">
            <span className="endeavour">
              Thanks! We'll get back to you soon.
            </span>
          </h3>
          <div className="btn-batch justify-content-center">
            <Button className="endeavour-button" type="submit">
              View our portfolio
            </Button>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Success
