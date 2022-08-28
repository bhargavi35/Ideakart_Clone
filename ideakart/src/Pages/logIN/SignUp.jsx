// import {
//   Button,
//   Container,
//   Input,
//   Stack,
//   Heading,
//   Text,
// } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Container, Input,Text } from "@chakra-ui/react";

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
      navigate("/signin");
    } else {
      alert("invalid Input");
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
          {console.log("User", user)}
          <div className="label">
            <Text
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="label"
            >
              Name
            </Text>
            <br />
            <Input
              style={{
                width: "60%",
                height: "30px",
                border: "1px solid black",
              }}
              type="text"
              name="name"
              onChange={handleChange}
            ></Input>
            <br />
            <br />
            <Text
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="label"
            >
              Mobile Number
            </Text>
            <br />
            <Input
              style={{
                width: "60%",
                height: "30px",
                border: "1px solid black",
              }}
              type="text"
              name="mobile"
              onChange={handleChange}
            ></Input>
            <br />
            <br />
            <Text
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="label"
              htmlFor=""
            >
              Email address
            </Text>
            <br />
            <Input
              style={{
                width: "60%",
                height: "30px",
                border: "1px solid black",
              }}
              type="text"
              name="email"
              onChange={handleChange}
            ></Input>
            <br />
            <br />
            <Text
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="label"
              htmlFor=""
            >
              Password
              <span style={{ fontStyle: "italic", fontSize: "16px" }}>
                (6 characters minimum)
              </span>
            </Text>
            <br />
            <Input
              style={{
                width: "60%",
                height: "30px",
                border: "1px solid black",
              }}
              type="password"
              name="password"
              onChange={handleChange}
            ></Input>
            <br />
            <br />
            <Text
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="label"
              htmlFor=""
            >
              Password confirmation
            </Text>
            <br />
            <Input
              style={{
                width: "60%",
                height: "30px",
                border: "1px solid black",
              }}
              type="password"
              name="rePassword"
              onChange={handleChange}
            ></Input>
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
            onClick={() => navigate("/signin")}
          >
            Login
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
