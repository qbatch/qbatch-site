import React, { useState } from "react"
import {
  Container,
  Image,
  Button,
  Carousel,
  Figure,
  CarouselItem,
} from "react-bootstrap"
import sliderImg from "../images/research/slideImg.png"
import medcertsLogo from "../images/index/medecerts.png"
const FeaturedWork = () => {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const work = [
    {
      logo: medcertsLogo,
      paragraph:
        "We offer expertise for end-to-end product design anddevelopment, with solutions tailor-made to fit your product’s unique requirements.",
      list: [
        "User Research",
        "UI Design + Branding",
        "Content Management System",
        "Full Stack Development",
      ],
      img: sliderImg,
    },
    {
      logo: medcertsLogo,
      paragraph:
        "We offer expertise for end-to-end product design anddevelopment, with solutions tailor-made to fit your product’s unique requirements.",
      list: [
        "User Research",
        "UI Design + Branding",
        "Content Management System",
        "Full Stack Development",
      ],
      img: sliderImg,
    },
  ]
  return (
    <div className="slider">
      <Container>
        <div className="text-center">
          <h5 className="slider-h3">Our Featured Work</h5>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {work.map((values, i) => {
            return (
              <CarouselItem key={i}>
                <div className="row m-0">
                  <div className="col-md-6">
                    <div className="pl-28">
                      <Image src={values.logo} />
                      <p>{values.paragraph}</p>
                      <h5 className="mb-3">Areas of focus</h5>
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
                        <Button variant="primary" className="endeavour-button">
                          See details
                        </Button>
                        <Button className="outline-button ml-4">
                          Our Work
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-left">
                      <Figure className="imgBox">
                        <Figure.Image alt="First slide" src={values.img} />
                      </Figure>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </Carousel>
      </Container>
    </div>
  )
}

export default FeaturedWork
