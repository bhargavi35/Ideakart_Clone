import React from "react";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div
        style={{
          boxSizing: "border-box",
          fontSize: "20px",
          lineHeight:"1.8",
          marginLeft: "8%",
          fontWeight: "400",
        //   marginBottom: "150px",
        //   marginTop: "30px",
          marginRight: "8%",
          textAlign: "justify",
          padding:"20px",
        //   margin:"auto"
        }}
      >
        <p>
          Ideakart is a site that gives u an idea about the book you want to
          buy.We offer a huge collection of books in diverse categories.
        </p>
        <p>
          We have a user friendly search engine and a quick delivery system.
          With this we even provide best discounts on our books. You can write
          to us for any idea or any help you need.
        </p>
        <p>
          Ideakart is a site that gives u an idea and a platform for the book
          you want. We offer a huge collection of books in diverse categories.
        </p>
        <p>
          We have a user friendly search engine and a quick delivery system.
          With this we even provide best discounts on our books. You can write
          to us for any idea or any help you need.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;
