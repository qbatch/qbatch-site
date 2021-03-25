import React from "react"
import { Image } from "react-bootstrap"
import Carousel from "react-elastic-carousel"

const WorkSlider = props => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 991, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
    { width: 1400, itemsToShow: 2 },
  ]
  return (
    <div className={`bg-midnight p-75`}>
      <Carousel breakPoints={breakPoints} dots>
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
