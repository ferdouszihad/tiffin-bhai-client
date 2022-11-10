import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ msg }) => {
  const notify = () => toast(msg);
  notify();

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toast;
