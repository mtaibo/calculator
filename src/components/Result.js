import React from "react";

export default function Result() {
  var result = Operation(2);

  return <div id="result">{result}</div>;
}

function Operation(value) {
  if (typeof value === "number") {
    return value;
  } else {
    return value;
  }
}
