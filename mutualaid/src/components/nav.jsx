import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import MenuIcon from "./menuicon";
import "../css/home.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const { height, width } = useWindowDimensions();
  if (width < 700) {
    return (
      <div className="nav">
        <h1 className="menutext name">Bricklayers Collective</h1>
        <MenuIcon />
      </div>
    );
  } else {
    return (
      <div className="nav">
        <h1 className="menutext name">Bricklayers Collective</h1>
        <div className="menudiv">
          <Link to="/" className="link menutext">
            Home
          </Link>
          <Link to="/about" className="link menutext">
            About
          </Link>
          <Link to="/request" className="link menutext">
            Request
          </Link>
          <Link to="/donate" className="link menutext">
            Donate
          </Link>
          <Link to="/contact" className="link menutext">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}
