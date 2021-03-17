import React from "react";
import Insta from "../assets/insta.png";
import Mail from "../assets/mail.png";
import FadeIn from "react-fade-in";

export default function Splash() {
  return (
    <div className="splash">
      <FadeIn className="fade">
        <div className="splashcontainer">
          <h1 className="text title">Bricklayers Collective</h1>
          <h2 className="text comingsoon">Coming Soon</h2>
          <div className="socials">
            <a href="https://instagram.com" className="image">
              <img
                src={Insta}
                alt="Instagram"
                className="image"
                style={{ height: "100%" }}
              />
            </a>
            <a
              href="mailto:contact@bricklayerscollective.org"
              className="image"
            >
              <img
                src={Mail}
                alt="Email"
                className="image"
                style={{ height: "100%" }}
              />
            </a>
          </div>
        </div>
      </FadeIn>
      <div className="noise" />
      <p className="disclaimer">icons from icons8</p>
    </div>
  );
}
