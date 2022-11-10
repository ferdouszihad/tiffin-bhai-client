import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UserReviewSingle from "../UserReviewSingle/UserReviewSingle";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../shared/UseTitle";

const UserReview = () => {
  useTitle();
  const UserReviews = useLoaderData();
  const [reviews, setReviews] = useState(UserReviews);

  console.log(reviews);
  const deleteHandler = (review_id) => {
    console.log(review_id);
    const reviewRemaining = reviews.filter(
      (review) => review._id !== review_id
    );
    setReviews(reviewRemaining);

    fetch(`https://tiffinbhai-server.vercel.app/review/${review_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Review Deleted from Database", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => console.log("error"));
  };
  return (
    <div className="my-5">
      <ToastContainer />
      <div className="container">
        <h2 className="py-3 m-2 rounded-bottom bg-warning text-center">
          User All Review
        </h2>
        {reviews.length === 0 ? (
          <p className="display-4 text-danger no-review-alert">
            No Review Added Yet
          </p>
        ) : (
          <div className="user-review-container my-5">
            {reviews.map((rs) => (
              <UserReviewSingle
                key={rs._id}
                review={rs}
                deleteHandler={deleteHandler}
              ></UserReviewSingle>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserReview;
