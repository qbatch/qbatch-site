import React from "react"
import { Image } from "react-bootstrap"
const ToolsList = props => {
  return (
    <>
      <h5 className="text-center mb-4">{props.heading}</h5>
      <div className="flex-wrap d-flex justify-content-center align-items-center">
        {props.tools.map(tool => {
          return (
            <>
              <Image className="tools-images" src={tool} alt="no-image" />
            </>
          )
        })}
      </div>
    </>
  )
}

export default ToolsList
