import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import slider from "../../../../assets/slider.jpg";

const style = {
  backgroundImage: `url(${slider})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundPositionY: "bottom",
};

const ReviewSection = () => {
  return (
    <section>
      <Carousel style={style}>
        <Carousel.Item style={{ minHeight: "450px" }}>
          <Carousel.Caption className="text-black text-start">
            <Row>
              <Col xs="12" md="6">
                <h2 className="text-cursive">What our Customer Says</h2>
                <h3>Md Jobayer Hosen</h3>
                <h1 className="text-warning">* * * * *</h1>
                <p>
                  " Lorem ipsum, dolor sit amet consectetur adipisicing elit. A aperiam cupiditate delectus neque ullam
                  culpa aliquid autem eius dignissimos voluptate! " delectus neque ullam culpa aliquid autem eius
                  dignissimos voluptate! "
                </p>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ minHeight: "450px" }}>
          <Carousel.Caption className="text-black text-start">
            <Row>
              <Col xs="12" md="6">
                <h2 className="text-cursive">What our Customer Says</h2>
                <h3>Md Jobayer Hosen</h3>
                <h1 className="text-warning">* * * * *</h1>
                <p>
                  " Lorem ipsum, dolor sit amet consectetur adipisicing elit. A aperiam cupiditate delectus neque ullam
                  culpa aliquid autem eius dignissimos voluptate! "
                </p>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ minHeight: "450px" }}>
          <Carousel.Caption className="text-black text-start">
            <Row>
              <Col xs="12" md="6">
                <h2 className="text-cursive">What our Customer Says</h2>
                <h3>Md Jobayer Hosen</h3>
                <h1 className="text-warning">* * * * *</h1>
                <p>
                  " Lorem ipsum, dolor sit amet consectetur adipisicing elit. A aperiam cupiditate delectus neque ullam
                  culpa aliquid autem eius dignissimos voluptate! "
                </p>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default ReviewSection;
