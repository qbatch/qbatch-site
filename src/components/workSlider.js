// import { Carousel } from "bootstrap"
import React from "react"
import { Image } from "react-bootstrap"
import Carousel from "react-elastic-carousel"
// import Coverflow from "react-coverflow"
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
]
const WorkSlider = props => {
  return (
    <div className={`bg-midnight px-20`}>
      <Carousel breakPoints={breakPoints} pagination={false}>
        {props.products.map((carouselImg, carouselKey) => {
          return (
            <div key={carouselKey} className={`img-card`}>
              <Image className={`img`} src={carouselImg.img} />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default WorkSlider
