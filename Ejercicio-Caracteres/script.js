"use strict";
const btnCalcular = document.getElementById("calcular");
const areaTexto = document.getElementById("texto");
const resultado = document.getElementById("resultado");


btnCalcular.addEventListener("click", () => {
    let total;
    total = areaTexto.value.length;
    resultado.innerHTML = total.toString();
});
