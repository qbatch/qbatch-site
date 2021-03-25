import React from "react"
import { Container, Image, Row, Col } from "react-bootstrap"
import shapeLower from "../images/services/shapeLower.png"
import shapeUpper from "../images/services/shapeUpper.png"

function workDetail(props) {
  return (
    <div>
      <div className={`bg-selago`}>
        <Image src={shapeUpper} className={`shapeUpper`} alt="no-image" />
        <Image src={shapeLower} className={`shapeLower`} alt="no-image" />
        <Container>
          <div className={`py-75`}>
            <Row className={`m-0`}>
              <Col md={7} sm={12}>
                <div className={`pt-174`}>
                  <h2 className={`color-midnight`}>{props.heading}</h2>
                  <p>{props.paragraph}</p>
                </div>
              </Col>
              <Col md={5} sm={12}>
                <Image src={props.Image} alt="no-image" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        <div className={`py-75`}>
          <h3 className={`h3-capitalize`}>{props.paraHeading}</h3>
          <p className={``}>{props.problem}</p>
        </div>
      </Container>
      <div className={`bg-selego`}>
        <Container>
          <div className={`py-75`}>
            <h3 className={`h3-capitalize`}>{props.listHeading}</h3>
            <Row>
              <Col md={6}>
                <div className={`py-50`}>
                  <h5 className={`mb-2`}>Development</h5>
                  <ul className={`workList`}>
                    {props.firstList.map((workList, workListKey) => {
                      return (
                        <li className={`workList__list`} key={workListKey}>
                          {workList}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <div className={`py-50`}>
                  <h5 className={`mb-2`}>Design</h5>
                  <ul className={`workList`}>
                    {props.secondList.map((workList, workListKey) => {
                      return (
                        <li className={`workList__list`} key={workListKey}>
                          {workList}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        <div className={`py-75`}>
          <h3 className={`h3-capitalize`}>{props.solHeading}</h3>
          <p>{props.solPara}</p>
        </div>
      </Container>
    </div>
  )
}

export default workDetail
