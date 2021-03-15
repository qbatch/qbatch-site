import React from "react"
import { Container, Carousel, Image, Row, Col } from "react-bootstrap"
import victor from "../images/sliderImage/victor.png"
import Valentine from "../images/sliderImage/Valentine.png"
import Ershad from "../images/sliderImage/Ershad.png"
import Michael from "../images/sliderImage/Ershad.png"
const clientFeedback = () => {
  const clientReview = [
    {
      feedback:
        "“Hassan worked with us for 2 years and he was one of the most important members of our team. Very skillful and responsible.Highly responsible.”",
      img: victor,
      name: "Victor Simon",
      detail: "North Aware",
    },
    {
      feedback:
        "“It was fantastic working with Qbatch. They had a great eye for detail and was able to deliver the requested design with thoroughness and full quality. I look forward to hiring them again for future design work.”",
      img: Valentine,
      name: "Valentine Nwachukwu",
      detail: "Zaden Technologies",
    },
    {
      feedback:
        "“One of the most hardworking guys I have ever seen! Will definitely work with Qbatch team in the future!”",
      img: Ershad,
      name: "Ershad Anari",
      detail: "SecondBind",
    },
    {
      feedback:
        "“It has been my pleasure to work with the development team at Qbatch for the past 3 years on a number of very large and complex web applications. The attention to detail and level of communication has been superior.”",
      img: Michael,
      name: "Michael Flanagan",
      detail: "Minmax Industries",
    },
  ]
  return (
    <div className="view-sliders">
      <Container>
        <Row className="m-0">
          <Col md={12}>
            <div className="text-center">
              <h5 className="mb-4">What Clients Say About Us</h5>
              <Carousel>
                {clientReview.map((values, i) => {
                  return (
                    <Carousel.Item key={i}>
                      <p className="slider-p">{values.feedback}</p>
                      <div className="profile-box mt-50 d-flex justify-content-center ">
                        <div className="mr-3">
                          <Image src={values.img} alt="no-image" />
                        </div>
                        <div className="d-flex flex-column">
                          <h6 className="profile-title">{values.name}</h6>
                          <span className="profile-detail">
                            {values.detail}
                          </span>
                        </div>
                      </div>
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default clientFeedback
