import React, { useState } from "react"
import {
  Container,
  Image,
  Button,
  Carousel,
  Figure,
  CarouselItem,
  Row,
  Col,
} from "react-bootstrap"
import { Link } from "gatsby"
import BWDwebShot from "../images/work/BWDwebShot.png"
import OneAppShot from "../images/work/OneAppShot.png"
import oneAppLogo from "../images/work/oneAppLogo.svg"
import BWDLogo from "../images/work/BWDLogo.svg"
import salessupportShot from "../images/work/salessupportShot.png"
import salesSupportLogo from "../images/work/salesSupportLogo.svg"
const FeaturedWork = () => {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const work = [
    {
      logo: BWDLogo,
      paragraph:
        "We offer expertise for end-to-end product design anddevelopment, with solutions tailor-made to fit your  product’s unique requirements.",
      list: [
        "User Research",
        "UI Design + Branding",
        "Content Management System",
        "Full Stack Development",
      ],
      img: BWDwebShot,
      link: "/work/bwd",
    },
    {
      logo: oneAppLogo,

      paragraph:
        "We offer expertise for end-to-end product design anddevelopment, with solutions tailor-made to fit your product’s unique requirements.",
      list: [
        "User Research",
        "UI Design + Branding",
        "Content Management System",
        "Full Stack Development",
      ],
      img: OneAppShot,
      link: "/work/oneApp",
    },
    {
      logo: salesSupportLogo,
      paragraph:
        "We offer expertise for end-to-end product design anddevelopment, with solutions tailor-made to fit your product’s unique requirements.",
      list: [
        "User Research",
        "UI Design + Branding",
        "Content Management System",
        "Full Stack Development",
      ],
      img: salessupportShot,
      link: "/work/salesSupport",
    },
  ]
  return (
    <div className={`slider py-75 bg-selego`}>
      <Container>
        <div className={`text-center text-xs-left`}>
          <h5 className={`slider-h3`}>Our Featured Work</h5>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {work.map((values, i) => {
            return (
              <CarouselItem key={i}>
                <Row>
                  <Col md={6}>
                    <div>
                      <Image src={values.logo} className={`pb-2`} />
                      <p>{values.paragraph}</p>
                      <h5 className={`mb-3 lg-hide`}>Areas of focus</h5>
                      <ul className={`listItem`}>
                        {values.list.map((lists, i) => {
                          return (
                            <li className={`listItem__item`} key={i}>
                              {lists}
                            </li>
                          )
                        })}
                      </ul>
                      <div className={`btn-batch d-flex`}>
                        <Link to={values.link}>
                          <Button
                            variant="primary"
                            className={`endeavour-button`}
                          >
                            See details
                          </Button>
                        </Link>
                        <Link to="/work">
                          <Button className={`outline-button ml-4`}>
                            Portfolio
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={`text-left`}>
                      <Figure className={`imgBox`}>
                        <Figure.Image alt="First slide" src={values.img} />
                      </Figure>
                    </div>
                  </Col>
                </Row>
              </CarouselItem>
            )
          })}
        </Carousel>
      </Container>
    </div>
  )
}

export default FeaturedWork
