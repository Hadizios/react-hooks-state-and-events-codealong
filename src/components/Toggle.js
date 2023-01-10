import React from "react";
import { useState } from "react";

function Toggle() {
  const [ison, setoff] = useState(false, "off");

  function handleClick() {
    setoff(!ison);
  }
  const color = ison ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {ison ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
