const card = document.querySelector("#sections-products");
const inputBusqueda = document.querySelector("#search");
const URL = "./database/products.json";
const productos = []

function obtenerProductos(){
    fetch(URL)
    .then((response)=> response.json() )
    .then((data)=> productos.push(...data) )
    .then(()=> mostrarProductos(productos) )
    .catch((error)=> console.log(error) )
};

obtenerProductos();

function cardProductos(element) {
    return `<div class="cards">
                <h2 class="img-card">${element.imagen}</h2>
                <p>${element.nombre}</p>
                <h4>${element.precio}</h4>
            </div>`
}
function mostrarProductos(){
    let productosHTML= "";
    if (productos.length > 0){
        for (let element of productos) {
            productosHTML += cardProductos(element)
        }
        card.innerHTML = productosHTML   
    }
}

inputBusqueda.addEventListener("search", ()=>{
    const resultadoBusqueda = productos.filter((producto)=> producto.nombre.includes(inputBusqueda.value) )
    console.log(resultadoBusqueda)
})



