import React from "react"
import { Link } from "gatsby"
import { Container, Image, ListGroup, Row, Col } from "react-bootstrap"
// import award from "../images/footer/award.png"
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
      link: "/career",
      title: "career",
    },
    {
      link: "/privacy",
      title: "privacy policy",
    },
    {
      link: "https://blog.qbatch.com",
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
      link: "/services/cloud",
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
        <div className={`upper`}>
          <Row className={`m-0`}>
            <Col md={4} sm={6}>
              <div className={`logo-box`}>
                <Image src={logo} alt="no-image" />
              </div>
              <div className={`d-flex flex-column location`}>
                <small className={`light-text`}>Contact</small>
                <a href="https://www.qbatch.com/" className={`mail-link`}>
                  hello@qb
                </a>
              </div>
              <div className={`d-flex flex-column location`}>
                <small className={`light-text`}>Headquarters</small>
                <span className={`address`}>
                  1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801
                </span>
              </div>
              <div className={`d-flex flex-column location`}>
                <small className={`light-text`}>Lahore</small>
                <span className={`address`}>106 Sector K, CCA Phase-1 DHA</span>
              </div>
              <div className={`d-flex flex-column location`}>
                <small className={`light-text`}>Faisalabad</small>
                <span className={`address`}>
                  Mezzanine floor, Sitara Tower, Bilal Rd, Civil Lines
                </span>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <h5>Menu</h5>
              <ListGroup className={`footerList`}>
                {menu.map((menuList, menuListKey) => {
                  return (
                    <Link
                      to={menuList.link}
                      key={menuListKey}
                      className={`footerList__link`}
                    >
                      <ListGroup.Item as="ul" className={`footerList__item`}>
                        {menuList.title}
                      </ListGroup.Item>
                    </Link>
                  )
                })}
              </ListGroup>
            </Col>
            <Col md={4} sm={6}>
              <h5>Services</h5>
              <ListGroup className={`footerList`}>
                {services.map((serviceList, servicesListKey) => {
                  return (
                    <Link
                      to={serviceList.link}
                      className={`footerList__link`}
                      key={servicesListKey}
                    >
                      <ListGroup.Item className={`footerList__item`}>
                        {serviceList.title}
                      </ListGroup.Item>
                    </Link>
                  )
                })}
              </ListGroup>
            </Col>
            {/* <div className={`col-md-3 col-sm-6">
              <h5>Award</h5>
              <Image src={award} alt="no-image" />
            </div> */}
          </Row>
        </div>
        <div className={`social d-flex justify-content-between `}>
          <span className={`small-text`}>
            © 2021 &nbsp;
            <Link to="/" className={`small-text`}>
              Qbatch
            </Link>{" "}
            All Rights Reserved.
          </span>
          <ul className={`list-unstyled socialLink  d-flex`}>
            <Link to="https://www.facebook.com/qbatch">
              <li className={`socialLink__list`}>
                <Image src={facebook} alt="no-image" />
              </li>
            </Link>
            <Link to="https://twitter.com/qbatchofficial">
              <li className={`socialLink__list`}>
                <Image src={twitter} alt="no-image" />
              </li>
            </Link>
            <Link to="https://www.instagram.com/qbatch/">
              <li className={`socialLink__list`}>
                <Image src={instagram} alt="no-image" />
              </li>
            </Link>
            <Link to="https://www.linkedin.com/company/qbatch/mycompany/">
              <li className={`socialLink__list`}>
                <Image src={linkdin} alt="no-image" />
              </li>
            </Link>
          </ul>
        </div>
      </footer>
    </Container>
  )
}

export default footer
