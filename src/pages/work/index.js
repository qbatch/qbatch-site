import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import ClientFeedback from "../../components/clientFeedback"
import ContactForm from "../../components/contactForm"
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import shapeLower from "../../images/services/shapeLower.png"
import shapeUpper from "../../images/services/shapeUpper.png"
import OneAppShot from "../../images/work/OneAppShot.png"
import salessupportShot from "../../images/work/salessupportShot.png"
import ecomcirclesShot from "../../images/work/ecomcirclesShot.png"
import urtaskerShot from "../../images/work/urtaskerShot.png"
import BWDwebShot from "../../images/work/BWDwebShot.png"
import BWDmobileShot from "../../images/work/BWDmobileShot.png"
import oneAppLogo from "../../images/work/oneAppLogo.svg"
import EcomCirclesLogo from "../../images/work/EcomCirclesLogo.svg"
import BWDLogo from "../../images/work/BWDLogoUpdated.jpg"
import UrtaskerLogo from "../../images/work/UrtaskerLogo.svg"
import salesSupportLogo from "../../images/work/salesSupportLogo.svg"
const Index = () => {
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
      <SEO title="work" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <Row className="m-0">
            <Col md={7} sm={12}>
              <div className="pt-174 pt-100">
                <h2>
                  Qbatch
                  <span className="endeavour mr-2"> Enabling Business to</span>
                </h2>
                <h2>Impact through Technology</h2>
                <p>
                Our end-to-end services turn your key business requirements into dynamic software solutions, resulting in great customer experience, quantitative business decisions, and seamless back-end technologies.

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
                <Image src={oneAppLogo} alt="no-image" />
                <p>
                  We offer expertise for end-to-end product design
                  anddevelopment, with solutions tailor-made to fit your
                  product’s unique requirements
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
                  <Link to="/work/oneApp">
                    <Button variant="primary" className="endeavour-button">
                      View Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="py-50">
                <Image src={OneAppShot} alt="no-image" />
              </div>
            </Col>
            <span className="reserve-data">
              <Col md={6} sm={12}>
                <div className="py-50">
                  <Image src={ecomcirclesShot} alt="no-image" />
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="work py-75 pl-100">
                  <Image src={EcomCirclesLogo} alt="no-image" />
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
                    <Link to="/work/ecomCircle">
                      <Button variant="primary" className="endeavour-button">
                        View Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </span>
            <Col md={6} sm={12}>
              <div className="work py-75">
                <Image src={BWDLogo} alt="no-image" />
                <p>
                  We offer expertisesssss for end-to-end product design
                  anddevelopment, with solutions tailor-made to fit your
                  product’s unique requirements
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
                <div className="btn-batch">
                  <Link to="/work/bwdMobile">
                    <Button variant="primary" className="endeavour-button">
                      View Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="py-50">
                <Image src={BWDmobileShot} alt="no-image" />
              </div>
            </Col>
            <span className="reserve-data">
              <Col md={6} sm={12}>
                <div className="py-50">
                  <Image src={urtaskerShot} alt="no-image" />
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="work py-75 pl-100">
                  <Image src={UrtaskerLogo} alt="no-image" />
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
                  <div className="btn-batch">
                    <Link to="/work/urtasker">
                      <Button variant="primary" className="endeavour-button">
                        View Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </span>
            <Col md={6} sm={12}>
              <div className="work py-75">
                <Image src={BWDLogo} alt="no-image" />
                <p>
                  We offer expertisesssss for end-to-end product design
                  anddevelopment, with solutions tailor-made to fit your
                  product’s unique requirements
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
                <div className="btn-batch">
                  <Link to="/work/bwd">
                    <Button variant="primary" className="endeavour-button">
                      View Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="py-50">
                <Image src={BWDwebShot} alt="no-image" />
              </div>
            </Col>
            <span className="reserve-data">
              <Col md={6} sm={12}>
                <div className="py-50">
                  <Image src={salessupportShot} alt="no-image" />
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="work py-75 pl-100">
                  <Image src={salesSupportLogo} alt="no-image" />
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
                  <div className="btn-batch">
                    <Link to="/work/salesSupport">
                      <Button variant="primary" className="endeavour-button">
                        View Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </span>
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

export default Index
