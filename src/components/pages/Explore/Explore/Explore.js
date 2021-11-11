import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import "./Explore.css";

const Explore = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <div className="explore py-5">
        <SectionTitle title="Adopt A Living Work Of Art!">
          Bonosri Bonsai has a limited number of specimen trees, hand-raised for twenty years or more by reputable
          bonsai nurseries, now under the care of our own Bonsai Master Jun Imabayashi.
        </SectionTitle>

        <div className="products">
          <Container>
            <Row>
              {featured.map((product, index) => (
                <ProductCard key={index} product={product}></ProductCard>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Explore;
