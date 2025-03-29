// const {Producto} = require('./domain.js')

// const p1 = new Producto("Cocucha", 10, 1)
// console.log(p1.precioBase)
// p1.precioBase = 10
// console.log(p1.precioBase)

// const descuentoFijo = new DescuentoFijo(5)
// p1.agregarDescuento(descuentoFijo)

// console.log(p1.precioFinal())

const { Producto, DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual, Carrito } = require('./domain.js')

const descuentoFijo = new DescuentoFijo(5)
const cocaCola = new Producto("Cocucha", 10, 1)
const fideos = new Producto("Galles", 20, 1)
//cocaCola.agregarDescuento(descuentoFijo)

// console.log(cocaCola)
// console.log("El precio final es: " + cocaCola.precioFinal())

const carrito = new Carrito([cocaCola])
console.log(carrito)

// carrito.agregarProducto(cocaCola)

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