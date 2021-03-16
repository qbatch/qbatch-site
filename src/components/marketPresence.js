import React from "react"
import { Link } from "gatsby"
import { Container, Image, Row, Col } from "react-bootstrap"
import upwork from "../images/about/upwork.png"
import Behance from "../images/about/behance.png"
import dribble from "../images/about/dribble.png"
import github from "../images/about/github.png"
import mapBg from "../images/about/mapbg.png"
function MarketPresence() {
  const market = [
    {
      title: "UpWork",
      image: upwork,
      list: ["20,000+ hours", "150+ projects", "100+ Clients"],
      link: "/",
    },
    {
      title: "Behance",
      image: Behance,
      list: [
        "50,0000+ Project views",
        "35,0000+ Appreciations",
        "200+ Projects Listed",
      ],
      link: "/",
    },
    {
      title: "Dribble",
      image: dribble,
      list: [
        "50,0000+ Project Views",
        "35,0000+ Appreciations",
        "200+ Projects Listed",
      ],
      link: "/",
    },
    {
      title: "GitHub",
      image: github,
      list: [
        "50,0000+ Project Views",
        "35,0000+ Appreciations",
        "200+ Projects Listed",
      ],
      link: "/",
    },
    {
      title: "Behance",
      image: Behance,
      list: [
        "50,0000+ Project views",
        "35,0000+ Appreciations",
        "200+ Projects Listed",
      ],
      link: "/",
    },
    {
      title: "Dribble",
      image: dribble,
      list: [
        "50,0000+ Project Views",
        "35,0000+ Appreciations",
        "200+ Projects Listed",
      ],
      link: "/",
    },
  ]
  return (
    <div className="py-75 bg-polar position-relative">
      <Image src={mapBg} alt="no-image" className="mapBg" />
      <Container>
        <h3>Our Market Presence</h3>
        <p className="w-75">
          To keep you well informed and updated regarding the progress of your
          project, we employ agile based project management, with 100% online
          cloud based tools to ensure round the clock visibility.
        </p>
        <Row className="m-0">
          {market.map((values, i) => {
            return (
              <Col md={4} key={i} to={values.link}>
                <div className="box-shadow">
                  <div className="bg-selego ">
                    <span className="d-block mb-4">{values.title}</span>
                    <Image src={values.image} alt="no-image" />
                  </div>
                  <div className="profile">
                    <ul className="list-unstyled list">
                      {values.list.map((list, index) => {
                        return <li key={index}>{list}</li>
                      })}
                    </ul>
                    <Link to={values.profile}>
                      <span className="seeProfile">See profile</span>
                    </Link>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default MarketPresence
