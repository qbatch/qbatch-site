import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import ServicesList from "../../components/servicesList"
import OtherServices from "../../components/otherServices"
import ContactForm from "../../components/contactForm"
import FeaturedWork from "../../components/featuredWork"
import ClientFeedback from "../../components/clientFeedback"
import ToolsList from "../../components/toolsList"
import shapeUpper from "../../images/services/shapeUpper.png"
import shapeLower from "../../images/services/shapeLower.png"
import webDevelop from "../../images/services/webDevelop.png"
import Transform from "../../images/services/transform.svg"
import Innovate from "../../images/services/innovate.svg"
import Favourite from "../../images/services/favourite.svg"
import Rails from "../../images/services/rails.svg"
import Node from "../../images/services/node.svg"
import Vue from "../../images/services/vue.svg"
import MongoDb from "../../images/services/mongodb.svg"
import MySql from "../../images/services/mysql.svg"
import PostSql from "../../images/services/postsql.svg"
import Neo4j from "../../images/services/neo4j.svg"
import DevopsImg from "../../images/services/devops.png"
const WebDevelopment = () => {
  const list = [
    {
      icon: Transform,
      title: "Transform Idea to product",
      para:
        "We ideate discoveries and craft it well for your customers to create a delighted experience",
    },
    {
      icon: Innovate,
      title: "Innovate",
      para:
        "We empower the ideations with the modern technology to fuel-up the usability and fulfill user need",
    },
    {
      icon: Favourite,
      title: "Product your users will love",
      para:
        "Creating enriched user experience apps that not only look good but also work good.",
    },
  ]
  const tools = [Rails, Node, Vue, MongoDb, MySql, PostSql, Neo4j]
  return (
    <Layout>
      <SEO title="webDevelopment" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <div className="row m-0">
            <div className="col-md-7">
              <div className="pt-174">
                <h2 className="mb-4">
                  Crafting digital future through
                  <span className="endeavour ml-2">
                    web development solutions
                  </span>
                </h2>
                <p>
                  Our veteran technologists enable the unified transition to the
                  cloud from existing sources with a major disruption of your
                  usual business operations.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="pt-150 text-right">
                <Image src={webDevelop} alt="no-image" />
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
                Grow your business with the
                <span className="endeavour">
                  custom web development services
                </span>
              </h3>
            </Col>
            <Col md={6}>
              <p>
                We improve accessibility of business functions for users and
                broaden horizons for the respective existing and potential
                customers, we develop tailor-made Responsive Web Apps to
                assimilate the user-base providing wide-range accessibilities to
                create robust systems for a sticky user engagement.
              </p>
            </Col>

            <div className="text-center p-100">
              <h4>Achieve your goals by applying the right web</h4>
              <h4>
                <span className="endeavour">development services</span>
              </h4>
              <p className="text-center px-30">
                A perfect mechanism of a well-crafted system architecture and
                code quality is what you can expect from top mobile products.
                Use the best practices and most adequate technologies to speed
                up the app development and provide the best possible experience
                to your users.
              </p>
            </div>

            <ServicesList list={list} />
          </Row>
          <div className="py-75">
            <Row className="m-0">
              <Col md={6}>
                <h3>
                  Take advantage of proven processes and{" "}
                  <span className="endeavour">
                    {" "}
                    make your project a success{" "}
                  </span>
                </h3>
              </Col>
              <Col md={6}>
                <p>
                  A good technology partner is able to take care of even the
                  most complex of processes and will guide you flawlessly
                  towards your goal.
                </p>
              </Col>
            </Row>
          </div>

          <ul className="list-unstyled  process__container">
            <li className="process__step">
              <div className="process__circles"></div>
              <h5>Consult Idea</h5>
            </li>
            <hr></hr>
            <li className="process__step">
              {" "}
              <div className="process__circles"></div>
              <h5>Choose Technology</h5>
            </li>
            <hr></hr>
            <li className="process__step">
              {" "}
              <div className="process__circles"></div>
              <h5>Design</h5>
            </li>
            <hr></hr>
            <li className="process__step">
              {" "}
              <div className="process__circles"></div>
              <h5>Development</h5>
            </li>
            <hr></hr>
            <li className="process__step">
              {" "}
              <div className="process__circles"></div>
              <h5>Launch</h5>
            </li>
          </ul>
        </Container>
      </div>
      <ToolsList
        tools={tools}
        heading="Tech Stacks For Effective & Up-To-Date Mobile Apps"
      />
      <Container>
        <div className="py-75">
          <Row>
            <Col md={6}>
              <div className="d-flex flex-column justify-content-between h-100">
                <h3>
                  E-commerce platform with an
                  <span className="endeavour"> augmented reality module</span>
                </h3>
                <h6>
                  Italian home decor e-commerce app featured by Forbes and The
                  New York Times
                </h6>
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
              <Image src={DevopsImg} alt="no-image" />
            </Col>
          </Row>
        </div>
      </Container>
      <FeaturedWork />
      <ClientFeedback />
      <OtherServices />

      <div className="py-75 bg-midnight">
        <Container>
          <ContactForm />
        </Container>
      </div>
    </Layout>
  )
}

export default WebDevelopment
