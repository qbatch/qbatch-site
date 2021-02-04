import React from "react"
import { Form, Button, Image } from "react-bootstrap"
import Avatar from "../images/waqasServer.png"

const ContactForm = () => {
  return (
    <div className="testimonial-form">
      <div className="px-3">
        <div className="contact-heading">
          <h5 className="contact-h5">Contact Us</h5>
          <hr className="b-border"></hr>
        </div>
        <h2 className="text-light mt-3 mb-10">Ready to get Started?</h2>
      </div>
      <div className="row">
        <div className="col-md-8">
          <Form className="contact-form">
            <div className="row m-0">
              <div className="col-md-12">
                <Form.Group
                  controlId="exampleForm.ControlSelect1"
                  className="contactUs-dropdown"
                >
                  <Form.Control as="select">
                    <option>How we can help you?</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="number" placeholder="Phone" />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Company" />
                </Form.Group>
              </div>
              <div className="col-md-12">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={4} placeholder="Company" />
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
            <h3 className="text-light">Quick actions</h3>
            <hr className="action-line"></hr>
          </div>
          <div className="d-flex mt-30">
            <div className="mr-3">
              <Image src={Avatar} alt="Avatar" class="avatar" />
            </div>
            <div className="d-flex flex-column text-light">
              <h6 className="Name">Waqas Sarwar</h6>
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
