import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
import Loading from "../../Shared/Loading/Loading";
import Navigation from "../../Shared/Navigation/Navigation";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import "./Explore.css";

const Explore = () => {
  const { isLoading } = useAuth();
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("https://bonosri-bonsai.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
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
