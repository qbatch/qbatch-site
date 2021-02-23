import React, { useState } from "react"
import { Form, Button, Image } from "react-bootstrap"
import Avatar from "../images/waqasServer.png"
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
    <div className="testimonial-form">
      <div className="px-3">
        <div className="contact-heading">
          <h5 className="contact-h5">Contact Us</h5>
          <hr className="b-border"></hr>
        </div>
        <h4 className="text-light mt-3 mb-10">Ready to get Started?</h4>
      </div>
      <div className="row">
        <div className="col-md-8">
          <Form className="contact-form" onSubmit={handleSubmit}>
            <div className="row m-0">
              <div className="col-md-12">
                <Form.Group
                  controlId="exampleForm.ControlSelect1"
                  className="contactUs-dropdown position-relative"
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="position-absolute text-light"
                  />
                  <Form.Control as="select">
                    <option>How we can help you?</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={state.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="number"
                    value={state.number}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Company"
                    name="company"
                    value={state.company}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-12">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    name="textarea"
                    as="textarea"
                    value={state.textarea}
                    rows={4}
                    placeholder="Company"
                    onChange={handleInputChange}
                    className="py-2"
                  />
                </Form.Group>
              </div>
              <div className="col-md-12">
                <span className="text-spam mt-4">
                  Don't worry we do not span your information.
                </span>
              </div>
              <div className="btn-batch mt-4">
                <Button variant="primary" type="submit" className="btn-send">
                  Send
                </Button>
              </div>
            </div>
          </Form>
        </div>
        <div className="col-md-4">
          <div className="actions">
            <h5 className="text-light">Quick actions</h5>
            <hr className="action-line"></hr>
          </div>
          <div className="d-flex mt-30">
            <div className="mr-3">
              <Image src={Avatar} alt="Avatar" className="avatar" />
            </div>
            <div className="d-flex flex-column text-light">
              <strong className="text-light">Waqas Sarwar</strong>
              <small className="small-text">Customer Care</small>
            </div>
          </div>
          <div className="list-detail">
            <ul className="list-unstyled detail">
              <li className="detail__list">waqas@qbatch.com</li>
              <li className="detail__list">571 549 8431</li>
              <li className="detail__list">571 549 8431</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
