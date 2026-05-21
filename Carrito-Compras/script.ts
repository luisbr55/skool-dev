const botonesAgregar = document.querySelectorAll(".btn-agregar");

const botonCarrito = document.querySelector(
  ".btn-carrito",
) as HTMLButtonElement;

const productoCarrito = document.getElementById(
  "producto-carrito",
) as HTMLDivElement;

const carrito: { nombre: string; precio: string }[] = [];

let totalTexto = document.getElementById(
  "total-carrito",
) as HTMLParagraphElement;

let total: number = 0;

/*Boton para agregar al carrito */

botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = boton.parentElement as HTMLDivElement;

    const nombre = producto.querySelector("h3")?.textContent || "";

    const precio =
      producto.querySelector(".precio-producto")?.textContent || "";

    /*Agregando al carrito */

    carrito.push({
      nombre,
      precio,
    });

    /*Sumando los precios */

    const precioTexto =
      producto.querySelector(".precio-producto")?.textContent || "$0";

    const precioNumero = Number(precioTexto.replace("$", ""));

    total += precioNumero;

    totalTexto.textContent = `Total: $${total}`;

    /*Creando el apartado del div */

    const nuevoProducto = document.createElement("div");

    nuevoProducto.classList.add("producto-carrito");

    nuevoProducto.innerHTML = `

    <h3>${nombre}</h3>

    <p>${precio}</p>`;

    productoCarrito.appendChild(nuevoProducto);
  });
});

/*Boton para eliminar - pagar el carrito */
botonCarrito.addEventListener("click", () => {
  carrito.length = 0;

  productoCarrito.innerHTML = "";

  totalTexto.innerHTML = "Total: $0";

  total = 0;
});

/*Nuevo boton secreto */

const btnSorpresa = document.getElementById(
  "btn-sorpresa",
) as HTMLButtonElement;

const info = document.getElementById("info") as HTMLDivElement;

btnSorpresa.addEventListener("click", () => {
  info.classList.toggle("oculto");
});
