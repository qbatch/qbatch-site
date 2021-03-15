import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container, Row, Col, Image } from "react-bootstrap"
import hiring from "../images/career/hiring.svg"
import mission from "../images/career/mission.svg"
const Career = () => {
  return (
    <Layout>
      <SEO title="Career" />
      <Container>
        <div className="bg-header pt-100">
          <Row>
            <Col md={6}>
              <div className="pt-50">
                <h1>We are hiring</h1>
                <p>
                  We are a team of diverse masters, encompassing holistic
                  services required to design seamless experiences and
                  progressive solutions.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <Image src={hiring} alt="no-image" />
              </div>
            </Col>
          </Row>
        </div>

        <Row>
          <Col md={6}>
            <div className="p-50">
              <h3>Why Qbatch?</h3>
              <p>
                We are a team of diverse masters, encompassing holistic services
                required to design seamless experiences and progressive
                solutions, where we Define the Systems, Refine the Legacy
                Systems, Propose Iterations for ease, Develop the user-friendly
                products & features & Test the minimum viability as well as
                optimum performance of the systems.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-55">
              <div className="qbatchList">
                <ul className="list-unstyled  process__container">
                  <li className="process__step">
                    Truly impactful solutions for Amazon Sellers
                  </li>

                  <li className="process__step">
                    {" "}
                    Really fast moving environment
                  </li>

                  <li className="process__step">Human and care centric </li>

                  <li className="process__step">
                    Top notch technologies and practices
                  </li>
                  <li className="process__step">
                    Team of highly motivated engineer’s and Designers to help
                    you thrive
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="p-50">
              <h1>Be part of our mission</h1>
              <p>
                If you are passionate about changing world through technology,
                this is a great time to join Qbatch Lahore and Faisalabad
                offices
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center p-50">
              <Image src={mission} alt="no-image" />
            </div>
          </Col>
        </Row>
      </Container>
      <div id="freshteam-widget"></div>
    </Layout>
  )
}

export default Career
