import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientFeedback from "../components/clientFeedback"
import ContactForm from "../components/contactForm"
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import shapeLower from "../images/services/shapeLower.png"
import shapeUpper from "../images/services/shapeUpper.png"
import medcertsLogo from "../images/index/medecerts.png"
import medecertsImg from "../images/work/medcrets.png"
import twenty from "../images/work/twenty.png"
import twentyLogo from "../images/work/twentyLogo.png"
const Work = () => {
  const medecerts = [
    "User Research",
    "UI Design + Branding",
    "Content Management System",
    "Full Stack Development",
  ]
  const Twenty = [
    "User Research",
    "UI Design + Branding",
    "Content Management System",
    "Full Stack Development",
  ]
  return (
    <Layout>
      <SEO title="Estimate Work" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <Row className="m-0">
            <Col md={7} sm={12}>
              <div className="pt-174">
                <h2>
                  Qbatch
                  <span className="endeavour mr-2">
                    {" "}
                    Enterprise Business to
                  </span>
                </h2>
                <h2>Impact through Technology</h2>
                <p>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, well as a random Lipsum generator.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="py-75">
          <Row>
            <Col md={6} sm={12}>
              <div className="work py-75">
                <Image src={medcertsLogo} alt="no-image" />
                <p>
                  We offer expertise for end-to-end product design
                  anddevelopment, with solutions tailor-made to fit your
                  product’s unique requirements.
                </p>
                <ul className="listItem ">
                  {medecerts.map((list, listKey) => {
                    return (
                      <li className="listItem__item" key={listKey}>
                        {list}
                      </li>
                    )
                  })}
                </ul>
                <div className="btn-batch d-flex">
                  <Button variant="primary" className="endeavour-button">
                    See Detail
                  </Button>
                  <Button variant="primary" className="outline-button ml-4">
                    Our Work
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="py-50">
                <Image src={medecertsImg} alt="no-image" />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="py-50">
                <Image src={twenty} alt="no-image" />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="work py-75 pl-100">
                <Image src={twentyLogo} alt="no-image" />
                <p>
                  We offer expertise for end-to-end product design
                  anddevelopment, with solutions tailor-made to fit your
                  product’s unique requirements.
                </p>
                <ul className="listItem ">
                  {Twenty.map((list, listKey) => {
                    return (
                      <li className="listItem__item" key={listKey}>
                        {list}
                      </li>
                    )
                  })}
                </ul>
                <div className="btn-batch d-flex">
                  <Button variant="primary" className="endeavour-button">
                    See Detail
                  </Button>
                  <Button variant="primary" className="outline-button ml-4">
                    Our Work
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="work py-75">
                <Image src={medcertsLogo} alt="no-image" />
                <p>
                  We offer expertise for end-to-end product design
                  anddevelopment, with solutions tailor-made to fit your
                  product’s unique requirements.
                </p>
                <ul className="listItem ">
                  {medecerts.map((list, listKey) => {
                    return (
                      <li className="listItem__item" key={listKey}>
                        {list}
                      </li>
                    )
                  })}
                </ul>
                <div className="btn-batch d-flex">
                  <Button variant="primary" className="endeavour-button">
                    See Detail
                  </Button>
                  <Button variant="primary" className="outline-button ml-4">
                    Our Work
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="py-50">
                <Image src={medecertsImg} alt="no-image" />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="py-50">
                <Image src={twenty} alt="no-image" />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="work py-75 pl-100">
                <Image src={twentyLogo} alt="no-image" />
                <p>
                  We offer expertise for end-to-end product design
                  anddevelopment, with solutions tailor-made to fit your
                  product’s unique requirements.
                </p>
                <ul className="listItem ">
                  {Twenty.map((list, listKey) => {
                    return (
                      <li className="listItem__item" key={listKey}>
                        {list}
                      </li>
                    )
                  })}
                </ul>
                <div className="btn-batch d-flex">
                  <Button variant="primary" className="endeavour-button">
                    See Detail
                  </Button>
                  <Button variant="primary" className="outline-button ml-4">
                    Our Work
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <ClientFeedback />
      <div className="bg-midnight py-75">
        <Container>
          <ContactForm />
        </Container>
      </div>
    </Layout>
  )
}

export default Work
