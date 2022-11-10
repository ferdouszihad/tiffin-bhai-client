import React from "react";

const AddService = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
  };
  return (
    <div className="mt-5">
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
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Give your Service a name"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Add a Perfect description for your Service"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Image url
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Insert any Image URl of your Service"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Price
                </label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="enter your Service fee"
                />
              </div>

              <button type="submit" class="btn btn-primary">
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
