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
import sliderImg from "../images/research/slideImg.png"
import medcertsLogo from "../images/index/medecerts.png"
import oneApp from "../images/work/oneApp.svg"
import medecertsImg from "../images/work/medcrets.png"
import ecomImg from "../images/work/ecomImg.png"
import ecomCircle from "../images/work/ecomCircle.svg"
import uratskerlogo from "../images/work/uratskerlogo.png"
import urtaskerLogo from "../images/work/urtaskerLogo.png"
import bwdWeb from "../images/work/bwdWeb.png"
import bwdLogo from "../images/work/bwdLogo.png"
import salesSupportImg from "../images/work/salesSupportImg.png"
import salesSupport from "../images/work/salesSupport.svg"
const FeaturedWork = () => {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const work = [
    {
      logo: bwdLogo,
      paragraph:
        "We offer expertise for end-to-end product design anddevelopment, with solutions tailor-made to fit your  product’s unique requirements.",
      list: [
        "User Research",
        "UI Design + Branding",
        "Content Management System",
        "Full Stack Development",
      ],
      img: bwdWeb,
      link: "/work/oneApp",
    },
    {
      logo: ecomCircle,
      paragraph:
        "We offer expertise for end-to-end product design anddevelopment, with solutions tailor-made to fit your product’s unique requirements.",
      list: [
        "User Research",
        "UI Design + Branding",
        "Content Management System",
        "Full Stack Development",
      ],
      img: ecomImg,
      link: "/work/oneApp",
    },
    {
      logo: salesSupport,
      paragraph:
        "We offer expertise for end-to-end product design anddevelopment, with solutions tailor-made to fit your product’s unique requirements.",
      list: [
        "User Research",
        "UI Design + Branding",
        "Content Management System",
        "Full Stack Development",
      ],
      img: salesSupportImg,
      link: "/work/oneApp",
    },
  ]
  return (
    <div className="slider py-75 bg-selego">
      <Container>
        <div className="text-center text-xs-left">
          <h5 className="slider-h3">Our Featured Work</h5>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {work.map((values, i) => {
            return (
              <CarouselItem key={i}>
                <Row>
                  <Col md={6}>
                    <div>
                      <Image src={values.logo} />
                      <p>{values.paragraph}</p>
                      <h5 className="mb-3 lg-hide">Areas of focus</h5>
                      <ul className="listItem">
                        {values.list.map((lists, i) => {
                          return (
                            <li className="listItem__item" key={i}>
                              {lists}
                            </li>
                          )
                        })}
                      </ul>
                      <div className="btn-batch d-flex">
                        <Button
                          variant="primary"
                          className="endeavour-button"
                          to={values.link}
                        >
                          See details
                        </Button>
                        <Button className="outline-button ml-4">
                          Portfolio
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="text-left">
                      <Figure className="imgBox">
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
