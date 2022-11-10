import React from "react";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../shared/UseTitle";

const AddService = () => {
  useTitle();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.ServiceName.value;
    const image = form.image.value;
    const desc = form.desc.value;
    const pricing = form.pricing.value;

    const service = {
      id: parseInt(Math.random() * 100),
      name: name,
      img: image,
      description: desc,
      pricing: pricing,
      review: 0,
      sell: 0,
    };
    //console.log(service);

    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("New Service Added", {
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
      <div className="container mt-4">
        <h2 className="bg-warning py-4 my-5  text-center  rounded-bottom">
          Add a Service
        </h2>
        <div className="add-service-form-container">
          <div>
            <h2 className="border-start border-5 border-primary ps-4 mb-5">
              Add Service
            </h2>{" "}
            <hr />
            <form onSubmit={handleSubmit} className="w-75">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="ServiceName"
                  className="form-control"
                  placeholder="Give your Service a name"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  name="desc"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Add a Perfect description for your Service"
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Image url
                </label>
                <input
                  type="text"
                  name="image"
                  className="form-control"
                  placeholder="Insert any Image URl of your Service"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Price
                </label>
                <input
                  name="pricing"
                  type="number"
                  className="form-control"
                  placeholder="enter your Service fee"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
