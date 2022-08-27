import React, { useState } from "react";
import { useNavigate, navigate, Link } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
export const SignIn = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    reemail: "",
    repassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var { email, password } = user;

    if (email === "" || password === "") {
      alert("please fill all fields");
    } else {
      navigate("/");
      alert("Login Successful");
    }
  };
  return (
    <>
      <Navbar />
      <div
        style={{ marginLeft: "10%", textAlign: "left", padding: "20px" }}
        className="login"
      >
        <h2 style={{ fontSize: "30px" }}>Log in</h2>
        <div className="divone">
          <form className="labell" onSubmit={handleSubmit}>
            <label style={{ fontSize: "18px", fontWeight: "600" }}>Email</label>
            &ensp;
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
            <label style={{ fontSize: "18px", fontWeight: "600" }}>
              Password
            </label>
            &ensp;
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
          </form>
          <div style={{ fontWeight: "600" }}>
            <span>
              <input type="checkbox"></input>
              <br />
            </span>
            Remember me
          </div>
          <br />
          <button
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
            className="button signin"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <br />
          <div style={{ color: "blue", cursor: "pointer" }}>
            <button
              className="button registerr"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
            <br />
            <Link to="/signin" className="button registerr">
              Forgot your Password?
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SignIn;
