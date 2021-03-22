import React, { useState } from "react";
import "../css/form.css";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
//import Item from "./item";

export default function RequestForm() {
  const [item1, setItem1] = useState(0);

  const handleChange = (event) => {
    setItem1(event.target.value);
  };

  let history = useHistory();
  const handleSubmit = (event) => {
    history.push("/request/submitted");
    event.preventDefault();
  };

  return (
    <div className="newrequestbody">
      <Helmet>
        <title>Make a Request | Bricklayers Collective</title>
      </Helmet>
      <h1>Make a Request</h1>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="name" className="label">
            Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            autoComplete="name"
            className="forminput"
            required
          />
          <br />
          <label htmlFor="email" className="label">
            Email (if preffered method of contact)
          </label>
          <br />
          <input
            type="text"
            id="email"
            autoComplete="email"
            className="forminput"
          />
          <br />
          <label htmlFor="phone" className="label">
            Phone (if preffered method of contact)
          </label>
          <br />
          <input
            type="text"
            id="phone"
            autoComplete="phone"
            className="forminput"
          />
          <br />
          <label htmlFor="phone" className="label">
            School
          </label>
          <br />
          <input
            type="text"
            id="phone"
            autoComplete="phone"
            className="forminput"
          />
          <br />
        </fieldset>
        <fieldset>
          <legend>Delivery Address </legend>
          <label htmlFor="address-line1" className="label">
            Street Address
          </label>
          <br />
          <input
            type="text"
            id="address-line1"
            autoComplete="address"
            className="forminput"
            required
          />
          <br />
          <label htmlFor="address-line2" className="label">
            City
          </label>
          <br />
          <input
            type="text"
            id="address-line2"
            autoComplete="locality"
            className="forminput"
            required
          />
          <br />
          <label htmlFor="address-line3" className="label">
            Zip Code
          </label>
          <br />
          <input
            type="text"
            id="address-line3"
            autoComplete="postal-code"
            className="forminput"
            required
          />
          <br />
          <label htmlFor="address-line4" className="label">
            Apartment number, suite, or unit (if applicable)
          </label>
          <br />
          <input type="text" id="address-line4" className="forminput" />
        </fieldset>
        <fieldset>
          <legend>Items</legend>
          <div>Use the sliders to adjust the quantity of items.</div>
          <label htmlFor="item1" className="label">
            Item 1
          </label>
          <br />
          <input
            type="range"
            id="item1"
            className="slider"
            min="0"
            max="5"
            step="1"
            value={item1}
            onChange={handleChange}
          />
          <span className="sliderlabel">{item1}</span>
        </fieldset>
        <input type="submit" value="submit" className="submit" />
      </form>
    </div>
  );
}
