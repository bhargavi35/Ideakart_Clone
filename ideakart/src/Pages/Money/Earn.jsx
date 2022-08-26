import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/Navbar";
import "./index.css";

export const Earn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("#");
  };

  return (
    <>
      <Navbar />
      <div className="Earn">
        <p>Earn Money Online | Working from Home</p>
      </div>
      <div className="mine">
        <div className="child">
          <p className="Number">1</p>
          <p className="heading">Upload Products that</p>
          <p className="heading">you have!</p>
          <br />
          <ul>
            <li className="li">Create your Account by clicking here</li>
            <li className="li">Verify your account</li>
            <li className="li">Go to Dashboard</li>
            <li className="li">
              Pick any product. For example mobile <br /> phone, or any item.
            </li>
            <li className="li">Search for it in the Database.</li>
            <li className="li">If it's available, upload a photograph.</li>
            <li className="li">Please mention the price you bought it at.</li>
          </ul>
        </div>
        <div className="child">
          <p className="Number">2</p>
          <p className="heading">Provide a brief</p>
          <p className="heading">description of how to</p>
          <p className="heading">use!</p>
          <br />
          <ul>
            <li className="li">Describe the product you just uploaded.</li>
            <li className="li">
              Mention from where you bought it, online <br /> or offline
            </li>
            <li className="li">
              A Video increases your chances of getting <br /> a product
              approved, but it is not mandatory to upload videos.
            </li>
          </ul>
        </div>
        <div className="child">
          <p className="Number">3</p>
          <p className="heading">On Approval get</p>
          <p className="heading">scratch cards and earn</p>
          <p className="heading">money!</p>
          <br />
          <ul>
            <li className="li">We will review the products you uploaded.</li>
            <li className="li">
              On approval you will get a scratch card, which can be money or
              coupon code.
            </li>
            <li className="li">
              Make sure you provide the correct bank details or UPI Id, to which
              you want the money to transfer
            </li>
          </ul>
        </div>
      </div>

      <div className="ytb">
        <iframe
          className="image"
          src="https://www.youtube.com/embed/TfQyg-DSHBo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <button className="button1" onClick={handleClick}>
        Get Started!
      </button>
      <Footer />
    </>
  );
};
