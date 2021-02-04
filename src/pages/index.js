import React, { useRef } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { Container, Image, Button } from "react-bootstrap"
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
import { scroller } from "react-scroll"
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
import quality from "../images/expertise/start.svg"
import strong from "../images/expertise/strong.svg"
import execution from "../images/expertise/execution.svg"
import communication from "../images/expertise/communication.svg"
import IndexImage from "../images/index.svg"
import ContactForm from "../components/contactForm"
import clutch from "../images/recognized/clutch.png"
import pasha from "../images/recognized/pasha.png"
import upWork from "../images/recognized/upwork.png"

const IndexPage = () => {
  const services = [
    {
      icon: faChartPie,
      title: "Enterprise Solutions",
      paragraph: "Dive deeper into the systems to boost your business.",
      to: "/enterprise",
    },
    {
      icon: faMobileAlt,
      title: "Mobile Development",
      paragraph:
        "We embrace a made-to-order strategy to design and develop the Mobile Applications.",
      to: "/mobileDevelopment",
    },
    {
      icon: faDesktop,
      title: "web  Development",
      paragraph:
        "we develop tailor-made Respons- -ive Web Apps to assimilate the user-base providing accessibilities.",
      to: "/webDevelopment",
    },
    {
      icon: faCloud,
      title: "Cloud Engineering",
      paragraph: "Better customer experience with Cloud Engineering Services.",
      to: "CloudEngineering",
    },
    {
      icon: faPencilRuler,
      title: "UI/UX Design",
      paragraph:
        "We help to design seamless experience of your product. Solving problems.",
      to: "ui/ux",
    },
    {
      icon: faBriefcase,
      title: "Business Consulting",
      paragraph:
        "We deliver balanced solutions & unmatched client experiences.",
      to: "businessConsulting",
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
  const myRef = useRef(null)
  const executeScroll = () => {
    myRef.current.scrollIntoView()
    scroller.scrollTo("", {
      duration: 800,
      delay: 800,
      smooth: "easeInOutQuart",
    })
  }
  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
      {/* <section className="background">
      <div className="outer-left">
        <div className="container">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. Lorem ipsum, or lipsum as it is sometimes known,
          is dummy text used in laying out print, graphic or web designs. The
          passage is attributed to an unknown typesetter in the 15th century who
          is thought to have scrambled parts of Cicero's De Finibus Bonorum et
          Malorum for use in a type specimen book.
        </div>
      </div>
    </section> */}
      <div className="layout">
        <div className="skewed-bg">
          <div className="content">
            <Container className="pt-155">
              <div className="row m-0">
                <div className="col-md-6">
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
                        onClick={executeScroll}
                      >
                        Let's Chat
                      </Button>
                      <Button className="outline-button ml-4">Our Work</Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-right">
                    <Image src={IndexImage} className="image-space" />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="inner-skewed">
          <Container>
            <div className="row m-0">
              <div className="col-md-6">
                <h6 className="hwr">Who We Are </h6>
                <h3 className="hwr-types">
                  Strategists, Devbots, Visualizers & Executors
                </h3>
              </div>
              <div className="col-md-6">
                <p className="pb-3">
                  We are a team of diverse masters, encompassing holistic
                  services required to design seamless experiences and
                  progressive solutions, where we Define the Systems, Refine the
                  Legacy Systems, Propose Iterations for ease, Develop the
                  user-friendly products & features & Test the minimum viability
                  as well as optimum performance of the systems.
                </p>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <h1>2015</h1>
                    <h3 className="h-title">Established</h3>
                  </div>
                  <div className="d-flex flex-column">
                    <h1>300+</h1>
                    <h2 className="h-title">Clients</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-around">
                  <div className="d-flex flex-column">
                    <h1>500</h1>
                    <h2 className="h-title">Projects</h2>
                  </div>
                  <div className="d-flex flex-column">
                    <h1>100</h1>
                    <h2 className="h-title">Teams</h2>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <section>
        <Container>
          <div className="services">
            <div className="row m-0">
              <div className="col-md-4">
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
                    <Button variant="primary" className="endeavour-button">
                      See all services
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row m-o">
                  {services.map((values, i) => {
                    return (
                      <div className="col-md-4">
                        <div className="services-list" to={values.to}>
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
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <FeaturedWork />
      <section>
        <Container>
          <div className="driven-process">
            <h3 className="text-center">Our Research driven Process</h3>
            <div className="d-flex">
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={discover} alt="no-image" />
                </div>
                <h4 className="mb-3">Discover</h4>
                <p className="research-p">
                  We facilitate in translation of thoughts and ideal experiences
                </p>
              </div>
              <div className="d-flex align-items-center pt-30">
                <Image src={amazonUp} />
              </div>
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={design} alt="no-image" />
                </div>
                <h4 className="mb-3">Design</h4>
                <p className="research-p">
                  Design and validate the early ideas through Iteractive
                  Prototype Design
                </p>
              </div>
              <div className="d-flex align-items-center pt-30">
                <Image src={amazonDown} />
              </div>
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={data} alt="no-image" />
                </div>

                <h4 className="mb-3">Develop</h4>
                <p className="research-p">
                  Develop using the modern technologies for performance and
                  scalability
                </p>
              </div>
              <div className="d-flex align-items-center pt-30">
                <Image src={amazonUp} />
              </div>
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={outline} alt="no-image" />
                </div>

                <h4 className="mb-3">Deploy</h4>
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
              <div className="row m-0">
                <div className="col-md-6">
                  <h1>Dedicated Teams for your Product</h1>
                  <p>
                    We at Qbatch hosts the dedicated cloud teams with effective
                    propositions to seamless delivery of business process
                    without being constrained by domestic and international
                    boundaries. Our technical teams bring a wide array of
                    skillsets to service our valuable clients with flexibility
                    and dedication for projects.
                  </p>
                  <div className="btn-batch">
                    <Button variant="primary" className="endeavour-button">
                      See outsourcing Plan
                    </Button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-right">
                    <Image src={teamImg} alt="no-image" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="experites">
          <Container>
            <div className="inner-content">
              <div className="row m-0">
                <div className="col-md-10 col-sm-12">
                  <h1 className="text-light mb-22">
                    Our World Class Expertise to Help Your Business Make Dent on
                    Earth
                  </h1>
                  <p className="exp-p text-light mb-50">
                    We facilitate our clients to unleash the potential of their
                    product
                  </p>
                </div>
                {expertise.map((values, i) => {
                  return (
                    <div className="col-md-3" key={i}>
                      <Image
                        src={values.img}
                        alt="no-image"
                        className="exp-img"
                      />
                      <h5 className="text-light border-h5 pl-2">
                        {values.title}
                      </h5>
                      <p className="text-light exp-p">{values.paragraph}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </Container>
          <div className="bg-cornflower"></div>
        </div>
      </section>
      <ClientFeedback />
      <div className="position-relative testimonial" ref={myRef}>
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
      <div className="recognized">
        <Container>
          <div className="row m-0">
            <div className="col-md-6">
              <h2 className="recognized-h2">
                We Are Proud To Be Recognized At
              </h2>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <div className="d-flex recognized-list">
                  <div className="clutch">
                    <Image src={clutch} alt="no-image" />
                  </div>
                  <div className="d-flex flex-column justify-content-center ml-3">
                    <h6>Clutch Awards</h6>
                    <small>
                      Top Rated Web Developer Top Rated Mobile App Developer
                    </small>
                  </div>
                </div>
                <div className="d-flex recognized-list">
                  <div className="clutch">
                    <Image src={pasha} alt="no-image" />
                  </div>
                  <div className="d-flex flex-column justify-content-center ml-3">
                    <h6>Pasha Recognized</h6>
                    <small>
                      Mobile and Web Development Agency In the Year 2016
                    </small>
                  </div>
                </div>
                <div className="d-flex recognized-list">
                  <div className="clutch">
                    <Image src={upWork} alt="no-image" className="mw-100" />
                  </div>
                  <div className="d-flex flex-column justify-content-center ml-3">
                    <h6>upWork</h6>
                    <small>5000+ hours, 200 Clients, 150 Projects</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
