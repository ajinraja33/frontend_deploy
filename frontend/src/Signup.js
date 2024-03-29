// import React from "react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import validation from "./SignupValidation";
// import validation from "./SignupValidation";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.values],
    }));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // setErrors(validation(values));
  //   setErrors(values);
  //   console.log(values);
  //   if (errors.name === "" && errors.email === "" && errors.password === "") {
  //     axios
  //       .post("https://jsonplaceholder.typicode.com/posts", values)
  //       .then((res) => navigate("/"))
  //       .catch((err) => console.log(err));
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://nodejs-updated.onrender.com/users",
        {
          headers: {
            "content-type": "text/json",
            "Access-Control-Allow-Origin":
              "https://nodejs-updated.onrender.com",
            "Access-Control-Allow-methods":
              "https://nodejs-updated.onrender.com",
            "Access-Control-Allow-Headers":
              "https://nodejs-updated.onrender.com",
          },
        },
        formData
      );
      console.log("Data posted successfully:", response.data);
      alert("successfully account created");
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error posting data:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control rounded-0"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Signup
          </button>
          <p>you are agree to your terms and policies</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
