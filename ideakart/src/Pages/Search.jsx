import React from "react";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
export const Search = () => {
  return (
    <>
      <Navbar />
      <div style={{padding:"15px",margin:"10px"}}>
          <h1 style={{fontSize:"38px",fontWeight:"600"}}>Search Results for</h1>

          <div>
            <input style={{border:"1px solid black",width:"80%",boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"}} type="text" />
          </div>
          <div>
            <p style={{fontSize:"20px",textAlign:"left",marginLeft:"10%"}}>No results</p>
          </div>
        </div>
      <Footer />
    </>
  );
};
