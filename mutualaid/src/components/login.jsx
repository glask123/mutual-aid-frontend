import React from "react";
import "../css/login.css";
import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <div className="login">
      <Helmet>
        <title>Login | Bricklayers Collective</title>
      </Helmet>
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" autoComplete="email" id="email" />
          <br />
          <label htmlFor="pass">Password</label>
          <br />
          <input type="password" id="pass" />
        </form>
      </div>
    </div>
  );
}
