import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import Success from "../Success/Success";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Slider></Slider>
      <div className="services">
        <Services></Services>

        <Button
          onClick={() => navigate("/services")}
          variant="outline-warning d-block mx-auto text-dark fw-bold text-uppercase"
        >
          see all services
        </Button>
      </div>
      <Success></Success>
    </div>
  );
};

export default Home;
