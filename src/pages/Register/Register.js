import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/UserContext";
import useTitle from "../../shared/UseTitle";

const Register = () => {
  useTitle();
  const [error, setError] = useState("");
  const { createUser, setUser, googleSignIn, updateUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        toast.success("User Successfully Signed-in");
        const user = res.user;
        setUser(user);
        navigate("/home");
      })
      .catch((error) => {
        alert("Cant sign in");
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length <= 6) {
      setError("Make the password minimum 6 characters long");
    }

    createUser(email, password)
      .then((res) => {
        toast.success("User Successfully Signed-in");
        const user = res.user;
        user.displayName = name;
        updateUser({ displayName: name })
          .then(() => {
            setUser(user);
            console.log(user);
          })
          .catch((err) => console.log(err));
        form.reset();
        navigate("/home");
      })
      .catch((error) => {
        alert("User Sign-up Failed.  see log");
        console.error(error);
      });
  };
  return (
    <div>
      <div className="container my-3">
        <h1 className="bg-warning py-4 my-5  text-center rounded-2">
          Register Now
        </h1>
        <div
          className="form-container mx-auto border border-1 p-3"
          style={{ maxWidth: "420px" }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="Enter Full Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <small className="text-danger">{error}</small>
            </Form.Group>

            <Button variant="warning" type="submit" className="d-block w-100">
              Get me in
            </Button>
          </Form>
          <p className="mt-1 mb-3 ">
            Allready have a acoount?
            <Link className="text-decoration-none" to="/login">
              Login-now
            </Link>
          </p>
          <div className="d-flex justify-content-between">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline-warning text-dark "
            >
              Sign-in with
              <img
                src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png"
                alt=""
                width="35px"
                className="mx-1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
