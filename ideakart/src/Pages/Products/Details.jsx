import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
export const Details = () => {
  const [Info, setInfo] = useState([]);

  //   https://ideakartitems.herokuapp.com/products
  // https://6300c49f290d71b581e28acd.mockapi.io/products
  useEffect(() => {
    axios
      .get("https://6300c49f290d71b581e28acd.mockapi.io/details")
      .then(({ data }) => {
        // console.log(data);

        setInfo(data);
      });
  }, []);

  return (
    <div style={{ marginBottom: "50%" }}>
      <h1 className="para">Top Reads</h1>
      <div className="Main">
        {Info.map((pro) => (
          <Link
            style={{ textDecoration: "none" }}
            key={pro.id}
            to={`/details/${pro.id}`}
          >
            <div
              style={{
                border: "1px solid grey",
                height: "550px",
                borderRadius: "3px",
              }}
            >
              <div>
                <img
                  style={{ width: "93%", height: "300px", margin: "4%" }}
                  src={pro.src}
                  alt="img1"
                />
              </div>
              <div>
                <p
                  style={{
                    textAlign: "left",
                    marginLeft: "12px",
                    color: "black",
                  }}
                >
                  {pro.name}
                </p>
                <p
                  style={{
                    textAlign: "left",
                    marginLeft: "12px",
                    color: "teal",
                  }}
                >
                  Rs. {pro.price}
                </p>
                <hr style={{ width: "90%", color: "gray" }} />
                <div style={{ margin: "20px", display: "flex" }}>
                  <span style={{ color: "blue", marginRight: "5%" }}>
                    <img
                      src="https://img.icons8.com/material-rounded/344/shopping-cart-loaded.png"
                      alt="img2"
                      style={{ width: "15px", height: "15px" }}
                    />
                    View Now
                  </span>
                  <hr
                    style={{
                      height: "30px",
                      borderRight: "1px solid #000900",
                      right: "80%",
                      color: "gray",
                    }}
                  />
                  <span style={{ color: "blue", marginLeft: "5%" }}>
                    <img
                      src="https://img.icons8.com/ios-filled/344/view-details.png"
                      alt="img3"
                      style={{ width: "15px", height: "15px" }}
                    />
                    More Details
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
