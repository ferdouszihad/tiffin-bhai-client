import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useTitle from "../../shared/UseTitle";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import Success from "../Success/Success";

const Home = () => {
  useTitle();
  const navigate = useNavigate();

  return (
    <div>
      <Slider></Slider>
      <Contact></Contact>
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
