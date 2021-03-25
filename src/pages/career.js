import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"
import hiring from "../images/career/hiring.svg"
import mission from "../images/career/mission.svg"
import teamImage from "../images/career/teamImage.png"
const Career = () => {
  return (
    <Layout>
      <SEO title="Career" />
      <Container>
        <div className={`bg-header pt-100`}>
          <Row>
            <Col md={6}>
              <div className={`pt-50`}>
                <h1>We are hiring</h1>
                <p>
                  We are a team of diverse masters, encompassing holistic
                  services required to design seamless experiences and
                  progressive solutions.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className={`text-center`}>
                <Image src={hiring} alt="no-image" />
              </div>
            </Col>
          </Row>
        </div>

        <Row>
          <Col md={6}>
            <div className={`p-50`}>
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
            <div className={`p-55`}>
              <div className={`qbatchList`}>
                <ul className={`list-unstyled  process__container`}>
                  <li className={`process__step`}>
                    Truly impactful solutions for Amazon Sellers
                  </li>

                  <li className={`process__step`}>
                    {" "}
                    Really fast moving environment
                  </li>

                  <li className={`process__step`}>Human and care centric </li>

                  <li className={`process__step`}>
                    Top notch technologies and practices
                  </li>
                  <li className={`process__step`}>
                    Team of highly motivated engineer’s and Designers to help
                    you thrive
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className={`p-50`}>
              <h1>Be part of our mission</h1>
              <p>
                If you are passionate about changing world through technology,
                this is a great time to join Qbatch Lahore and Faisalabad
                offices
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className={`text-center p-50`}>
              <Image src={mission} alt="no-image" />
            </div>
          </Col>
        </Row>
      </Container>
      <Helmet>
        <script src="https://s3.amazonaws.com/files.freshteam.com/production/65182/attachments/6000040247/original/6000003854_widget.js?1614695610`}"></script>
      </Helmet>
      <div id={`freshteam-widget`}></div>
      <Container>
        <div className={`aboutUs text-center`}>
          <div className={`textPortion`}>
            <h5 className={`text-light`}>What Makes Us</h5>
            <h1 className={`text-light`}>Qbatch</h1>
            <p className={`text-light py-100`}>
              For over 5 years, our company has been growing and we’re proud of
              our history and excited about our future.
            </p>
            <div className={`btn-batch d-block`}>
              <Link to="/about">
                <button type="button" className={`btn  aboutUs`}>
                  About Us
                </button>
              </Link>
            </div>
          </div>
          <Image src={teamImage} alt="no-image" />
        </div>
      </Container>
    </Layout>
  )
}

export default Career
