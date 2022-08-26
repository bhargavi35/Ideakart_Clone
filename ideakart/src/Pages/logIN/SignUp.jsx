import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";

export const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, mobile, email, password, rePassword } = user;
    if (name && mobile && email && password && rePassword === password) {
      // console.log(user.name)
      // console.log(user.email)
      // console.log(user.password)
      navigate("/signIn");
    } else {
      alert("invalid input");
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ fontFamily: "Times" }}>
        <div
          style={{ textAlign: "left", marginLeft: "10%" }}
          className="divone"
        >
          <h4 style={{ fontSize: "30px" }}>Sign up</h4>
          <br />
          {console.log("User", user)}
          <div className="label">
            <label
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="label"
            >
              Name
            </label>
            <br />
            <input
              style={{
                width: "60%",
                height: "30px",
                border: "1px solid black",
              }}
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <label
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="label"
            >
              Mobile Number
            </label>
            <br />
            <input
              style={{
                width: "60%",
                height: "30px",
                border: "1px solid black",
              }}
              type="text"
              name="mobile"
              value={user.mobile}
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <label
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="label"
              htmlFor=""
            >
              Email address
            </label>
            <br />
            <input
              style={{
                width: "60%",
                height: "30px",
                border: "1px solid black",
              }}
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <label
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="label"
              htmlFor=""
            >
              Password
              <span style={{ fontStyle: "italic", fontSize: "16px" }}>
                (6 characters minimum)
              </span>
            </label>
            <br />
            <input
              style={{
                width: "60%",
                height: "30px",
                border: "1px solid black",
              }}
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <label
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="label"
              htmlFor=""
            >
              Password confirmation
            </label>
            <br />
            <input
              style={{
                width: "60%",
                height: "30px",
                border: "1px solid black",
              }}
              type="password"
              name="rePassword"
              value={user.rePassword}
              onChange={handleChange}
            ></input>
          </div>
          <div className="ticbox" style={{ display: "flex" }}></div>
          <br />
          <div
            style={{
              border: "1px solid green",
              width: "60px",
              backgroundColor: "green",
              color: "white",
              textAlign: "center",
              height: "30px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
            className="button signup"
            onClick={register}
          >
            Sign up
          </div>
          <br />
          <div
            style={{ color: "blue", cursor: "pointer" }}
            className="button log"
            onClick={() => navigate("/SignIn")}
          >
            Login
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
