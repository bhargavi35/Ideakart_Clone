import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Contactpage from "../Pages/contact/Contact";
import Home from "../Pages/Home";
import SignIn from "../Pages/logIN/SignIn";
import { SignUp } from "../Pages/logIN/SignUp";
import { PrivacyPolicy } from "../Pages/Policy/Privacy";
import { RefundPolicy } from "../Pages/Policy/Refund";
import { Search } from "../Pages/Search";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/refund" element={<RefundPolicy />} />
    </Routes>
  );
};

export default AllRoutes;
