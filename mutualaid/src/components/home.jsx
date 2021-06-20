import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="homebody">
      <Helmet>
        <title>Home | Bricklayers Collective</title>
      </Helmet>
      hello
    </div>
  );
}
