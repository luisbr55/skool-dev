"use strict";
const frase = document.getElementById("fraseInput");
const cantidad = document.getElementById("cantidadInput");
const btnRepetir = document.getElementById("btnRepetir");
const resultado = document.getElementById("resultado");

btnRepetir.addEventListener("click", () => {
  for (let i = 0; i < Number(cantidad.value); i++) {
    resultado.innerHTML += frase.value + "<br>";
  }
});
