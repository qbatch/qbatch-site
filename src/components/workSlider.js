import React from "react"
import Slider from "react-slick"
import { Image } from "react-bootstrap"
import SliderBwd from "../images/work/bwd.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const WorkSlider = props => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="bg-midnight p-75">
      <Slider {...settings}>
        {props.products.map((x, i) => {
          return (
            <div key="{i}" classname="img-card">
              <Image classname="img" src={x.img} />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default WorkSlider
