import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Image, Button, Row, Col } from "react-bootstrap"
import ClientFeedback from "../components/clientFeedback"
import FeaturedWork from "../components/featuredWork"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDesktop,
  faLongArrowAltRight,
  faMobileAlt,
  faCloud,
  faPencilRuler,
  faBriefcase,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons"
import CountUp from "react-countup"
import discover from "../images/research/discover.svg"
import design from "../images/research/website-design.svg"
import data from "../images/research/data.svg"
import outline from "../images/research/Outline.svg"
import amazonUp from "../images/slider-arrow/amazon-up.png"
import amazonDown from "../images/slider-arrow/amazon-down.png"
import teamImg from "../images/index/teamsImg.svg"
import expert from "../images/expertise/expert.svg"
import domain from "../images/expertise/domain.svg"
import growth from "../images/expertise/growth.svg"
import start from "../images/expertise/start.svg"
import quality from "../images/expertise/quality.svg"
import strong from "../images/expertise/strong.svg"
import execution from "../images/expertise/execution.svg"
import communication from "../images/expertise/communication.svg"
import IndexImage from "../images/index/index.svg"
import ContactForm from "../components/contactForm"
import Recognized from "../components/recognized"
import scrollTo from "gatsby-plugin-smoothscroll"
const IndexPage = () => {
  const services = [
    {
      icon: faChartPie,
      title: "Enterprise Solutions",
      paragraph: "Dive deeper into the systems to boost your business.",
      to: "/services/enterprise",
    },
    {
      icon: faMobileAlt,
      title: "Mobile Development",
      paragraph:
        "We embrace a made-to-order strategy to design and develop the Mobile Applications.",
      to: "/services/mobileApp",
    },
    {
      icon: faDesktop,
      title: "Web  Development",
      paragraph:
        "We develop tailor-made Responsive Web Apps to assimilate the user-base providing accessibilities.",
      to: "/services/webDevelopment",
    },
    {
      icon: faCloud,
      title: "Cloud Engineering",
      paragraph: "Better customer experience with Cloud Engineering Services.",
      to: "/services/devops",
    },
    {
      icon: faPencilRuler,
      title: "UI/UX Design",
      paragraph:
        "We help to design seamless experience of your product. Solving problems.",
      to: "/services/uiDesign",
    },
    {
      icon: faBriefcase,
      title: "Business Consulting",
      paragraph:
        "We deliver balanced solutions & unmatched client experiences.",
      to: "/services/business",
    },
  ]
  const expertise = [
    {
      img: expert,
      title: "Specialized Experts",
      paragraph: "We help our clients unleash innovation through.",
    },
    {
      img: domain,
      title: "Domain Expertise",
      paragraph: "We help our clients unleash innovation through.",
    },
    {
      img: growth,
      title: "Growth Hacking",
      paragraph: "We help our clients unleash innovation through.",
    },
    {
      img: start,
      title: "Immediate Start",
      paragraph: "We help our clients unleash innovation through.",
    },
    {
      img: quality,
      title: "Quality Guaranteed",
      paragraph: "We help our clients unleash innovation through.",
    },
    {
      img: strong,
      title: "Strong IP Protection",
      paragraph: "We help our clients unleash innovation through.",
    },
    {
      img: execution,
      title: "Transparent Execution",
      paragraph: "We help our clients unleash innovation through.",
    },
    {
      img: communication,
      title: "Excep. Communication",
      paragraph: "We help our clients unleash innovation through.",
    },
  ]
  return (
    <Layout>
      <SEO title="Home" />
      <div className="layout bg-selago">
        <div className="skewed-bg">
          <div className="content">
            <Container className="pt-155">
              <Row className="m-0">
                <Col md={6}>
                  <div className="text-left">
                    <h1>Automating Ideas for Optimum ROI</h1>
                    <p>
                      Adapting Emerging Technologies, Modernizing Legacy Systems
                      & Developing User Friendly Solutions that yields maximum
                      productivity in lower down
                    </p>
                    <div className="btn-batch d-flex">
                      <Button
                        variant="primary"
                        className="endeavour-button"
                        onClick={() => scrollTo("#scroll")}
                      >
                        Let's Chat
                      </Button>
                      <Link to="/work">
                        <Button className="outline-button ml-3">
                          Our Work
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text-right">
                    <Image src={IndexImage} className="image-space" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="inner-skewed">
          <Container>
            <Row className="row">
              <Col md={6}>
                <h6 className="hwr">Who We Are </h6>
                <h4>Strategists, Devbots</h4>
                <h4>Visualizers & Executors</h4>
              </Col>
              <Col md={6}>
                <p className="pb-3">
                  We are a team of diverse masters, encompassing holistic
                  services required to design seamless experiences and
                  progressive solutions, where we Define the Systems, Refine the
                  Legacy Systems, Propose Iterations for ease, Develop the
                  user-friendly products & features & Test the minimum viability
                  as well as optimum performance of the systems.
                </p>
              </Col>
              <Col md={6}>
                <div className="d-flex justify-content-around">
                  <div className="d-flex flex-column">
                    <h1>2015</h1>
                    <h6 className="h-title">Established</h6>
                  </div>
                  <div className="d-flex flex-column">
                    <h1>
                      <CountUp start={0} end={300} duration={5} />+
                    </h1>
                    <h6 className="h-title">Clients</h6>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex justify-content-around">
                  <div className="d-flex flex-column">
                    <h1>
                      {" "}
                      <CountUp start={0} end={500} duration={5} />
                    </h1>
                    <h6 className="h-title">Projects</h6>
                  </div>
                  <div className="d-flex flex-column">
                    <h1>
                      <CountUp start={0} end={100} duration={5} />
                    </h1>
                    <h6 className="h-title">Teams</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <section>
        <Container>
          <div className="services py-50">
            <Row className="m-0">
              <Col md={4}>
                <div className="d-flex">
                  <div className="serviceBox">
                    <h5 className="popularService">Popular Services</h5>
                  </div>
                  <div className="services-Detail">
                    <h1>Services</h1>
                    <p>
                      We offer expertise for end-to-end product design and
                      development, with solutions tailor-made to fit your
                      product’s unique requirements.
                    </p>
                  </div>
                  <div className="btn-batch mb-3">
                    <Link to="/services">
                      <Button variant="primary" className="endeavour-button">
                        See all services
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <Row className="m-0">
                  {services.map((values, i) => {
                    return (
                      <Col md={4} key={i}>
                        <Link to={values.to}>
                          <div className="services-list">
                            <div className="linkIcon rounded-circle">
                              <FontAwesomeIcon icon={values.icon} />
                            </div>
                            <h6 className="sh6">{values.title}</h6>
                            <p className="sPara">{values.paragraph}</p>
                            <FontAwesomeIcon
                              icon={faLongArrowAltRight}
                              className="rightArrow"
                            />
                          </div>
                        </Link>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <FeaturedWork />
      <section>
        <Container>
          <div className="driven-process py-75">
            <h5 className="text-center">Our Research driven Process</h5>
            <div className="d-flex">
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={discover} alt="no-image" />
                </div>
                <h6 className="mb-3">Discover</h6>
                <p className="research-p">
                  We facilitate in translation of thoughts and ideal experiences
                </p>
              </div>
              <div className="align-items-center pt-30 arrow">
                <Image src={amazonUp} />
              </div>
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={design} alt="no-image" />
                </div>
                <h6 className="mb-3">Design</h6>
                <p className="research-p">
                  Design and validate the early ideas through Iteractive
                  Prototype Design
                </p>
              </div>
              <div className="align-items-center pt-30 arrow">
                <Image src={amazonDown} />
              </div>
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={data} alt="no-image" />
                </div>

                <h6 className="mb-3">Develop</h6>
                <p className="research-p">
                  Develop using the modern technologies for performance and
                  scalability
                </p>
              </div>
              <div className="align-items-center pt-30 arrow">
                <Image src={amazonUp} />
              </div>
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={outline} alt="no-image" />
                </div>

                <h6 className="mb-3">Deploy</h6>
                <p className="research-p">
                  Deploy products for efficacy with better security for on
                  security & operations
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="position-relative">
        <div className="teams">
          <Container>
            <div className="teams-detail">
              <Row className=" m-0">
                <Col md={6}>
                  <h1>Dedicated Teams for your Product</h1>
                  <p>
                    We at Qbatch hosts the dedicated cloud teams with effective
                    propositions to seamless delivery of business process
                    without being constrained by domestic and international
                    boundaries. Our technical teams bring a wide array of
                    skillsets to service our valuable clients with flexibility
                    and dedication for projects.
                  </p>
                  <Link to="/teams">
                    <div className="btn-batch">
                      <Button variant="primary" className="endeavour-button">
                        See outsourcing Plan
                      </Button>
                    </div>
                  </Link>
                </Col>
                <Col md={6}>
                  <div className="text-right">
                    <Image src={teamImg} alt="no-image" />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="experites">
          <Container>
            <div className="inner-content">
              <Row className="m-0">
                <Col md={10} sm={12}>
                  <h1 className="text-light mb-22">
                    Our World Class Expertise to Help Your Business Make Dent on
                    Earth
                  </h1>
                  <p className="exp-p text-light mb-50">
                    We facilitate our clients to unleash the potential of their
                    product
                  </p>
                </Col>
                {expertise.map((values, i) => {
                  return (
                    <div className="col-md-3" key={i}>
                      <Image
                        src={values.img}
                        alt="no-image"
                        className="exp-img"
                      />
                      <h6 className="text-light border-h5 pl-2">
                        {values.title}
                      </h6>
                      <p className="text-light exp-p">{values.paragraph}</p>
                    </div>
                  )
                })}
              </Row>
            </div>
          </Container>
          <div className="bg-cornflower"></div>
        </div>
      </section>
      <ClientFeedback />
      <div className="position-relative testimonial" id="scroll">
        <div className="bg-cornflower"></div>
        <div className="contact-us">
          <div className="inner-contact">
            <Container>
              <div className="pt-200">
                <ContactForm />
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div className="py-75 bg-selago">
        <Container>
          <Recognized />
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
