import React from "react";
import { Link } from "react-router-dom";
import "../../css/request.css";

export default function Request() {
  return (
    <div className="requestbody">
      <Link to="/request/new" className="request">
        Make a Request
      </Link>
      <Link to="/request/returning" className="request">
        Check Request Status
      </Link>
    </div>
  );
}
