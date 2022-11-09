import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceSingle = ({ service }) => {
  const { name, img, description, pricing } = service;

  return (
    <div className="service-single-box card ">
      <PhotoProvider>
        <PhotoView src={img}>
          <img
            src={img}
            className="card-img-top cursor-pointer"
            role="button"
            alt=""
          />
        </PhotoView>
      </PhotoProvider>
      <div className="card-body d-flex flex-column gap-3 justify-content-between">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description.slice(0, 100)} ...</p>

        <p className="card-text fw-semibold">
          Service-Charge: <span className="text-danger">{pricing} </span> Taka
        </p>

        <Link to="#" className="btn btn-outline-warning text-dark fw-semibold">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceSingle;
