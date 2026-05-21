"use strict";
const btnGuardar = document.getElementById("btnGuardar");
const btnPagar = document.getElementById("btnPagar");
const resultado = document.getElementById("resultado");
const elemento = document.getElementById("inputProducto");

let productos = [];

btnGuardar.addEventListener("click", () => {
    productos.push(elemento.value);
    resultado.innerHTML = productos.join("<br>");
    elemento.value = "";
});
btnPagar.addEventListener("click", () => {
    resultado.innerHTML = "Carrito pago!";
    productos = [];
});
