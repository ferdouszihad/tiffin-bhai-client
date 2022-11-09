import React from "react";
import { Button } from "react-bootstrap";

const Slider = () => {
  return (
    <div id="slider" className="Container">
      <div className="banner-main text-center">
        <h1 className="display-2 fw-bold ">Get the Best Tiffin Service</h1>
        <h2>with</h2>
        <h2 className="display-4 fw-semibold"> Tiffin-Bhai</h2>
        <Button variant="warning" className="btn-lg mt-5">
          See Services
        </Button>
      </div>
    </div>
  );
};

export default Slider;
