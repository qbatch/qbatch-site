import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import Phone from "../images/icons/phone.svg"
import Clock from "../images/icons/clock.svg"
import Envelope from "../images/icons/envelope.svg"
const contact = () => {
  return (
    <div>
      <Layout>
        <SEO title="contact" />
        <div className={`bg-selego`}>
          <Container>
            <div className={`py-75 mt__8`}>
              <h2 className={`text-center`}>
                <span className={`endeavour`}>Get in touch</span>
              </h2>
              <p className={`text-center`}>
                Fill out this simple form. Our team will contact you promptly to
                discuss next steps.
              </p>
            </div>
          </Container>
        </div>
        <Container>
          <Form className={`contact-us-form py-75`}>
            <Row className={`m-0 justify-content-md-center`}>
              <Col md={10}>
                <Form.Group
                  controlId="exampleForm.ControlSelect1"
                  className={`contactUs-dropdown position-relative`}
                >
                  {/* <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`position-absolute color-regent`}
                  /> */}
                  <Form.Control as="select">
                    <option>How we can help you?</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={10}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Col>
              <Col md={10}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Email" />
                </Form.Group>
              </Col>
              <Col md={10}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Phone" />
                </Form.Group>
              </Col>
              <Col md={10}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Company" />
                </Form.Group>
              </Col>
              <Col md={10}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    name="textarea"
                    as="textarea"
                    rows={4}
                    placeholder="Message"
                    className={`resize py-2`}
                  />
                </Form.Group>
              </Col>
              <Col md={10}>
                <span className={`text-spam mt-4`}>
                  Don't worry we do not spam your information.
                </span>
              </Col>
              <Col md={10}>
                <div className={`btn-batch mt-4`}>
                  <Button
                    variant="primary"
                    type="submit"
                    className={`btn-send m-0`}
                  >
                    Send
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
        <div className={`bg-midnight py-75`}>
          <Container>
            <Row className={`justify-content-md-center m-0`}>
              <Col md={3}>
                <div className={`alignText`}>
                  <div className={`alignText__iconBox`}>
                    <Image src={Phone} alt="no-image" />
                  </div>
                  <span className={`alignText__title`}>+92-300-9610309</span>
                </div>
              </Col>
              <Col md={3}>
                <div className={`alignText`}>
                  <div className={`alignText__iconBox`}>
                    <Image src={Clock} alt="no-image" />
                  </div>
                  <span className={`alignText__title`}>
                    Monday - Friday <br /> 10:00 AM - 6:00 PM
                  </span>
                </div>
              </Col>
              <Col md={3}>
                <div className={`alignText`}>
                  <div className={`alignText__iconBox`}>
                    {/* <FontAwesomeIcon
                      icon={faEnvelope}
                      className={`text-light`}
                    /> */}
                    <Image src={Envelope} alt="no-image" />
                  </div>
                  <span className={`alignText__title`}>contact@qbatch.com</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  )
}

export default contact
