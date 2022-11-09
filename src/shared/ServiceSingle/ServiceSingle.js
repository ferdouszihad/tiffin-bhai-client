import React from "react";
import { Link } from "react-router-dom";

const ServiceSingle = ({ service }) => {
  const { name, img, description } = service;

  return (
    <div className="service-single-box card ">
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description.slice(0, 100)} ...</p>
        <Link to="#" className="btn btn-outline-warning text-dark fw-semibold">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceSingle;
