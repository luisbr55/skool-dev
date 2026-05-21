const frase = document.getElementById("fraseInput") as HTMLInputElement;

const cantidad = document.getElementById("cantidadInput") as HTMLInputElement;

const btnRepetir = document.getElementById("btnRepetir") as HTMLButtonElement;

const resultado = document.getElementById("resultado") as HTMLElement;


btnRepetir.addEventListener("click", () => {

for(let i = 0; i< Number(cantidad.value); i++){
    resultado.innerHTML += frase.value + "<br>";
}
})


