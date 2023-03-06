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

// Funcion para obtener los datos del archivo .json

/**
  let datos;

  function obtenerDatos(callback) {
  fetch('keys.json')
    .then(response => response.json())
    .then(jsonData => {
      datos = jsonData;
      console.log(datos.key0.color)
      callback(); // llamamos a la función de retorno aquí
    });
  }

  obtenerDatos(function() {
    console.log(datos); // imprime los datos del archivo .json en la consola
  });

  // la variable "datos" se puede utilizar aquí y en cualquier otro lugar del código a partir de este punto

 **/