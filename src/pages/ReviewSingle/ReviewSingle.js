import React from "react";

const ReviewSingle = ({ review }) => {
  const { reviewMsg, userName, userImg } = review;

  return (
    <div className="mt-3 mb-5">
      <div class="card">
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{reviewMsg}</p>
            <div className="user-info d-flex align-items-center">
              <div className="user-img">
                <img
                  src={userImg}
                  alt=""
                  className="rounded-circle border border-3 border-warning"
                  style={{ maxWidth: "50px" }}
                />
              </div>
              <footer class="blockquote-footer mb-0 mt-2 ms-2 d-flex align-items-center">
                <cite title="Source Title">{userName}</cite>
              </footer>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default ReviewSingle;
