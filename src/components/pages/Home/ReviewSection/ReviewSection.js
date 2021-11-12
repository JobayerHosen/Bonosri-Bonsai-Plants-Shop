import React, { useEffect, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import slider from "../../../../assets/slider.jpg";
import ratingStar from "../../../../Lib/ratingStar";

const style = {
  backgroundImage: `url(${slider})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundPositionY: "bottom",
};

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bonosri-bonsai.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <Carousel style={style}>
        {reviews.map((r, index) => (
          <Carousel.Item key={index} style={{ minHeight: "450px" }}>
            <Container>
              <Carousel.Caption
                style={{ top: 0, left: 0, minHeight: "400px" }}
                className="text-black position-relative pt-5 text-start"
              >
                <Row>
                  <Col xs="12">
                    <h2 className="text-center mb-5 text-cursive">What our Customer Says</h2>
                  </Col>
                  <Col xs="12" md="6">
                    <h3>{r.name}</h3>
                    <h1 className="text-warning">
                      {ratingStar(r.rating).map((star) => (
                        <i className={`${star} me-2`}></i>
                      ))}
                    </h1>
                    <p>" {r.review} "</p>
                  </Col>
                </Row>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default ReviewSection;
