import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Banner.css";
import bannerImg from "../../../../assets/bonsai-store-bg2.jpg";

const Banner = () => {
  return (
    <div className="banner mb-5">
      <Container>
        <Row>
          <Col xs="12" lg="6">
            <div className="banner-left">
              <h1 className="banner-title">
                Bring Life <br /> To Any Room <br /> With An Indoor <br /> Bonsai Tree <br />
                <Button variant="outline-warning rounded-pill">Shop Now</Button>
              </h1>
            </div>
          </Col>
          <Col xs="12" lg="6">
            <div className="banner-right">
              <div className="bg-wrapper">
                <img src={bannerImg} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
