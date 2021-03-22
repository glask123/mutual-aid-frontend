import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="homebody">
      <Helmet>
        <title>Login | Bricklayers Collective</title>
      </Helmet>
      <div className="nav">
        <h1>Bricklayers Collective</h1>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
        <Link to="/about">
          <h3>About</h3>
        </Link>
        <Link to="/donate">
          <h3>Donate</h3>
        </Link>
        <Link to="/request">
          <h3>Request</h3>
        </Link>
      </div>
    </div>
  );
}
