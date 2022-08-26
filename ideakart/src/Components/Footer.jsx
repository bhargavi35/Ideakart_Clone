import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      style={{
        display: "grid",
        marginTop: "4%",
        textAlign: "left",
        marginLeft: "10%",
      }}
    >
      <p> Get To Know Us</p>
      <Link style={{ textDecoration: "none", color: "#337ab7" }} to="/about">
        <li>About</li>
      </Link>
      <Link style={{ textDecoration: "none", color: "#337ab7" }} to="/contact">
        <li>Contact</li>
      </Link>
      <Link style={{ textDecoration: "none", color: "#337ab7" }} to="/search">
        <li>Search</li>
      </Link>

      <Link style={{ textDecoration: "none", color: "#337ab7" }} to="/privacy">
        <li>Privacy Policy</li>
      </Link>
      <Link style={{ textDecoration: "none", color: "#337ab7" }} to="/refund">
        <li>Refund Policy</li>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "#337ab7" }}
        // target="_blank"
        to="/earn"
      >
        <li>Earn Money Online</li>
      </Link>
    </div>
  );
};
