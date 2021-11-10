import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import bg from "../../../../assets/home.jpg";
import { NavLink } from "react-router-dom";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section>
      <Container>
        <Row className="py-5">
          <Col className="d-flex justify-content-start align-items-center" xs="12" md="5">
            <div className="about-left bg-gr p-3">
              <img src={bg} alt="" />
            </div>
          </Col>
          <Col xs="12" md="7">
            <div className="about-right text-start">
              <SectionTitle title="About Bonosri Bonsai">
                It all started in 2001, when my wife gave me a bonsai for my birthday. With a little online research and
                a single book, I was able to keep this first tree alive. Turns out that with proper care, bonsai trees
                aren't too difficult to keep alive. I'm happy to report that this first tree is still alive and
                flourishing today, thank you very much. As I became more courageous, I decided it was time to prune my
                tree. I knew from online research and books that I should use official bonsai shears. But when I went
                online and started searching for bonsai tools, I was shocked by
                <br />
                <br />
                <NavLink to="/about">
                  <Button variant="warning" className="rounded-pill btn-cursive">
                    Learn More
                  </Button>
                </NavLink>
              </SectionTitle>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
