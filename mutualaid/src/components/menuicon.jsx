import React, { useEffect, useState } from "react";
import "../css/home.css";
import "../css/rotate.css";
import { ReactComponent as Menu } from "../assets/menu.svg";

export default function MenuIcon() {
  const [state, setState] = useState({ rotate: false, dir: true });

  const handleClick = () => {
    setState({
      rotate: !state.rotate,
      dir: !state.dir,
    });
  };

  let rotateClass;
  if (state.dir) {
    rotateClass = "rotate";
  } else {
    rotateClass = "rotate-back";
  }

  return (
    <Menu
      className={state.rotate ? `menuicon ${rotateClass}` : "menuicon"}
      onClick={handleClick}
    />
  );
}
