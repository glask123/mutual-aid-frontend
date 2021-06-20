import React, { useState } from "react";
import "../../css/form.css";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
//import Item from "./item";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    addressline1: "",
    addressline2: "",
    addressline3: "",
    addressline4: "",
    pencils: "0",
    pens: "0",
    highlighters: "0",
    notebooks: "0",
    paperblank: "0",
    paperlined: "0",
    markers: "0",
    backpack: "0",
    pencilcase: "0",
    calculator: "0",
    folders: "0",
    sharpener: "0",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  let history = useHistory();
  const handleSubmit = (event) => {
    history.push("/request/submitted");
    event.preventDefault();
  };

  return (
    <div className="requestbody new">
      <Helmet>
        <title>Make a Request | Bricklayers Collective</title>
      </Helmet>
      <h2 style={{ marginTop: "20px", color: "#6689a1" }}>Make a Request</h2>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="name" className="label">
            Name
          </label>

          <input
            type="text"
            id="name"
            autoComplete="name"
            className="forminput"
            required
          />

          <label htmlFor="email" className="label">
            Email (if preffered method of contact)
          </label>

          <input
            type="text"
            id="email"
            autoComplete="email"
            className="forminput"
          />

          <label htmlFor="phone" className="label">
            Phone (if preffered method of contact)
          </label>

          <input
            type="text"
            id="phone"
            autoComplete="phone"
            className="forminput"
          />

          <label htmlFor="school" className="label">
            School
          </label>

          <input
            type="text"
            id="school"
            autoComplete=""
            className="forminput"
          />
        </fieldset>
        <fieldset>
          <legend>Delivery Address </legend>
          <label htmlFor="addressline1" className="label">
            Street Address
          </label>

          <input
            type="text"
            id="addressline1"
            autoComplete="address"
            className="forminput"
            required
          />

          <label htmlFor="addressline2" className="label">
            City
          </label>

          <input
            type="text"
            id="addressline2"
            autoComplete="locality"
            className="forminput"
            required
          />

          <label htmlFor="addressline3" className="label">
            Zip Code
          </label>

          <input
            type="text"
            id="addressline3"
            autoComplete="postal-code"
            className="forminput"
            required
          />

          <label htmlFor="addressline4" className="label">
            Apartment number, suite, or unit (if applicable)
          </label>

          <input type="text" id="addressline4" className="forminput" />
        </fieldset>
        <fieldset>
          <legend>Items</legend>
          <div>Use the sliders to adjust the quantity of items.</div>
          <label htmlFor="pencils" className="label">
            Boxes of Pencils
          </label>

          <input
            type="range"
            id="pencils"
            className="slider"
            min="0"
            max="5"
            step="0.1"
            value={formData.pencils}
            onChange={handleChange}
          />
          <span className="sliderlabel">{Math.floor(formData.pencils)}</span>
          <label htmlFor="pens" className="label">
            Pens
          </label>

          <input
            type="range"
            id="pens"
            className="slider"
            min="0"
            max="5"
            step="0.1"
            value={formData.pens}
            onChange={handleChange}
          />
          <span className="sliderlabel">{Math.floor(formData.pens)}</span>
          <label htmlFor="highlighters" className="label">
            Highlighters
          </label>

          <input
            type="range"
            id="highlighters"
            className="slider"
            min="0"
            max="5"
            step="0.1"
            value={formData.highlighters}
            onChange={handleChange}
          />
          <span className="sliderlabel">
            {Math.floor(formData.highlighters)}
          </span>
          <label htmlFor="notebooks" className="label">
            Notebooks
          </label>

          <input
            type="range"
            id="notebooks"
            className="slider"
            min="0"
            max="5"
            step="0.1"
            value={formData.notebooks}
            onChange={handleChange}
          />
          <span className="sliderlabel">{Math.floor(formData.notebooks)}</span>
          <label htmlFor="paperblank" className="label">
            Blank Paper
          </label>

          <input
            type="range"
            id="paperblank"
            className="slider"
            min="0"
            max="5"
            step="0.1"
            value={formData.paperblank}
            onChange={handleChange}
          />
          <span className="sliderlabel">{Math.floor(formData.paperblank)}</span>
          <label htmlFor="pencils" className="label">
            Lined Paper
          </label>

          <input
            type="range"
            id="paperlined"
            className="slider"
            min="0"
            max="5"
            step="0.1"
            value={formData.paperlined}
            onChange={handleChange}
          />
          <span className="sliderlabel">{Math.floor(formData.paperlined)}</span>
          <label htmlFor="markers" className="label">
            Markers
          </label>

          <input
            type="range"
            id="markers"
            className="slider"
            min="0"
            max="5"
            step="0.1"
            value={formData.markers}
            onChange={handleChange}
          />
          <span className="sliderlabel">{Math.floor(formData.markers)}</span>
          <label htmlFor="backpack" className="label">
            Backpacks
          </label>

          <input
            type="range"
            id="backpack"
            className="slider"
            min="0"
            max="5"
            step="0.1"
            value={formData.backpack}
            onChange={handleChange}
          />
          <span className="sliderlabel">{Math.floor(formData.backpack)}</span>
          <label htmlFor="pencilcase" className="label">
            Pencil Case
          </label>

          <input
            type="range"
            id="pencilcase"
            className="slider"
            min="0"
            max="5"
            step="0.1"
            value={formData.pencilcase}
            onChange={handleChange}
          />
          <span className="sliderlabel">{Math.floor(formData.pencilcase)}</span>
          <label htmlFor="calculator" className="label">
            Calculator
          </label>

          <input
            type="range"
            id="calculator"
            className="slider"
            min="0"
            max="5"
            step="0.1"
            value={formData.calculator}
            onChange={handleChange}
          />
          <span className="sliderlabel">{Math.floor(formData.calculator)}</span>
          <label htmlFor="folders" className="label">
            Folders
          </label>

          <input
            type="range"
            id="folders"
            className="slider"
            min="0"
            max="5"
            step="0.1"
            value={formData.folders}
            onChange={handleChange}
          />
          <span className="sliderlabel">{Math.floor(formData.folders)}</span>
          <label htmlFor="sharpener" className="label">
            Pencil Sharpeners
          </label>
          <div className="sliderinput">
            <input
              type="range"
              id="sharpener"
              className="slider"
              min="0"
              max="5"
              step="0.1"
              value={formData.sharpener}
              onChange={handleChange}
            />
            <span className="sliderlabel">
              {Math.floor(formData.sharpener)}
            </span>
          </div>
        </fieldset>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <input type="submit" value="SUBMIT" className="submit" />
          <input type="reset" value="RESET" className="submit" />
        </div>
      </form>
    </div>
  );
}
