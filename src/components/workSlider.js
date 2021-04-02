import { Carousel } from "bootstrap"
import React from "react"
import { Image } from "react-bootstrap"
// import Carousel from "react-elastic-carousel"
import Coverflow from "react-coverflow"
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
              <Image src={carouselImg.img} className="w-100" alt="no-image" />
            </div>
          )
        })}
      </Coverflow>
    </div>
  )
}

export default WorkSlider
