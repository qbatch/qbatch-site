import React from "react"
import { Link } from "gatsby"
import { Container, Image, ListGroup } from "react-bootstrap"
import award from "../images/footer/award.png"
import facebook from "../images/socialIcons/facebook.svg"
import twitter from "../images/socialIcons/twitter.svg"
import instagram from "../images/socialIcons/instagram.svg"
import linkdin from "../images/socialIcons/linkdin.svg"
const footer = ({ logo }) => {
  const menu = [
    {
      link: "/about",
      title: "About us",
    },
    {
      link: "/estimate",
      title: "estimate",
    },
    {
      link: "",
      title: "career",
    },
    {
      link: "/privacy",
      title: "privacy policy",
    },
    {
      link: "/blog",
      title: "our blog",
    },
    {
      link: "/terms",
      title: "terms of policy",
    },
  ]
  const services = [
    {
      link: "/services/enterprise",
      title: "Enterprise Business Solutions",
    },
    {
      link: "/services/mobileApp",
      title: "Cross Platform Mobile Development",
    },
    {
      link: "/services/webDevelopment",
      title: "Web Development",
    },
    {
      link: "/services/devops",
      title: "Cloud Engineering Services",
    },
    {
      link: "/services/uiDesign",
      title: "UI/UX Design & Development",
    },
    {
      link: "/services/business",
      title: "Business Consulting",
    },
  ]
  return (
    <Container>
      <footer>
        <div className="upper">
          <div className="row">
            <div className="col-md-3">
              <div className="logo-box">
                <Image src={logo} alt="no-image" />
              </div>
              <div className="d-flex flex-column location">
                <small className="light-text">Contact</small>
                <a href="https://www.qbatch.com/" className="mail-link">
                  hello@qbatch.com
                </a>
              </div>
              <div className="d-flex flex-column location">
                <small className="light-text">Lahore</small>
                <span className="address">106 Sector K, CCA Phase-1 DHA</span>
              </div>
              <div className="d-flex flex-column location">
                <small className="light-text">Faisalabad</small>
                <span className="address">
                  Mezzanine floor, Sitara Tower, Bilal Rd, Civil Lines
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <h5>Menu</h5>
              <ListGroup className="footerList">
                {menu.map((menuList, menuListKey) => {
                  return (
                    <Link to={menuList.link} className="footerList__link">
                      <ListGroup.Item
                        key={menuListKey}
                        as="ul"
                        className="footerList__item"
                      >
                        {menuList.title}
                      </ListGroup.Item>
                    </Link>
                  )
                })}
              </ListGroup>
            </div>
            <div className="col-md-3">
              <h5>Services</h5>
              <ListGroup className="footerList">
                {services.map((serviceList, servicesListKey) => {
                  return (
                    <Link to={serviceList.link} className="footerList__link">
                      <ListGroup.Item
                        key={servicesListKey}
                        className="footerList__item"
                      >
                        {serviceList.title}
                      </ListGroup.Item>
                    </Link>
                  )
                })}
              </ListGroup>
            </div>
            <div className="col-md-3">
              <h5>Award</h5>
              <Image src={award} alt="no-image" />
            </div>
          </div>
        </div>
        <div className="social d-flex justify-content-between ">
          <span className="small-text">
            © 2021 Qbatch. All Rights Reserved.
          </span>
          <ul className="list-unstyled socialLink  d-flex">
            <li className="socialLink__list">
              <Image src={facebook} alt="no-image" />
            </li>
            <li className="socialLink__list">
              <Image src={twitter} alt="no-image" />
            </li>
            <li className="socialLink__list">
              <Image src={instagram} alt="no-image" />
            </li>
            <li className="socialLink__list">
              <Image src={linkdin} alt="no-image" />
            </li>
          </ul>
        </div>
      </footer>
    </Container>
  )
}

export default footer
