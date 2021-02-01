import React, { useState } from "react"
import { Container, Image, Button, Carousel, Figure } from "react-bootstrap"
import medcerts from "../images/medcerts.png"
import sliderImg from "../images/research/slideImg.png"
import medcertsLogo from "../images/index/medecerts.png"
const FeaturedWork = () => {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <div>
      <div className="slider">
        <Container>
          <div className="text-center">
            <h3 className="slider-h3">Our Featured Work</h3>
          </div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className="row m-0">
                <div className="col-md-6">
                  <div className="pl-28">
                    <Image src={medcertsLogo} />
                    <p>
                      We offer expertise for end-to-end product design and
                      development, with solutions tailor-made to fit your
                      product’s unique requirements.
                    </p>
                    <h3 className="mb-3">Areas of focus</h3>
                    <ul className="listItem">
                      <li className="listItem__item">User Research</li>
                      <li className="listItem__item">User Research</li>
                      <li className="listItem__item">UI Design + Branding</li>
                      <li className="listItem__item">
                        Content Management System
                      </li>
                      <li className="listItem__item">Full Stack Development</li>
                    </ul>
                    <div className="btn-batch d-flex">
                      <Button variant="primary" className="endeavour-button">
                        See details
                      </Button>
                      <Button className="outline-button ml-4">Our Work</Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-left">
                    <Figure className="imgBox">
                      <Figure.Image alt="First slide" src={sliderImg} />
                    </Figure>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row m-0">
                <div className="col-md-6">
                  <div className="pl-28">
                    <Image src={medcertsLogo} />
                    <p>
                      We offer expertise for end-to-end product design and
                      development, with solutions tailor-made to fit your
                      product’s unique requirements.
                    </p>
                    <h3 className="mb-3">Areas of focus</h3>
                    <ul className="listItem">
                      <li className="listItem__item">User Research</li>
                      <li className="listItem__item">User Research</li>
                      <li className="listItem__item">UI Design + Branding</li>
                      <li className="listItem__item">
                        Content Management System
                      </li>
                      <li className="listItem__item">Full Stack Development</li>
                    </ul>
                    <div className="btn-batch d-flex">
                      <Button variant="primary" className="endeavour-button">
                        See details
                      </Button>
                      <Button className="outline-button ml-4">Our Work</Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-left">
                    <Figure className="imgBox">
                      <Figure.Image alt="First slide" src={sliderImg} />
                    </Figure>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row m-0">
                <div className="col-md-6">
                  <div className="pl-28">
                    <Image src={medcertsLogo} />
                    <p>
                      We offer expertise for end-to-end product design and
                      development, with solutions tailor-made to fit your
                      product’s unique requirements.
                    </p>
                    <h3 className="mb-3">Areas of focus</h3>
                    <ul className="listItem">
                      <li className="listItem__item">User Research</li>
                      <li className="listItem__item">User Research</li>
                      <li className="listItem__item">UI Design + Branding</li>
                      <li className="listItem__item">
                        Content Management System
                      </li>
                      <li className="listItem__item">Full Stack Development</li>
                    </ul>
                    <div className="btn-batch d-flex">
                      <Button variant="primary" className="endeavour-button">
                        See details
                      </Button>
                      <Button className="outline-button ml-4">Our Work</Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-left">
                    <Figure className="imgBox">
                      <Figure.Image alt="First slide" src={sliderImg} />
                    </Figure>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </div>
  )
}

export default FeaturedWork
