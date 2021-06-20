import React from "react";
import "../../css/request.css";

export default function Order({
  date,
  status,
  name,
  address,
  items,
  estimated,
}) {
  return (
    <div className="order">
      <div className="order-section">
        <h1>Order on {date}</h1>
        <h2>Current Status: {status}</h2>
        <h3>Estimated Delivery on {estimated}</h3>
      </div>
      <div className="order-section">
        <p>{name}</p>
        <p>{address}</p>
      </div>
      <div className="order-section">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}
