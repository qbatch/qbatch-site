import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import { Container, Image, Button } from "react-bootstrap"
import shapeUpper from "../../images/services/shapeUpper.png"
import shapeLower from "../../images/services/shapeLower.png"
import WebDevelopment from "../../images/ServicesImages/WebDevelopment.png"
const mobileApp = () => {
  return (
    <Layout>
      <SEO title="mobileApp" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <div className="row m-0">
            <div className="col-md-6">
              <div className="pt-174">
                <h2>
                  <span className="endeavour">Mobile App Development</span>
                  Create top-notch applications
                </h2>
                <p>
                  Our veteran technologists enable the unified transition to the
                  cloud from existing sources with a major disruption of your
                  usual business operations.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pt-150 text-right">
                <Image src={WebDevelopment} alt="no-image" className="mw-100" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default mobileApp
