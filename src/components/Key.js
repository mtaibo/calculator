import React from "react";

export default function Numpad(props) {

  const file = require('./keys.json');

  let classString = `${file[props.value].color}`; 

  if (props.value === 'zero') {
    classString += ` num0`;
  };

  return (
    <button id="num" className={classString}>
      {file[props.value].name}
    </button>
  );
}