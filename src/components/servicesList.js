import React from "react"
import { Image, Row, Col } from "react-bootstrap"
const servicesList = props => {
  return (
    <>
      <Row className={`justify-content-md-center m-0`}>
        {props.list.map((list, i) => {
          return (
            <Col md={3} className={`text-center`} key={i}>
              <div className={`icon-bg`}>
                <Image src={list.icon} alt="no-image" />
              </div>
              <span className={`text-center lower-text`}>{list.title}</span>
              <p className={`text-center listPara`}>{list.para}</p>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default servicesList
