//let nombreProducto

//nombreProducto = "camiseta"


//let deseoDeCompra = prompt("Bienvenido, desea comprar?")
//console.log(deseoDeCompra)

// for(let i = 1; i <= 10; i = i +)

function graciasXcomprar(){
    alert("Gracias por su compra " + registro + "!")
}
function graciasXvisita(){
    alert("Gracias por visitarnos " + registro + "!")
}

let productoA = "Camiseta"
let precioProductoA = 70000
let stockProductoA = 10

let productoB = "Hoodie"
let precioProductoB = 90000
let stockProductoB = 8

let registro = prompt("Bienvenido, ingrese su nombre")

if((registro != "")&&(registro !== Number())){

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
                        graciasXcomprar()
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
                        graciasXcomprar()
                    }
            }
            else{
                alert("Escoja un producto valido")
            }
        }
    }
    else{
        graciasXvisita()
    }
}
else{
    alert("Ingrese un nombre valido")
}
