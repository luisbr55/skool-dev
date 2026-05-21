const contador = document.getElementById("contador") as HTMLElement;

const boton = document.getElementById("boton-contador") as HTMLButtonElement;

boton.addEventListener("click", () => {
    
    let numActual = Number(contador.textContent);

    numActual += 2;

    contador.textContent = numActual.toString();

})