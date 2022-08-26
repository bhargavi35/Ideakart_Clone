import React from "react";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { Details } from "./Products/Details";

function Home() {
  
  return (
    <>
      <Navbar />
      <Details />
      <Footer />
    </>
  );
}

export default Home;
