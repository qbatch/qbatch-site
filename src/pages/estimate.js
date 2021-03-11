import React, { useState } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap"

import Desktop from "../images/work/desktop.svg"
import Mobile from "../images/work/mobile.svg"
import Other from "../images/work/other.svg"
import Design from "../images/work/design.svg"
import webDevelop from "../images/work/webDevelop.svg"
import Ai from "../images/work/ai.svg"
const Estimate = () => {
  const [state, setState] = useState({
    checkedA: "",
    checkedB: "",
    checkedC: "",
    checkedD: "",
    checkedE: "",
    checkedF: "",
  })
  const stateChange = name => {
    setState({ ...state, [name]: !state[name] })
  }

  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    textarea: "",
    agreed: "",
  })
  const [validated, setValidated] = useState(false)

  const handleInputChange = event => {
    const target = event.target
    const values = target.value
    const name = target.name

    setValue({ ...value, [name]: values })
  }
  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
    event.preventDefault()

    alert(`Welcome ${value.firstName} ${value.lastName}!`)
  }
  return (
    <Layout>
      <SEO title="estimate" />
      <div className="bg-selego">
        <Container>
          <div className="py-75 mt__8">
            <h2 className="text-center">
              <span className="endeavour">Get an estimate</span>
            </h2>
            <p className="text-center">
              Fill out this simple form. Our team will contact you promptly to
              discuss next steps.
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <Row className="m-0">
          <Col md={4}>
            <div className="first__estimate">
              <h1 className="first">1</h1>
              <div className="device">
                <hr className="inner-hr"></hr>
                <h5>
                  What is the device of your<br></br> project?
                </h5>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="py-50">
              <Row className="m-0">
                <Col md={4}>
                  <div
                    className="select-box"
                    onClick={() => stateChange("checkedA")}
                  >
                    <Form.Group>
                      <Form.Check
                        type="checkbox"
                        name="checkedA"
                        checked={state.checkedA}
                      />
                    </Form.Group>

                    <Image src={Desktop} alt="no-image" className="" />
                    <h5>Desktop</h5>
                  </div>
                </Col>
                <Col md={4}>
                  <div
                    className="select-box"
                    onClick={() => stateChange("checkedB")}
                  >
                    <Form.Group>
                      <Form.Check
                        name="checkedB"
                        type="checkbox"
                        checked={state.checkedB}
                      />
                    </Form.Group>

                    <Image src={Mobile} alt="no-image" />
                    <h5>Mobile</h5>
                  </div>
                </Col>
                <Col md={4}>
                  <div
                    className="select-box"
                    onClick={() => stateChange("checkedC")}
                  >
                    <Form.Group>
                      <Form.Check
                        name="checkedC"
                        type="checkbox"
                        checked={state.checkedC}
                      />
                    </Form.Group>

                    <Image src={Other} alt="no-image" />
                    <h5>Other</h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div className="first__estimate">
              <h1 className="first">2</h1>
              <div className="device">
                <hr className="inner-hr"></hr>
                <h5>
                  What is the type of your<br></br> project?
                </h5>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="py-50">
              <Row className="m-0">
                <Col md={4}>
                  <div
                    className="select-box"
                    onClick={() => stateChange("checkedD")}
                  >
                    <Form.Group>
                      <Form.Check
                        type="checkbox"
                        name="checkedD"
                        checked={state.checkedD}
                      />
                    </Form.Group>

                    <Image src={Design} alt="no-image" />
                    <h5>Design</h5>
                  </div>
                </Col>
                <Col md={4}>
                  <div
                    className="select-box"
                    onClick={() => stateChange("checkedE")}
                  >
                    <Form.Group>
                      <Form.Check
                        name="checkedE"
                        type="checkbox"
                        checked={state.checkedE}
                      />
                    </Form.Group>

                    <Image src={webDevelop} alt="no-image" />
                    <h5>web Development</h5>
                  </div>
                </Col>
                <Col md={4}>
                  <div
                    className="select-box"
                    onClick={() => stateChange("checkedF")}
                  >
                    <Form.Group>
                      <Form.Check
                        name="checkedF"
                        type="checkbox"
                        checked={state.checkedF}
                      />
                    </Form.Group>

                    <Image src={Ai} alt="no-image" />
                    <h5>AI</h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-selego">
        <Container>
          <Row className="m-0">
            <Col md={4}>
              <div className="first__estimate">
                <h1 className="first">3</h1>
                <div className="device">
                  <hr className="inner-hr"></hr>
                  <h5>
                    Fill the form and get an <br></br> estimate
                  </h5>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className="py-75">
                <Form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className="estimate_form"
                >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      required
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      value={value.email}
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Email is required
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      required
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={value.firstName}
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      First Name is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={value.lastName}
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Last Name is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      required
                      type="text"
                      name="number"
                      placeholder="Phone Number"
                      value={value.number}
                      onChange={handleInputChange}
                      onKeyPress={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Phone Number is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      name="textarea"
                      rows={5}
                      placeholder="Short description of your idea"
                      value={value.textarea}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <span className="email-sent">
                    Need NDA first? E-mail us at
                    <ins className="pl-1">hello@qbatch.com</ins>
                  </span>
                  <p>
                    Qbatch respects the privacy of your data and queries. This
                    data will only be used for communication purposes and we
                    will not reveal any identity that can impact business or
                    customer’s confidentiality.
                  </p>
                  <Form.Group>
                    <Form.Check
                      name="agree"
                      type="checkbox"
                      label="I agree to receive marketing communication from Qbatch."
                      // checked={value.agreed}
                      // onChange={handleInputChange}
                    />
                  </Form.Group>
                  <p>
                    You can unsubscribe from these communications at any time.
                    For more information on how to unsubscribe, our privacy
                    practices please view our{" "}
                    <Link to="/" className="privacy-policy">
                      {" "}
                      <ins>Privacy Policy.</ins>
                    </Link>
                  </p>
                  <Link>
                    <div className="btn-batch">
                      <Button className="btn-send m-0" type="submit">
                        Send
                      </Button>
                    </div>
                  </Link>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Estimate
