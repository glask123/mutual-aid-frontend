import React from "react";
import Order from "./order";

export default function returning() {
  return (
    <div className="returning">
      <Order
        date="May 7th, 2021"
        status="Packing"
        name="Graydon Schulze-Kalt"
        address="3000 Coldwater Avenue, Studio City, CA"
        items={["Pencils", "Pens", "Binders"]}
        estimated="May 10th, 2021"
      />
      <Order
        date="May 7th, 2021"
        status="Packing"
        name="Graydon Schulze-Kalt"
        address="3000 Coldwater Avenue, Studio City, CA"
        items={["Pencils", "Pens", "Binders"]}
        estimated="May 10th, 2021"
      />
      <Order
        date="May 7th, 2021"
        status="Packing"
        name="Graydon Schulze-Kalt"
        address="3000 Coldwater Avenue, Studio City, CA"
        items={["Pencils", "Pens", "Binders"]}
        estimated="May 10th, 2021"
      />
    </div>
  );
}
