import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import ServicesList from "../../components/servicesList"
import ContactForm from "../../components/contactForm"
import FeaturedWork from "../../components/featuredWork"
import ClientFeedback from "../../components/clientFeedback"
import OtherServices from "../../components/otherServices"
import shapeUpper from "../../images/services/shapeUpper.png"
import shapeLower from "../../images/services/shapeLower.png"
import BusinessImg from "../../images/services/business.png"
import startup from "../../images/services/startups.svg"
import sms from "../../images/services/sms.svg"
import enterprise from "../../images/services/enterprise.svg"
import Discovery from "../../images/services/discovery.png"
import advisory from "../../images/services/advisory.png"
import technolgy from "../../images/services/advisory.png"
import businessSlide from "../../images/services/businessSlide.png"
const Business = () => {
  const list = [
    {
      icon: startup,
      title: "Startups",
      para:
        "Want to make a new innovative product or working for a bigger mission to impact millions of lives?",
    },
    {
      icon: sms,
      title: "SMEs",
      para:
        "Want to build an optimal organizational structure to implement best strategies or defining roadmap?",
    },
    {
      icon: enterprise,
      title: "Enterprises",
      para:
        "Want to expand the in market or organized implementation of solutions across the enterprise?",
    },
  ]
  return (
    <Layout>
      <SEO title="Business Consulting" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <div className="row m-0">
            <div className="col-md-7">
              <div className="pt-174">
                <h2>
                  Consulting:
                  <span className="endeavour mr-2">
                    Translate your business challenges into opportunities
                  </span>
                </h2>
                <p>
                  Our business and technology experts help companies like yours
                  reshape the industry by exploring new business models,
                  solutions, and revenue streams to push forth digital
                  evolution.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="pt-150 text-right">
                <Image src={BusinessImg} alt="no-image" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-75">
        <Container>
          <Row className="m-0 justify-content-md-center">
            <Col md={6}>
              <h3>
                We accelerate your journey to creating disruptive
                <span className="endeavour"> products & solutions</span>
              </h3>
            </Col>
            <Col md={6}>
              <p className="lg-ellipse">
                No matter how complex your business questions, we have the
                capabilities and experience to deliver the answers you need to
                succeed. Adopt groundbreaking technologies, an agile approach to
                problem-solving, and functional prototyping to unlock true value
                for your organisation. We offer services tailored to your
                business needs — tell us who you are:
              </p>
            </Col>
          </Row>
          <ServicesList list={list} />
          <div className="py-75">
            <h3 className="mb-4">How we help businesses like you</h3>
            <Row className="m-0">
              <Col md={6}>
                <div className="py-30">
                  <h6 className="mt-4">Discovery Workshops</h6>
                  <p className="lg-ellipse">
                    We enable and facilitate in steering an exhaustive activity
                    of translation of thoughts and ideal experiences to the
                    real-time products. Our think-tanks enable the organizations
                    to think-through the ideal features of the product before
                    the hustle begins. The exploratory marathon commences with
                    sketching out the ideas and thoughts about the product which
                    leads to prototyping upon validation of the feature list,
                    picking the suitable tools for building technical
                    architecture followed by a robust development roadmap.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="text-right py-30">
                  <Image src={Discovery} alt="no-image" />
                </div>
              </Col>
              <span className="reserve-data">
                <Col md={6}>
                  <div className="text-left py-30">
                    <Image src={advisory} alt="no-image" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="py-30">
                    <h6 className="mt-4">Advisory Services</h6>
                    <p className="lg-ellipse">
                      Our veteran professionals hold a wide range of experiences
                      accumulated throughout their journey that aid the
                      businesses and their services to cut through the
                      complexity of modern rapid transformation of businesses
                      and technology. We recommend the tested and practical
                      recommendation keeping the dev-client privilege to ensure
                      advantageous knowledge sharing that can transfigure your
                      business and processes. Our team of advisors work
                      side-by-side to identify the strategic issues and counsel
                      about the system architecture, agile delivery, industry
                      best practices and emerging technologies to craft a
                      tech-enabled winning business strategy.
                    </p>
                  </div>
                </Col>
              </span>
              <Col md={6}>
                <div className="py-30">
                  <h6 className="mt-4">Technology Assurance</h6>
                  <p className="lg-ellipse">
                    We offer to perform a comprehensive evaluation exercise to
                    identify the knowing-happening gap and further to bridge
                    that gap to optimize business process through modern
                    technology and benchmarked tools. We take into account the
                    Technology Audit, Agile Audit and Compliance related matters
                    to identify the best possible upgrades for the tools and
                    technologies.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="text-right py-30">
                  <Image src={technolgy} alt="no-image" />
                </div>
              </Col>
              <div className="py-75">
                <Row>
                  <Col md={6}>
                    <div className="d-flex flex-column justify-content-between h-100">
                      <h3>
                        Designing the agents app for the
                        <span className="endeavour">
                          Middle East’s leading developer
                        </span>
                        of luxury homes
                      </h3>

                      <p className="mb-0 lg-ellipse">
                        Artemest is a native mobile app featuring curated home
                        décor, jewellery, and lifestyle art created by over 500
                        top Italian artists. Users can explore handcrafted art
                        and shop directly from the app. The app also offers an
                        augmented reality module to preview luxury furniture
                        right in the home.
                      </p>
                      <p className="mb-0">
                        Netguru provided a full-stack solution: a comprehensive
                        review of the existing platform, UX design and native
                        mobile development.
                      </p>
                      <div className="btn-batch">
                        <Button variant="primary" className="endeavour-button">
                          read case study
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <Image src={businessSlide} alt="no-image" />
                  </Col>
                </Row>
              </div>
            </Row>
          </div>
        </Container>
      </div>
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

export default Business
