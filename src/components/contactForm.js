import React, { useState } from "react"
import { Form, Button, Image, Row, Col } from "react-bootstrap"
import Avatar from "../images/MaxWilson.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    textarea: "",
  })
  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    setState({ ...state, [name]: value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${state.name} ${state.email}!`)
  }
  return (
    <div className={`testimonial-form`}>
      <div>
        <div className={`contact-heading`}>
          <h5 className={`contact-h5`}>Contact Us</h5>
          <hr className={`b-border`}></hr>
        </div>
        <h4 className={`text-light mt-3 mb-10`}>Ready to get Started?</h4>
      </div>
      <Row>
        <Col md={8}>
          <Form className={`contact-form`} onSubmit={handleSubmit}>
            <Row>
              <Col md={12}>
                <Form.Group
                  controlId="exampleForm.ControlSelect1"
                  className={`contactUs-dropdown position-relative`}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`position-absolute text-light`}
                  />
                  <Form.Control as="select">
                    <option>How we can help you?</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Control
                    onKeyPress={e => {
                      if (e.key === "Enter") handleInputChange()
                    }}
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={state.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Control
                    onKeyPress={e => {
                      if (e.key === "Enter") handleInputChange()
                    }}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="number"
                    value={state.number}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Control
                    onKeyPress={e => {
                      if (e.key === "Enter") handleInputChange()
                    }}
                    type="text"
                    placeholder="Company"
                    name="company"
                    value={state.company}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    onKeyPress={e => {
                      if (e.key === "Enter") handleInputChange()
                    }}
                    name="textarea"
                    as="textarea"
                    value={state.textarea}
                    rows={4}
                    placeholder="Message"
                    onChange={handleInputChange}
                    className={`py-2`}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <span className={`text-spam mt-4`}>
                  Don't worry we do not span your information.
                </span>
              </Col>
              <div className={`btn-batch mt-4`}>
                <Button variant="primary" type="submit" className={`btn-send`}>
                  Send
                </Button>
              </div>
            </Row>
          </Form>
        </Col>
        <Col md={4}>
          <div className={`actions`}>
            <h5 className={`text-light`}>Quick actions</h5>
            <hr className={`action-line`}></hr>
          </div>
          <div className={`d-flex text-center-md`}>
            <div className={`mr-3`}>
              <Image src={Avatar} alt="Avatar" className={`avatar`} />
            </div>
            <div className={`d-flex flex-column  text-light`}>
              <strong className={`text-light`}>Max Wilson</strong>
              <small className={`small-text`}>Customer Care</small>
            </div>
          </div>
          <div className={`list-detail`}>
            <ul className={`list-unstyled detail`}>
              <li className={`detail__list`}>max.wilson@qbatch.io</li>
              <li className={`detail__list`}>(737) 377-2428</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactForm
