import React, { useState } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
    const value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value,
    });
  };
  const handleReset = (event) => {
    setData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Helmet>
        <title>Contact | Bricklayers Collective</title>
      </Helmet>
      <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
        <label htmlFor="fname" className="formText">
          First Name
        </label>
        <br />
        <input
          type="text"
          id="fname"
          className="forminput"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lname" className="formText">
          Last Name
        </label>
        <br />
        <input
          type="text"
          id="lname"
          className="forminput"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email" className="formText">
          Email
        </label>
        <br />
        <input
          type="text"
          id="email"
          className="forminput"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="message" className="formText">
          Message
        </label>
        <br />
        <textarea
          name="message"
          className="messagein"
          value={data.message}
          onChange={handleChange}
          required
        />
        <br />
        <div>
          <input type="submit" id="submit" className="sub" value="SEND" />
          <input type="reset" id="reset" className="sub" value="RESET" />
        </div>
      </form>
    </div>
  );
}
