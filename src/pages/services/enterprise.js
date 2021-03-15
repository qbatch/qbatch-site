import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import ServicesList from "../../components/servicesList"
import ContactForm from "../../components/contactForm"
import OtherServices from "../../components/otherServices"
import FeaturedWork from "../../components/featuredWork"
import ClientFeedback from "../../components/clientFeedback"
import shapeUpper from "../../images/services/shapeUpper.png"
import Product from "../../images/services/business.svg"
import upgrade from "../../images/services/upgrade.svg"
import processor from "../../images/services/processor.svg"
import cloud from "../../images/services/cloud.svg"
import shapeLower from "../../images/services/shapeLower.png"
import productImg from "../../images/services/productDesign.png"
import Bwd from "../../images/services/bwd.png"
const Enterprise = () => {
  const list = [
    {
      icon: Product,
      title: "Business Advisory",
      para:
        "Business advisory for various solutions like, new business models, risk, governance, data and security.",
    },
    {
      icon: upgrade,
      title: "Upgrade & Migration",
      para:
        "Due Diligence Assessment Framework for accessing scalability, stability and recommending solutions",
    },
    {
      icon: processor,
      title: "Operational Transformation",
      para:
        "Transformation to agile and digital connected enterprises using AI, Automation platform and GenNext solutions",
    },
    {
      icon: cloud,
      title: "Enterprise Cloud Services",
      para:
        "Cloud Solutions to transform existing applications, rationalize business processes and support infrastructure management become agile",
    },
  ]
  return (
    <Layout>
      <SEO title="enterprise" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <Row className="m-0">
            <Col md={7}>
              <div className="pt-174">
                <h2>
                  <span className="endeavour mr-2">Enterprise Business</span>
                  Solutions
                </h2>
                <p>
                  Leverage design thinking to deliver maximum value to your
                  customers and your business
                </p>
              </div>
            </Col>
            <Col md={5}>
              <div className="pt-150 text-right">
                <Image src={productImg} alt="no-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-75">
        <Container>
          <Row className="m-0 justify-content-md-center">
            <Col md={6}>
              <h3>Accelerate Growth with Modern </h3>
              <h3>
                <span className="endeavour ml-0">
                  Enterprise Business Solutions
                </span>
              </h3>
            </Col>
            <Col md={6}>
              <p className="lg-ellipse">
                Rapid revolution in technology brings the profound variation in
                legacy systems of the enterprises. The need-of-the-time is to
                get lift-up the efficiency of the systems through modernizations
                and integration to unify the cross-functional features of viable
                products. We at QBatch dive deeper into the systems to fetch-out
                the requirements that can boost your business efficiency through
                various system integrations, rewriting of legacy software and
                partial deployments.
              </p>
            </Col>

            <div className="align-center p-100">
              <h4>
                <span className="endeavour">Increase ROI to your business</span>
              </h4>
              <h4> and gives brings a robust change.</h4>
              <p>
                Brining life to the legacy systems and developing the new
                industry standard systems
              </p>
            </div>

            <ServicesList list={list} />
          </Row>
        </Container>
      </div>
      <Container>
        <div className="py-75">
          <Row>
            <Col md={6}>
              <div className="d-flex flex-column justify-content-between h-100 para-ellipse">
                <h3>
                  Designing the agents app for{" "}
                  <span className="endeavour">
                    {" "}
                    the Middle East’s leading developer{" "}
                  </span>{" "}
                  of luxury homes
                </h3>

                <p className="mb-0 ">
                  Artemest is a native mobile app featuring curated home décor,
                  jewellery, and lifestyle art created by over 500 top Italian
                  artists. Users can explore handcrafted art and shop directly
                  from the app. The app also offers an augmented reality module
                  to preview luxury furniture right in the home.
                </p>
                <p className="mb-0">
                  Netguru provided a full-stack solution: a comprehensive review
                  of the existing platform, UX design and native mobile
                  development.
                </p>
                <div className="btn-batch">
                  <Button variant="primary" className="endeavour-button">
                    read case study
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Image src={Bwd} alt="no-image" />
            </Col>
          </Row>
        </div>
      </Container>
      <FeaturedWork />
      <ClientFeedback />
      <OtherServices />

      <div className="py-75 bg-mdnight">
        <Container>
          <ContactForm />
        </Container>
      </div>
    </Layout>
  )
}

export default Enterprise
