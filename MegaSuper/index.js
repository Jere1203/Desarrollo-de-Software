// const {Producto} = require('./domain.js')

// const p1 = new Producto("Cocucha", 10, 1)
// console.log(p1.precioBase)
// p1.precioBase = 10
// console.log(p1.precioBase)

// const descuentoFijo = new DescuentoFijo(5)
// p1.agregarDescuento(descuentoFijo)

// console.log(p1.precioFinal())

const { Producto, DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual, Carrito, ItemCarrito } = require('./domain.js')

const descuentoFijo = new DescuentoFijo(5)
const p1 = new Producto("Cocucha", 10, 1)
const p2 = new Producto("Galles", 20, 1)
p1.agregarDescuento(descuentoFijo)

// console.log(p1)
// console.log("El precio final es: " + p1.precioFinal())
p2.agregarDescuento(descuentoFijo)
// console.log(p2)
// console.log("El precio final es: " + p2.precioFinal())

let carrito = new Carrito()

const cocucha = new ItemCarrito(p1, 1)
const galles = new ItemCarrito(p2, 1)

// carrito.agregarProducto(p1)
// carrito.agregarProducto(p2)

carrito.agregarProducto(cocucha)
carrito.agregarProducto(galles)

console.log("El valor final del carrito es de: " + carrito.precioFinalCarrito())

console.log(carrito)


function aumentarPrecioBaseForEach(productos, monto) {
    productos.forEach(producto => {
        producto.precioBase = producto.precioBase + monto
    })
}

function precioMasAlto(productos) {
    const preciosProductos = productos.map(producto => producto.precioBase)
    return Math.max(...preciosProductos) //Como max solo toma elementos sueltos uso el '...' para desarmar la lista de precio
}

function productosMasBaratosQue(productos, monto) {
    return productos.filter(producto => producto.precioFinal() < monto)
}

function ordenarProductos(productos) {
    productos.sort((p1, p2) => p1.precioFinal() - p2.precioFinal())
}