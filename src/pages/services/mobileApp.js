import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import ToolsList from "../../components/toolsList"
import FeaturedWork from "../../components/featuredWork"
import ContactForm from "../../components/contactForm"
import ClientFeedback from "../../components/clientFeedback"
import OtherServices from "../../components/otherServices"
import shapeUpper from "../../images/services/shapeUpper.png"
import shapeLower from "../../images/services/shapeLower.png"
import mobile from "../../images/services/mobile.png"
import ServicesList from "../../components/servicesList"
import Android from "../../images/services/Android.svg"
import Ios from "../../images/services/iOS.svg"
import Cross from "../../images/services/cross.svg"
import Native from "../../images/services/native.svg"
import Flutter from "../../images/services/flutter.svg"
import Kotlin from "../../images/services/kotlin.svg"
import Swift from "../../images/services/swift.svg"
import FireBase from "../../images/services/firebase.svg"
import BwdMobile from "../../images/services/BwdMobile.png"
const mobileApp = () => {
  const list = [
    {
      icon: Android,
      title: "Android",
      para:
        "Developing fast, high ROI and robust apps written in Java or Kotlin. For large number of users",
    },
    {
      icon: Ios,
      title: "iOS",
      para:
        "Developing secure, high performance and enhanced customer experience apps using Swift or Objective-C",
    },
    {
      icon: Cross,
      title: "Cross-platform",
      para:
        "Create apps that great reach, low development costs and uniform feel, using React Native",
    },
  ]
  const tools = [Native, Flutter, Kotlin, Swift, FireBase]
  return (
    <Layout>
      <SEO title="mobileApp" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <Row className="m-0">
            <Col md={7}>
              <div className="pt-174">
                <h2 className="mb-4">
                  <span className="endeavour mr-2">Mobile App Development</span>
                  Create top-notch applications
                </h2>
                <p>
                  Our veteran technologists enable the unified transition to the
                  cloud from existing sources with a major disruption of your
                  usual business operations.
                </p>
              </div>
            </Col>
            <Col md={5}>
              <div className="pt-150 text-right">
                <Image src={mobile} alt="no-image" className="mw-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-75">
        <Container>
          <Row className="m-0 justify-content-md-center para-ellipse">
            <Col md={6}>
              <h3>
                Grow your business with the{" "}
                <span className="endeavour ml-0"> right mobile solutions</span>
              </h3>
            </Col>
            <Col md={6}>
              <p>
                We embrace a made-to-order strategy to design and develop the
                Mobile and Web Applications using Native and Cross platform
                Frameworks for Android and iOS with a premium attention about
                the scalability and optimization of the solutions. Our support
                teams continuously observe the need of the hour and does a
                strong policing on the functionality and update/upgrade features
                to ensure seamless customer experience.
              </p>
            </Col>

            <div className="text-center p-100">
              <h4 className="mb-3 ">
                Crafting an attentive user-experience that<br></br> results
                retention and minimizes churn
              </h4>
              <p className="px-30 text-center">
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
                  Build intuitive, easy-to-use applications{" "}
                  <span className="endeavour">
                    {" "}
                    that attract and retain user attention
                  </span>
                </h3>
              </Col>
              <Col md={6}>
                <p className="lg-ellipse">
                  Mobile development is an ongoing process of a constant,
                  iterative effort to make your product better and better.
                  Devices and technologies through which users interact with
                  your product will change so as your users, their needs and
                  behaviour. Make sure you have the right tools, and
                  battle-tested methodologies to face these challenges. And
                  never stop the process.
                </p>
              </Col>
            </Row>
          </div>

          <ul className="list-unstyled  process__container">
            <li className="process__step">
              <div className="process__circles"></div>
              <h5>Scope</h5>
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
              <h5>Quality Assurance</h5>
            </li>
            <hr></hr>
            <li className="process__step">
              {" "}
              <div className="process__circles"></div>
              <h5>Launch</h5>
            </li>
          </ul>
        </Container>
        <div className="bg-selego py-75">
          <Container>
            <div className="mx-536">
              <ToolsList
                tools={tools}
                heading="Tech Stacks For Effective & Up-To-Date Mobile Apps"
              />
            </div>
          </Container>
        </div>
        <Container>
          <div className="py-75">
            <Row>
              <Col md={6}>
                <div className="d-flex flex-column justify-content-between h-100 para-ellipse">
                  <h3>
                    E-commerce platform with an
                    <span className="endeavour"> augmented reality module</span>
                  </h3>
                  <h6>
                    Italian home decor e-commerce app featured by Forbes and The
                    New York Times
                  </h6>
                  <p className="mb-0 ">
                    Artemest is a native mobile app featuring curated home
                    décor, jewellery, and lifestyle art created by over 500 top
                    Italian artists. Users can explore handcrafted art and shop
                    directly from the app. The app also offers an augmented
                    reality module to preview luxury furniture right in the
                    home.
                  </p>
                  <p className="mb-0">
                    Netguru provided a full-stack solution: a comprehensive
                    review of the existing platform, UX design and native mobile
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
                <Image src={BwdMobile} alt="no-image" />
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
      </div>
    </Layout>
  )
}

export default mobileApp
