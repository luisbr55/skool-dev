const btnCalcular = document.getElementById("calcular") as HTMLButtonElement;

const areaTexto = document.getElementById("texto") as HTMLTextAreaElement;

const resultado = document.getElementById("resultado") as HTMLElement;

btnCalcular.addEventListener("click", ()=>{
    let total: number;

    total = areaTexto.value.length;

    resultado.innerHTML = total.toString();
});