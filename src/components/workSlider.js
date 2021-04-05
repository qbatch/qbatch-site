import { Carousel } from "bootstrap"
import React from "react"
import { Image } from "react-bootstrap"
// import Carousel from "react-elastic-carousel"
import Coverflow from "react-coverflow"
const WorkSlider = props => {
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
        height="500"
        className=""
        displayQuantityOfSide={2}
        navigation={false}
        enableScroll={false}
        clickable={true}
        active="middle"
      >
        {props.products.map((carouselImg, carouselKey) => {
          return (
            <div key={carouselKey}>
              <Image src={carouselImg.img} className="w-100" alt="no-image" />
            </div>
          )
        })}
      </Coverflow>
    </div>
  )
}

export default WorkSlider
