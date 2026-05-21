const btnGuardar = document.getElementById("btnGuardar") as HTMLButtonElement;

const btnPagar = document.getElementById("btnPagar") as HTMLButtonElement;

const resultado = document.getElementById("resultado") as HTMLElement;

const elemento = document.getElementById("inputProducto") as HTMLInputElement;

let productos: string[] = [];

btnGuardar.addEventListener("click", () => {
    productos.push(elemento.value);

    resultado.innerHTML = productos.join("<br>")

    elemento.value = "";
})

btnPagar.addEventListener("click", () =>{
    resultado.innerHTML = "Carrito pago!";
    productos = [];
})