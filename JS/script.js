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

let productoA = {
    nombre: "Camiseta",
    stock: 10
}

function Producto(nombre, stock){
    this.nombre = nombre;
    this.stock = stock;
}

let productoB = new Producto("hoodie", 8)

let precioProductos = [70000, 90000]
let precioTotal = 0

function precio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

let contact = document.getElementById("contact")

//contact.innerText = Bienvenido + registro

console.log(contact.innerText)

let registro = prompt("Bienvenido, ingrese su nombre")

if((registro != "")&&(registro !== Number())){

    let deseoDeCompra = prompt("Bienvenido " + registro + ". Desea comprar?\n\nSI para comprar\nNO para salir")

    if(deseoDeCompra.toUpperCase() == "SI"){

        alert("Estos son nuestros productos:\n\n- Camisetas\n- Hoodies")

        let cantidadProductos = prompt("Que cantidad de productos distintos desea comprar?\n\n1\n2")

        for(let i = 0; i < cantidadProductos; i = i + 1){

        let producto = prompt("Que producto desea comprar?\n\ncamiseta\nhoodie")

            if(producto.toLowerCase() == "camiseta"){
                let cantidadProductoA = prompt("Que cantidad de " + productoA.nombre + " desea comprar?")
                    if(cantidadProductoA > productoA.stock){
                        alert("Lo sentimos, solo hay " + productoA.stock + " disponibles")
                    }
                    else{
                        precio(cantidadProductoA, precioProductos[0])
                        alert("el precio de su compra es $" + precioTotal)
                        graciasXcomprar()
                    }
            }
            else if(producto.toLowerCase() == "hoodie"){
                let cantidadProductoB = prompt("Que cantidad de " + productoB.nombre + " desea comprar?")
                    if(cantidadProductoB > productoB.stock){
                        alert("Lo sentimos, solo hay " + productoB.stock + " disponibles")
                    }
                    else{
                        let precioB = cantidadProductoB * precioProductos[1]
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
