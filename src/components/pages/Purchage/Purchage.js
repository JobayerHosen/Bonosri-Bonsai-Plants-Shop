import React, { useEffect, useState } from "react";
import { Col, Container, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import ratingStar from "../../../Lib/ratingStar";
import Navigation from "../Shared/Navigation/Navigation";
import "./Purchage.css";

const Purchage = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const stars = ratingStar(product.rating);

  const [orderData, setOrderData] = useState({ quantity: 1 });
  const total = product?.price * orderData?.quantity;

  useEffect(() => {
    fetch(`https://bonosri-bonsai.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleOnChange = (e) => {
    const newData = { ...orderData };
    newData[e.target.name] = e.target.value;
    setOrderData(newData);
    console.log(orderData);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const initialOrderData = {
      name: user?.displayName,
      uid: user?.uid,
      productId: id,
      email: user.email,
    };
    const submitData = { ...initialOrderData, ...orderData, total: orderData.quantity * product.price };
    console.log(submitData);
    e.target.reset();

    fetch("https://bonosri-bonsai.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="purchage pt-3">
        <Container>
          <Row>
            <Col xs="12" md="6">
              <div className="product-img">
                <img src={product?.img} alt="" />
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="product-details">
                <h1>{product?.title}</h1>

                <p className="text-warning">
                  {stars.map((star, index) => (
                    <i key={index} className={star}></i>
                  ))}
                  <span className="text-black"> ({product?.rating})</span>
                </p>

                <h1 className="price text-green">${product?.price}</h1>
                <hr />
                <p className="text-muted">{product.desc}</p>
                <hr />
              </div>
              <div className="order-form text-start p-3">
                <h2 className="fw-bold">Order Information</h2>
                <hr />
                <Form onSubmit={handleOrderSubmit}>
                  <Form.Group className=" mb-3" controlId="formBasicName">
                    <FloatingLabel controlId="floatingName" label="Full Name" className="mb-3">
                      <Form.Control
                        onChange={handleOnChange}
                        className="rounded-pill ps-4"
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                        placeholder="Full Name"
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className=" mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                      <Form.Control
                        onChange={handleOnChange}
                        className="rounded-pill ps-4"
                        type="email"
                        defaultValue={user.email}
                        placeholder="name@example.com"
                        disabled
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                    <FloatingLabel controlId="floatingP" label="Phone">
                      <Form.Control
                        onChange={handleOnChange}
                        className="rounded-pill ps-4"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                    <FloatingLabel controlId="floating" label="Address">
                      <Form.Control
                        onChange={handleOnChange}
                        className="rounded-pill ps-4"
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasic">
                    <FloatingLabel controlId="floating" label="Quantity">
                      <Form.Control
                        onChange={handleOnChange}
                        className="rounded-pill ps-4"
                        type="number"
                        name="quantity"
                        defaultValue="1"
                        placeholder="Quantity"
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Button
                    variant="success"
                    className="btn-green btn-cursive fw-bold rounded-pill p-3 w-100"
                    type="submit"
                  >
                    Place Order
                  </Button>
                  <hr />
                  <h1 className="text-green text-cursive">Total: $ {total}</h1>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Purchage;
