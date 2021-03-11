import React from "react"
import SEO from "../../components/seo"
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import Layout from "../../components/layout"
import ToolList from "../../components/toolsList"
import FeaturedWork from "../../components/featuredWork"
import ClientFeedback from "../../components/clientFeedback"
import ContactForm from "../../components/contactForm"
import OtherServices from "../../components/otherServices"
import shapeUpper from "../../images/services/shapeUpper.png"
import shapeLower from "../../images/services/shapeLower.png"
import UiDesignImg from "../../images/services/uiDesign.png"
import ServicesList from "../../components/servicesList"
import Validate from "../../images/services/validate.svg"
import Improve from "../../images/services/improve.svg"
import Waves from "../../images/services/waves.svg"
import webMobile from "../../images/services/webMobile.svg"
import search from "../../images/services/search.svg"
import setting from "../../images/services/setting.svg"
import responsive from "../../images/services/responsive.svg"
import branding from "../../images/services/branding.svg"
import figma from "../../images/services/figma.svg"
import xd from "../../images/services/xd.svg"
import sketch from "../../images/services/sketch.svg"
import zeplin from "../../images/services/zeplin.svg"
import invision from "../../images/services/invision.svg"
import balsmiq from "../../images/services/balsmiq.png"
import photoshop from "../../images/services/photoshop.svg"
import adobeillustator from "../../images/services/adobeillustator.svg"
import uiSlider from "../../images/services/uislider.png"
const UiDesign = () => {
  const list = [
    {
      icon: webMobile,
      title: "Design web and mobile apps",
      para:
        "Desigining aesthetically beautiful web and mobile apps that create delightful experience",
    },
    {
      icon: Validate,
      title: "Validate your ideas",
      para:
        "Validate ideas by creating wireframes then making those interactive prototype to test",
    },
    {
      icon: Improve,
      title: "Improve conversion",
      para:
        "By fixing functional and aesthetic issues to increase the number of sales and leads",
    },

    {
      icon: Waves,
      title: "Streamline experience",
      para:
        "Through customer journey mapping and empathy mapping creating frictionless experience",
    },
  ]
  const digital = [
    {
      icon: search,
      title: "Design Discovery",
      para:
        "The primary point of requirement evaluation with discovery of information, actions, preferences and usability.",
    },
    {
      icon: setting,
      title: "Design Sprint",
      para:
        "Dive deep into users’ behavior, business environment and product to collect data necessary to establish the next steps for your business.",
    },
    {
      icon: responsive,
      title: "Responsive Prototyping",
      para:
        "We create a responsive prototype to give a real-time experience about the usability of the product with all the defined modules and clickables.",
    },
    {
      icon: branding,
      title: "Branding",
      para:
        "Design a consistent language to communicate with your clients and create an emotional connection between customers and your brand.",
    },
  ]
  const tools = [
    figma,
    xd,
    sketch,
    zeplin,
    invision,
    balsmiq,
    photoshop,
    adobeillustator,
  ]
  return (
    <Layout>
      <SEO title="UI/UX Design" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <Row className="m-0">
            <Col md={7}>
              <div className="pt-174">
                <h2>
                  <span className="endeavour mr-2"> UX and UI Design</span>
                  Craft beautiful and usable digital products
                </h2>
                <p>
                  Leverage design thinking to deliver maximum value to your
                  customers and your business
                </p>
              </div>
            </Col>
            <Col md={5}>
              <div className="pt-150 text-right">
                <Image src={UiDesignImg} alt="no-image" className="mw-100" />
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
                Accelerate growth with
                <span className="endeavour"> exceptional software design</span>
              </h3>
            </Col>
            <Col md={6}>
              <p className="lg-ellipse">
                We offer an aesthetical approach for the seamless customer
                experience with a narrow focus on the look and feel of the
                systems and software. The process of defining the touch points,
                visualizing aesthetics and building wireframes involves a
                schematic journey to begin to execute
              </p>
            </Col>
            <Col md={12}>
              Our Culture
              <div className="py-75 text-center">
                <h4>Design thinking empowers</h4>
                <h4>
                  <span className="endeavour">communication</span>
                </h4>
                <p className="text-center">
                  Bring UX and UI designers on board to make your product shine
                </p>
              </div>
            </Col>

            <ServicesList list={list} />
          </Row>
        </Container>
      </div>
      <div className="py-75 bg-selego">
        <Container>
          <Row className="m-0">
            <Col md={6}>
              <div className="d-flex flex-column justify-content-between h-100 para-ellipse">
                <h4>
                  <span className="endeavour ml-0">
                    Find a digital product design solution{" "}
                  </span>
                  for every stage of your business development
                </h4>
                <p>
                  We offer an aesthetical approach for the seamless customer
                  experience with a narrow focus on the look and feel of the
                  systems and software. The process of defining the touch
                  points, visualizing aesthetics and building wireframes
                  involves a schematic journey to begin to execute.
                </p>
                <div className="btn-batch">
                  <Button variant="primary" className="endeavour-button">
                    Let's work together
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Row className="m-0">
                {digital.map((design, i) => {
                  return (
                    <Col md={6} className="text-left" key={i}>
                      <div className="icon-bg m-0 mb-4">
                        <Image src={design.icon} alt="no-image" />
                      </div>
                      <span className="text-left lower-text">
                        {design.title}
                      </span>
                      <p className="text-left listPara ">{design.para}</p>
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-75">
        <Container>
          <Row className="m-0">
            <Col md={6}>
              <h3>
                Apply the modern features of design for
                <span className="endeavour">better experience</span>
              </h3>
            </Col>
            <Col md={6}>
              <p className="lg-ellipse">
                Design is an ongoing process of a constant, iterative effort to
                make your product better and better. Devices and technologies
                through which users interact with your product will change so as
                your users, their needs and behaviour. Make sure you have the
                right tools, and battle-tested methodologies to face these
                challenges. And never stop the process
              </p>
            </Col>
          </Row>
          <div className="process">
            <ul className="list-unstyled  process__container">
              <li className="process__step">
                <div className="process__circles"></div>
                <h5>Research</h5>
              </li>
              <hr></hr>
              <li className="process__step">
                {" "}
                <div className="process__circles"></div>
                <h5>Wireframing</h5>
              </li>
              <hr></hr>
              <li className="process__step">
                {" "}
                <div className="process__circles"></div>
                <h5>Testing</h5>
              </li>
              <hr></hr>
              <li className="process__step">
                {" "}
                <div className="process__circles"></div>
                <h5>Visual design</h5>
              </li>
              <hr></hr>
              <li className="process__step">
                {" "}
                <div className="process__circles"></div>
                <h5>Dev handover</h5>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="bg-selego py-75">
        <Container>
          <div className="mx-680">
            <ToolList
              tools={tools}
              heading="Tools For Effective & Up-To-Date Experience Design"
            />
          </div>
        </Container>
      </div>
      <Container>
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
              <Image src={uiSlider} alt="no-image" />
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

export default UiDesign
