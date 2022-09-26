//let nombreProducto

//nombreProducto = "camiseta"


//let deseoDeCompra = prompt("Bienvenido, desea comprar?")
//console.log(deseoDeCompra)

// for(let i = 1; i <= 10; i = i +)

let productoA = "Camiseta"
let precioProductoA = 70000
let stockProductoA = 10

let productoB = "Hoodie"
let precioProductoB = 90000
let stockProductoB = 8

let registro = prompt("Bienvenido, ingrese su nombre")

if(registro != ""){

    let deseoDeCompra = prompt("Bienvenido " + registro + ". Desea comprar?\n\nSI para comprar\nNO para salir")

    if(deseoDeCompra.toUpperCase() == "SI"){

        alert("Estos son nuestros productos:\n\n- Camisetas\n- Hoodies")

        let cantidadProductos = prompt("Que cantidad de productos distintos desea comprar?\n\n1\n2")

        for(let i = 0; i < cantidadProductos; i = i + 1){

        let producto = prompt("Que producto desea comprar?\n\ncamiseta\nhoodie")

            if(producto.toLowerCase() == "camiseta"){
                let cantidadProductoA = prompt("Que cantidad de " + productoA + " desea comprar?")
                    if(cantidadProductoA > stockProductoA){
                        alert("Lo sentimos, solo hay " + stockProductoA + " disponibles")
                    }
                    else{
                        let precioA = cantidadProductoA * precioProductoA
                        alert("el precio de su compra es $" + precioA)
                        alert("Gracias por su compra!")
                    }
            }
            else if(producto.toLowerCase() == "hoodie"){
                let cantidadProductoB = prompt("Que cantidad de " + productoB + " desea comprar?")
                    if(cantidadProductoB > stockProductoB){
                        alert("Lo sentimos, solo hay " + stockProductoB + " disponibles")
                    }
                    else{
                        let precioB = cantidadProductoB * precioProductoB
                        alert("el precio de su compra es $" + precioB)
                        alert("Gracias por su compra!")
                    }
            }
            else{
                alert("Escoja un producto valido")
            }
        }
    }
    else{
        alert("Gracias por visitarnos!")
    }
}
else{
    alert("Ingrese un nombre valido")
}
