import React from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../../shared/Loading";
import ServiceSingle from "../../shared/ServiceSingle/ServiceSingle";
import useTitle from "../../shared/UseTitle";

const Services = () => {
  useTitle();
  const services = useLoaderData();
  //   console.log(services);

  if (!services) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-5">
      <div className="container">
        <h2 className="py-3 m-2 rounded-2 bg-warning text-center">
          Our Services
        </h2>
        <div className="services-container my-5">
          {services.map((service) => (
            <ServiceSingle key={service._id} service={service}></ServiceSingle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
