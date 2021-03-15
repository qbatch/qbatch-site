import React from "react"
import { Image, Row, Col } from "react-bootstrap"
import clutch from "../images/recognized/clutch.png"
import pasha from "../images/recognized/Pasha.png"
import upWork from "../images/recognized/Upwork.png"
const Recognized = () => {
  return (
    <Row className=" m-0">
      <Col className="col-md-6">
        <h6 className="recognized-h2">We Are Proud To Be Recognized At</h6>
      </Col>
      <Col className="col-md-6">
        <div className="d-flex flex-column">
          <div className="d-flex recognized-list">
            <div className="clutch">
              <Image src={clutch} alt="no-image" />
            </div>
            <div className="d-flex flex-column justify-content-center ml-3">
              <h6>Clutch Awards</h6>
              <small>
                Top Rated Web Developer Top Rated Mobile App Developer
              </small>
            </div>
          </div>
          <div className="d-flex recognized-list">
            <div className="clutch">
              <Image src={pasha} alt="no-image" />
            </div>
            <div className="d-flex flex-column justify-content-center ml-3">
              <h6>Pasha Recognized</h6>
              <small>Mobile and Web Development Agency In the Year 2016</small>
            </div>
          </div>
          <div className="d-flex recognized-list">
            <div className="clutch">
              <Image src={upWork} alt="no-image" />
            </div>
            <div className="d-flex flex-column justify-content-center ml-3">
              <h6>UpWork</h6>
              <small>5000+ hours, 200 Clients, 150 Projects</small>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Recognized
