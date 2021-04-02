import { Carousel } from "bootstrap"
import React from "react"
import { Image } from "react-bootstrap"
// import Carousel from "react-elastic-carousel"
import Coverflow from "react-coverflow"
import OneApp1 from "../images/OneApp/OneApp1.png"
import OneApp2 from "../images/OneApp/OneApp2.png"
import OneApp3 from "../images/OneApp/OneApp3.png"
import OneApp4 from "../images/OneApp/OneApp4.png"
const WorkSlider = props => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 991, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
    { width: 1400, itemsToShow: 3 },
  ]
  return (
    <div className={`bg-midnight px-20`}>
      {/* <Carousel breakPoints={breakPoints} dots>
        {props.products.map((carouselImg, carouselKey) => {
          return (
            <div key={carouselKey} className={`img-card`}>
              <Image className={`img`} src={carouselImg.img} />
            </div>
          )
        })}
      </Carousel> */}
      <Coverflow
        height="900"
        className=""
        displayQuantityOfSide={1}
        navigation={false}
        enableScroll={true}
        clickable={true}
        active="middle"
      >
        {props.products.map((carouselImg, carouselKey) => {
          return (
            <div>
              <img src={carouselImg.img} />
            </div>
          )
        })}
      </Coverflow>
      ,
    </div>
  )
}

export default WorkSlider
