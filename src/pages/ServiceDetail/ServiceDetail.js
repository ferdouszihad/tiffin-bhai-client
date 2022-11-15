import React, { useContext, useState } from "react";

import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import ReviewSingle from "../ReviewSingle/ReviewSingle";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../shared/UseTitle";

const ServiceDetail = () => {
  useTitle();
  const { user } = useContext(AuthContext);
  const { service, reviews } = useLoaderData();
  const [serviceReviews, setServiceReviews] = useState(reviews);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewMsg = form.review.value;

    const review = {
      serviceId: service._id,
      serviceName: service.name,
      userId: user.uid,
      userName: user.displayName ? user.displayName : user.email,
      userImg: user.photoURL
        ? user.photoURL
        : "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/2-Boy-256.png",
      reviewMsg: reviewMsg,
    };

    console.log(review);

    fetch("https://tiffinbhai-server.vercel.app/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServiceReviews([review, ...serviceReviews]);

        toast.success("Your Review Added SuccessFully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        form.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-5">
      <ToastContainer />
      <div className="container service-section">
        <h4 className="display-4 border-5 ps-3 mb-5 border-start border-primary">
          {service.name}
        </h4>
        <div className="detail-box d-flex flex-column flex-md-row gap-5 mt-4">
          <div className="img-thumb" style={{ minWidth: "40%" }}>
            <img src={service.img} alt="" className="rounded-5 w-100 h-100" />
          </div>
          <div className="detail">
            <h4>Description</h4>
            <p>{service.description}</p>
            <hr className="my-3" />
            <h4>Pricing</h4>
            <p>
              <span className="text-danger">{service.pricing} </span>
              Taka
            </p>
          </div>
        </div>
      </div>
      <div className=" container review-section my-5">
        <h4 className="fw-bold bg-warning  py-3 fst-italic border-start border-primary border-5 ps-3">
          Review secttion
        </h4>
        <div className="">
          {user && user.uid ? (
            <div className="container mt-4">
              <div className="add-review-form-container">
                <div>
                  <h4 className="border-start border-5 border-primary ps-4 mb-5">
                    Add a Review for the Service
                  </h4>

                  <form onSubmit={handleSubmit} className="w-75">
                    <div className="mb-3">
                      <textarea
                        name="review"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Add a Perfect Review for the Service"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Add review
                    </button>
                    <hr />
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="mb-5">
                Want to Give a Review??Please{" "}
                <Link className="btn btn-primary" to="../login">
                  Login
                </Link>{" "}
              </h3>
              <hr />
            </div>
          )}
        </div>
        <h2>Check All the Review About this Service</h2>
        {serviceReviews.length ? (
          <div className="review-container">
            {serviceReviews.map((review) => (
              <ReviewSingle key={review._id} review={review}></ReviewSingle>
            ))}
          </div>
        ) : (
          <p className="text-danger mb-5">No Reviews added yet</p>
        )}
        <hr />
      </div>
    </div>
  );
};

export default ServiceDetail;
