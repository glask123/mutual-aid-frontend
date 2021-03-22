import React from "react";
import { Link } from "react-router-dom";
import "../css/request.css";

export default function Request() {
  return (
    <div className="requestbody">
      <Link to="/request/new" className="request">
        <div>Make a Request</div>
      </Link>
      <Link to="/request/returning" className="request">
        <div>Check Request Status</div>
      </Link>
    </div>
  );
}
