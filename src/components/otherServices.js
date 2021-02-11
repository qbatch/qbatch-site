import React from "react"
import { Container, Col, Row, Image, Button } from "react-bootstrap"
import Android from "../images/services/android.svg"
import Ios from "../images/services/ios.svg"
const otherServices = () => {
  return (
    <div className="bg-selego py-75 text-center">
      <Container>
        <h4>
          Looking for <span className="endeavour"> other services?</span>
        </h4>
        <p className="text-center mx-600">
          We can fully support your business idea with outstanding tech skills
          and deliver digital products on time. Hassle-free.
        </p>
        <Row className="m-0">
          <Col md={6} sm={6} xs={12}>
            <div className="text-center">
              <div className="bg-icon">
                <Image src={Android} alt="no-image" />
              </div>
              <h5>Android Development</h5>
              <p className="listPara text-center mx-300">
                Create mobile native applications for Android with
                top-of-the-league practices.
              </p>
              <div className="btn-batch">
                <Button
                  variant="primary"
                  type="submit"
                  className="endeavour-button"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6} sm={6} xs={12}>
            <div className="text-center">
              <div className="bg-icon">
                <Image src={Ios} alt="no-image" />
              </div>
              <h5>iOS Development</h5>
              <p className="listPara text-center mx-300">
                Build mobile native applications using state-of-the-art
                technology standards for iOS.
              </p>
              <div className="btn-batch">
                <Button
                  variant="primary"
                  type="submit"
                  className="endeavour-button"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default otherServices
