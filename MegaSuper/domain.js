//Producto, Descuento

// function Producto(precio, nombre) {
//     this.nombre = nombre
//     this.precio = precio
// }

// let producto = new Producto(10, "Cocucha")
// producto = "asdf"
// console.log(producto)

// let p1 = "variable"
// const p2 = "constante"

class Producto {

    #precioBase

    constructor(nombre, precioBase, cantidad){
        this.nombre = nombre
        this.precioBase = precioBase
        this.cantidad = cantidad
        this.descuentos = []
    }

    agregarDescuento(nuevoDescuento) {
        this.descuentos.push(nuevoDescuento)
    }

    precioFinal() {
        const precioBaseTotal = this.#precioBase * this.cantidad
        const precioFinal = this.descuentos.reduce( //Reduce tiene la misma logica de un "Fold"
            (precioAnterior, descuento) => {
                return precioAnterior - descuento.valorDescontado(precioBaseTotal, this.cantidad)
            }, precioBaseTotal
        )
        return Math.max(0, precioFinal)
        }


// Cuando un atributo es privado para llamarlo necesito el getter y setter
    get precioBase() { //Getter
        return this.#precioBase
    }

    set precioBase(nuevoPrecio) { //Setter
        this.#precioBase = nuevoPrecio
    }
}

// const p1 = new Producto("Cocucha", 10, 1)
// console.log(p1.precioBase)



class DescuentoFijo {
    constructor(valor) {
        this.valor = valor
    }

    valorDescontado(_1, _2) {
        return this.valor
    }
}

class DescuentoPorcentual {
    constructor(porcentaje) {
        this.porcentaje = porcentaje
    }

    valorDescontado(precioBase,_) {
        return precioBase * this.porcentaje / 100
    }
}

class DescuentoPorCantidad {
    constructor(cantidadMinima, porcentaje) {
        this.cantidadMinima = cantidadMinima
        this.porcentaje = porcentaje
    }

    valorDescontado(precioBase, cantidad) {
        const vecesRepetido = Math.floor(cantidad/this.cantidadMinima)
        let valorDescontado = 0
        if(vecesRepetido >= 1) {
            valorDescontado = precioBase * (this.porcentaje /100) * vecesRepetido
        }
    
        return valorDescontado
    }
}

class Carrito {
    constructor() {
        this.productos = []
    }

    agregarProducto(unProducto) {
        this.productos.push(unProducto)
    }

    precioFinalCarrito() {
        return this.productos.reduce(
            (valorTotal, producto) => {return valorTotal + producto.precioFinal()
            }, 0
        )
    }
}

class ItemCarrito {
    constructor(producto, cantidad) {
        this.producto = producto
        this.cantidad = cantidad
    }

    precioFinal() {
        return this.producto.precioFinal()
    }
}

module.exports = {Producto, DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual, Carrito, ItemCarrito}