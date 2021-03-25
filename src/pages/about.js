import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import MarketPresence from "../components/marketPresence"
import { Container, Image, Row, Col } from "react-bootstrap"
import shapeLower from "../images/services/shapeLower.png"
import shapeUpper from "../images/services/shapeUpper.png"
import curious from "../images/about/curious.svg"
import Brave from "../images/about/brave.svg"
import Kind from "../images/about/kind.svg"
import Driven from "../images/about/driven.svg"
import CountUp from "react-countup"
import expert from "../images/expertise/expert.svg"
import domain from "../images/expertise/domain.svg"
import growth from "../images/expertise/growth.svg"
import start from "../images/expertise/start.svg"
import quality from "../images/expertise/quality.svg"
import strong from "../images/expertise/strong.svg"
import execution from "../images/expertise/execution.svg"
import communication from "../images/expertise/communication.svg"
import Recognized from "../components/recognized"
import rightIcon from "../images/about/team/rightIcon.svg"
import group from "../images/about/team/group.png"
import groupTwo from "../images/about/team/groupTwo.png"
import groupFour from "../images/about/team/groupFour.png"
import groupThree from "../images/about/team/groupThree.png"
import Lahore from "../images/about/team/lahore.png"
import Fsd from "../images/about/team/Faisalabad.png"
import leftIcon from "../images/about/team/leftIcon.svg"
const About = () => {
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
      <SEO title="About us" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <Row className="m-0">
            <Col md={12}>
              <div className="pt-174 pt-100">
                <h2 className="mb-4">
                  <span className="endeavour mr-2">About</span>
                  Qbatch
                </h2>
                <p>
                  Since 2015, we’ve been committed to providing dedicated remote
                  teams to engineer finest digital experiences
                </p>
                <div
                  className="d-flex justify-content-between about-counter
                 flex-wrap"
                >
                  <div className="d-flex flex-column text-center  mb-3">
                    <h2>2015</h2>
                    <span>Established</span>
                  </div>
                  <div className="d-flex flex-column text-center mb-3">
                    <h2>
                      <CountUp start={0} end={300} duration={5} />+
                    </h2>
                    <span>Clients</span>
                  </div>
                  <div className="d-flex flex-column text-center  mb-3">
                    <h2>
                      <CountUp start={0} end={100} duration={5} />
                    </h2>
                    <span>Team</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our-story">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />

        <Container>
          <Row className="m-0">
            <Col md={10} sm={12}>
              <div className="py-75">
                <h5>Our Story</h5>
                <p>
                  Qbatch is a Full Service Technology Company, founded in 2015
                  to augment the technological growth in the dynamic market
                  through enabling businesses to gain the higher proficiency of
                  comparative advantage in the line of their products and
                  services through automated processes, deploying emerging
                  technologies and developing user-friendly interfaces that
                  eventually facilitates in customer retention and minimizes the
                  churn. Our Global Delivery Network allows us to deliver
                  reliable technology and outsourcing services across the globe.
                </p>
                <p>
                  We are a team of diverse masters, encompassing holistic
                  services required to design seamless experiences and
                  progressive solutions, where we Define the Systems, Refine the
                  Legacy Systems, Propose Iterations for ease, Develop the
                  user-friendly products & features & Test the minimum viability
                  as well as optimum performance of the systems.
                </p>
              </div>
            </Col>

            <Col md={12}>
              <div className="text-center">
                <h2>We are What Our Values</h2>
                <p className="text-center">
                  Our focus is always on setting result-driven standards for
                  every project.
                </p>
                <Row className="m-0">
                  <Col md={6} className="p-0">
                    {" "}
                    <div className="text-center border-right-bottom  px-50">
                      <Image
                        src={curious}
                        className="aboutImg"
                        alt="no-image"
                      />
                      <h6>Curious</h6>
                      <p className="text-center">
                        Asking the right questions and relentlessly adapting.
                        Qbatch mindset is based in learning, pivoting, and
                        iterating. We make things right, and our constant
                        inquisitive nature makes them better.
                      </p>
                    </div>
                  </Col>
                  <Col md={6} className="p-0">
                    {" "}
                    <div className="text-center border-left-bottom  px-50">
                      <Image src={Brave} className="aboutImg" alt="no-image" />
                      <h6>Brave</h6>
                      <p className="text-center">
                        Doing the right thing. The fair thing. Not just the easy
                        thing. Rangle doesn’t settle. We are courageously
                        focused on impact over the status quo. Leaning into
                        challenges with open minds, creative passion, and bold
                        confidence.
                      </p>
                    </div>
                  </Col>

                  <Col md={6} className="p-0">
                    {" "}
                    <div className="text-center px-50">
                      <Image src={Kind} className="aboutImg" alt="no-image" />
                      <h6>Kind</h6>
                      <p className="text-center">
                        Empathy over ego. The Rangle community takes care of the
                        team. We are nice to each other. Through support,
                        respect, and active listening, we build an inclusive and
                        collaborative atmosphere.
                      </p>
                    </div>
                  </Col>
                  <Col md={6} className="p-0">
                    <div className="text-center b-leftGrey px-50">
                      <Image src={Driven} className="aboutImg" alt="no-image" />
                      <h6>Driven</h6>
                      <p className="text-center">
                        Led by purpose, demonstrated through professional
                        excellence. We hold ourselves accountable for immaculate
                        quality that leads to the success of our partners.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-75 bg-selego hideLarge">
        <Container>
          <Row className="m-0">
            <Col md={10} sm={12}>
              <h3 className=" mb-22 ">
                Our World Class Expertise to Help Your Business Make Dent on
                Earth
              </h3>
              <p className="mb-50">
                We facilitate our clients to unleash the potential of their
                product
              </p>
            </Col>
            {expertise.map((values, i) => {
              return (
                <Col md={3} key={i}>
                  <div className="bg-roseWhite">
                    <Image
                      src={values.img}
                      alt="no-image"
                      className="exp-img"
                    />
                    <h6 className="title-b pl-2">{values.title}</h6>
                    <p className="exp-p">{values.paragraph}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <div className="py-75">
        <Container>
          <Recognized />
        </Container>
      </div>
      <MarketPresence />
      <div className="text-center py-75 employees ">
        <Container>
          <h1>Our Amazing Team</h1>
          <p className="tex-center teamsP">
            develop innovative software solutions for leading enterprises in the
            world, helping them grow their businesses using latest technology
            solutions.
          </p>
          {/* <Row className="m-0">
            {teams.map((teams, i) => {
              return (
                <>
                  <Col md={3} className="mb-4 ">
                    <Image src={teams.image} alt="no-image" />
                    <div className="text-left">
                      <h6 className="name">{teams.name}</h6>
                      <span className="position">{teams.position}</span>
                    </div>
                  </Col>
                </>
              )
            })}
          </Row> */}
        </Container>
      </div>
      <div className="bg-midnight feedback">
        {/* <div className="left-image position-relative">
          <h4 className="text-light midnight-h4 w-75 ">
            Our Culture <b>Empowers</b> individuals to learn from experiences,
            interactions & people around them.
          </h4>
          <Image src={Dotted} className="dottedImg" alt="no-image" />
          <Image src={Tour} alt="no-image" />
        </div>
        <div className="group-images">
          <Image src={firstGroup} className="w-420" alt="no-image" />
          <Image src={scndGroup} className="w-420" alt="no-image" />
          <Image src={thirdGroup} className="w-420" alt="no-image" />
        </div> */}
        <Row className="m-0">
          <Col md={3} className="p-0">
            <div>
              <Image src={group} alt="no-image" />
              <Image src={groupTwo} alt="no-img" />
            </div>
            <div className="position-relative pt-90">
              <div className="bg-endeavour"></div>
              <div className="bg-danube left-side"></div>
            </div>
          </Col>
          <Col md={6} className="p-0">
            <div className="position-relative h-100 d-flex justify-content-center align-items-center">
              <Image
                src={rightIcon}
                className="position-absolute rightIcon"
                alt="no-image"
              />
              <Image
                src={leftIcon}
                alt="no-img"
                className="position-absolute top-0 leftIcon"
              />
              <h5 className="text-light text-center f-26">
                Our Culture <b>Empowers</b> individuals to learn from
                experiences, interactions & people around them.
              </h5>
            </div>
          </Col>
          <Col md={3} className="p-0 text-right">
            <div className="position-relative pb-90 right">
              <div className="bg-endeavour"></div>
              <div className="bg-danube right-side"></div>
            </div>
            <div>
              <Image src={groupFour} alt="no-image" />
              <Image src={groupThree} alt="no-img" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="py-50 text-center">
        <h1>Our Offices</h1>
      </div>
      <div className="offices py-50 p">
        <Container>
          <Row className="m-0">
            <Col md={6}>
              <div className="bg-selego text-center py-50 pb-0 mb-4">
                <Image src={Lahore} alt="no-image" />
                <div className="address">
                  <h3>Lahore</h3>
                  <p>106 Sector K, CCA Phase-1 DHA</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-selego text-center py-50 pb-0">
                <Image src={Fsd} alt="no-image" />
                <div className="address">
                  <h3>Faisalabad</h3>
                  <p>Mezzanine floor, Sitara Tower, Bilal Rd, Civil Lines</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="freshteam-widget"></div>
      <div className="py-75 bg-midnight">
        <Container>
          <ContactForm />
        </Container>
      </div>
    </Layout>
  )
}

export default About
