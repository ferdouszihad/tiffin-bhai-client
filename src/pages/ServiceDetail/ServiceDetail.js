import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetail = () => {
  const service = useLoaderData();
  console.log(service);

  return (
    <div className="mt-5">
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
              Service-Charge:{" "}
              <span className="text-danger">{service.pricing} </span>
              Taka
            </p>
          </div>
        </div>
      </div>
      <div className=" container review-section my-5">
        <p className="text-danger">Review secttion Created</p>
        <h1>Check All the Review About this Service</h1>
      </div>
    </div>
  );
};

export default ServiceDetail;
