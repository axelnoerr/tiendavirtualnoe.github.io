let carrito = [];
const productos = [
    { nombre: "Playera Negra", categoria: "playera", precio: 300 },
    { nombre: "Pantalón Jeans", categoria: "pantalon", precio: 800 },
    { nombre: "Sudadera", categoria: "playera", precio: 600 }
];

const contenedor = document.getElementById("productos");
const filtroCategoria = document.getElementById("categoria");
const filtroPrecio = document.getElementById("precio");
const valorPrecio = document.getElementById("valorPrecio");

function mostrarProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>
        `;

        contenedor.appendChild(div);
    });
}

function filtrar() {
    let filtrados = productos;

    const categoria = filtroCategoria.value;
    const precio = filtroPrecio.value;

    if (categoria !== "todos") {
        filtrados = filtrados.filter(p => p.categoria === categoria);
    }

    filtrados = filtrados.filter(p => p.precio <= precio);

    mostrarProductos(filtrados);
}

filtroCategoria.addEventListener("change", filtrar);
filtroPrecio.addEventListener("input", () => {
    valorPrecio.textContent = "$" + filtroPrecio.value;
    filtrar();
});

// Inicial
mostrarProductos(productos);
valorPrecio.textContent = "$" + filtroPrecio.value;
div.innerHTML = `
    <h3>${p.nombre}</h3>
    <p>$${p.precio}</p>
    <button onclick="agregarAlCarrito('${p.nombre}', ${p.precio})">
        Agregar al carrito
    </button>
`;
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}
function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const total = document.getElementById("total");

    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.nombre} - $${p.precio}`;
        lista.appendChild(li);
        suma += p.precio;
    });

    total.textContent = "Total: $" + suma;
}
function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    let mensaje = "Hola, quiero pedir:\n";

    carrito.forEach(p => {
        mensaje += `- ${p.nombre} ($${p.precio})\n`;
    });

    const total = carrito.reduce((acc, p) => acc + p.precio, 0);

    mensaje += `Total: $${total}`;

    const telefono = "525587201257"; // ← TU número con lada de México

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}