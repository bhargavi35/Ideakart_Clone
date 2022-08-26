import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/Navbar";
export const SinglePage = () => {
  const [showData, setShowData] = useState([]);
  const { id } = useParams();
  // console.log(id)
  useEffect(() => {
    axios
      .get(`https://6300c49f290d71b581e28acd.mockapi.io/details/${id}`)
      .then(({ data }) => {
        setShowData(data);
        console.log(data);
      });
  }, [id]);

  const handleClick = () => {
    window.location.href = `https://www.amazon.com/s?k=${showData.name}&crid=3UL1PKPVZJYBZ&sprefix=${showData.name}%2Caps%2C564&ref=nb_sb_noss_2`;
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "4%", marginBottom: "30%" }}>
        <div className="container">
          <div id="div1">
            <div id="image">
              <img
                style={{ width: "92%", height: "93%", margin: "4%" }}
                src={showData.src}
                alt="Show Here"
              />
            </div>
            <div id="imgdata">
              <p style={{ textAlign: "left" }}>
                Buy it at <b>best price</b> from here
              </p>
              <h1 style={{ textAlign: "left" }}>
                Rs. {showData.price} &ensp; &ensp; &ensp; &ensp; &ensp;
                <button
                  style={{
                    backgroundColor: "#f0ad4e",
                    color: "white",
                    borderColor: "#f0ad4e",
                    width: "80px",
                    height: "40px",
                    border: "none",
                    fontSize: "16px",
                    paddingTop: "3%",
                  }}
                  onClick={handleClick}
                >
                  Buy Now
                </button>
              </h1>
              <h1 style={{ textAlign: "left" }}>Book Specification</h1>
              <hr />
              <p style={{ textAlign: "left" }}>
                <b>Binding</b> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
                &ensp; <span>Paperback </span>
              </p>
              <hr />
              <p style={{ textAlign: "left" }}>
                <b>Language</b> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
                <span>Hindi/English</span>
              </p>
              <hr />
              <p style={{ textAlign: "left" }}>
                <b>Number Of Pages</b>
              </p>
              <hr />
              <p style={{ textAlign: "left" }}>
                <b>Author</b>
              </p>
              <hr />
              <p style={{ textAlign: "left" }}>
                <b>Publisher</b>
              </p>
            </div>
          </div>
          <div id="div2">
            <h1>{showData.name}</h1>
            <div id="des">
              <h1 style={{ paddingLeft: "15px" }}>{showData.description1}</h1>
            </div>
            <div style={{ marginTop: "5%" }}>
              <div style={{ textAlign: "left" }}>
                <span>Store</span> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
                &ensp;&ensp; &ensp; &ensp; &ensp; &ensp;&ensp; &ensp; &ensp;
                &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;&ensp;
                &ensp;&ensp;<span>Price</span> &ensp; &ensp; &ensp; &ensp;
                &ensp; &ensp;&ensp;&ensp; &ensp; &ensp; &ensp;
                &ensp;&ensp;&ensp; &ensp; &ensp; &ensp; &ensp;&ensp;&ensp;
                &ensp;<span>Buy Now</span>
              </div>
              <hr />
              <div
                style={{
                  textAlign: "left",
                  backgroundColor: "#ebebeb",
                  height: "60px",
                  margin: "2%",
                }}
              >
                <span>Amazon, Paperback </span> &ensp; &ensp; &ensp; &ensp;
                &ensp; &ensp; &ensp;&ensp; &ensp; &ensp; &ensp; &ensp;&ensp;{" "}
                <span>{showData.price}</span> &ensp; &ensp; &ensp; &ensp; &ensp;
                &ensp; &ensp;&ensp; &ensp; &ensp; &ensp; &ensp;&ensp;&ensp;
                &ensp; &ensp; &ensp; &ensp;&ensp;&ensp; &ensp;
                <button onClick={handleClick}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
