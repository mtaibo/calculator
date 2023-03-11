import React from "react";

export default function Numpad(props) {

  // Create an object with the content of .json file
  const file = require('./keys.json');

  // Create a variable to put on it the class properties
  let classString = `${file[props.value].color}`; 

  // Add the num0 tag to the class property
  if (props.value === 'zero') {
    classString += ' num0';
  };

  return (
    <button id="num" className={classString}>
      {file[props.value].name}
    </button>
  );
}