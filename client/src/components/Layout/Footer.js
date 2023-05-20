import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h1 className="text-center">
          All Rights Reserved &copy; Herald College
        </h1>
        <p className="text-center mt-3">
          <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |{" "}
          <Link to="/policy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
