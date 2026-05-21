"use strict";
const contador = document.getElementById("contador");
const boton = document.getElementById("boton-contador");

boton.addEventListener("click", () => {
  let numActual = Number(contador.textContent);
  numActual += 2;
  contador.textContent = numActual.toString();
});
