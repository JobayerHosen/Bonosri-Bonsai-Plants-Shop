import React, { useRef, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useRouteMatch } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import ratingStar from "../../../../Lib/ratingStar";

const WriteReview = () => {
  const { user } = useAuth();
  const { path, url } = useRouteMatch();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const stars = ratingStar(rating);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    fetch("https://bonosri-bonsai.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid: user?.uid, name: user?.displayName, rating, review }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h5 className="text-muted mb-4 mt-0 p-0 fw-normal">{url}</h5>
      <div className="paper">
        <div className="paper-top">
          <h3 className="border-bottom pb-3">
            <i className="bi bi-chat-left-quote me-2"></i>
            Write a Review
          </h3>
          <div className="paper-body table-responsive">
            <Form onSubmit={handleReviewSubmit}>
              <span className="fs-2">Select Rating: </span>
              {stars.map((star, i) => (
                <i
                  onClick={() => setRating(i + 1)}
                  key={i}
                  htmlFor="star1"
                  className={`${star}  me-2 fs-1 text-warning`}
                ></i>
              ))}

              <span> ({rating})</span>

              <FloatingLabel className="my-3" controlId="floatingTextarea2" label="Write Review">
                <Form.Control
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <Button type="submit" variant="success" className="btn-green ">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteReview;
