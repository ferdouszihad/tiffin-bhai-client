import React from "react";
import { Button } from "react-bootstrap";

const UserReviewSingle = ({ review, deleteHandler }) => {
  console.log(review);
  const { serviceName, reviewMsg } = review;
  return (
    <div className="container">
      <div class="card border-warning mb-5">
        <div class="card-header bg-transparent fw-bold border-warning">
          {serviceName}
        </div>
        <div class="card-body text-success">
          <h5 class="card-title">{reviewMsg}</h5>
        </div>
        <div class="card-footer bg-transparent border-warning d-flex gap-3">
          <Button variant={"primary"}>Edit Review</Button>
          <Button onClick={() => deleteHandler(review._id)} variant={"danger"}>
            Delete Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserReviewSingle;
