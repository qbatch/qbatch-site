import React from "react"
import { Container, Image } from "react-bootstrap"
const ToolsList = props => {
  return (
    <div className="bg-selego py-75">
      <Container>
        <h5 className="text-center mb-4">{props.heading}</h5>
        <div className="flex-wrap d-flex justify-content-center align-items-center">
          {props.tools.map(tool => {
            return (
              <>
                <Image src={tool} alt="no-image" />
              </>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default ToolsList
