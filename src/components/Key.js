import React from "react";

export default function Numpad(props) {
  // Give the num0 property to 0 key
  let use = props.color;
  if (props.value === "0") {
    use = `${props.color} num0`;
  }

  return (
    <button id="num" class={use}>
      {props.value}
    </button>
  );
}
