import React from "react";
import CountUp from "react-countup";

const Success = () => {
  return (
    <div className="success-bg py-5 my-5 text-light">
      <div className="container my-5">
        <h2 className="py-3 text-center  display-2 text-uppercase">
          People Loves us
        </h2>

        <div className="success-box my-4 d-flex flex-wrap gap-4 justify-content-around ">
          <div className="success  ">
            <h1>
              <CountUp
                end={6}
                duration={1}
                delay={1}
                enableScrollSpy={true}
              ></CountUp>
            </h1>
            <h4>Services</h4>
          </div>
          <div className="success">
            <h1>
              <CountUp end={613} duration={4} enableScrollSpy={true}></CountUp>
            </h1>
            <h4>Delivery</h4>
          </div>

          <div className="success">
            <h1>
              <CountUp end={190} duration={3} enableScrollSpy={true}></CountUp>
            </h1>
            <h4>Clients</h4>
          </div>
          <div className="success">
            <h1>
              <CountUp end={967} duration={4} enableScrollSpy={true}></CountUp>
            </h1>
            <h4>Reveiws</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
