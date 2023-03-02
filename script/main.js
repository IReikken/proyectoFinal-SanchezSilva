


let cart = []

// Botón de carrito que muestra su contenido

let cart_button = document.getElementById("cart")
        cart_button.addEventListener("click", cartWindow)
            function cartWindow(){
                    document.getElementById("cart-content").style.display ="flex";
            }

// Botón "x" que oculta el contenido del carrito

let close_button = document.getElementById("close")
            close_button.addEventListener("click", cartWindow2)
            function cartWindow2 () {
                document.getElementById("cart-content").style.display ="none";
            }

let itemContainer = document.getElementById("shop")

// Definición de variables a utilizar durante la manipulación del contenido del carrito

let itemId = 0
let interior = []
let sumaCant = 0
let sumaDinero = 0
let buscador = {}
let buscadorId = 0
let counter = {}

// Funcion para agregar contenido al carrito al precionar "agregar al carrito" en un item

itemContainer.addEventListener('click', (e) => {

    if (e.target.classList.contains('addCart')) {

    itemId= e.target.id
    inCart= cart.find(item => item.id == itemId)

    // Condicional, si no hay objeto en carro lo renderiza
    if(!inCart){
        interior[0] = items.find(item => item.id == itemId)
        counter ={cantidad:1}
        interior[0] = Object.assign(counter,interior[0])
        cart.push(interior[0])
        mostrarCarrito(interior)
        saveCart(cart)
        }
    else{
            
    // Incremento de cantidad y costo si ya hay item en carrito
        buscador=(cart.find(item => item.id == itemId))
        buscadorId  = cart.indexOf(buscador)
        cart[buscadorId].cantidad++
        cart[buscadorId].precio = cart[buscadorId].precio + items[itemId].precio
        let modificador = document.getElementById(`cantidad${cart[buscadorId].id}`)
        modificador.innerText = "Cant: "+cart[buscadorId].cantidad

        modificador = document.getElementById(`precio${cart[buscadorId].id}`)
        modificador.innerText = "$"+cart[buscadorId].precio
        saveCart(cart)
        }
        
        // Actualización del costo total de items en carrito

        let monto =0
        cart.forEach(item => {
            monto = item.precio + monto 
        });

        let cartTotal = document.getElementById("cart-total")
        cartTotal.innerText = "Monto total: $"+monto

        let cantItems =0
        cart.forEach(item => {
            cantItems = item.cantidad + cantItems
        });

        // Actualizacion de cantidad en botón de carrito
        let cartCant = document.getElementById("cart_number")
        cartCant.innerText = cantItems

    }
})

    // Disminución de items del carrito al precionar boton de contenedor de basura
let itemRemove = document.getElementById("cart-content")

itemRemove.addEventListener('click', (e) => {

    // Si queda mas de un item solo resta cantidad y precio
    if (e.target.classList.contains("delete")){
        let deleteId= e.target.id
        itemId = deleteId.slice(-1)
        buscador=(cart.find(item => item.id == itemId))
        buscadorId  = cart.indexOf(buscador)
        if(cart[buscadorId].cantidad > 1){
            
            cart[buscadorId].cantidad--
            cart[buscadorId].precio = cart[buscadorId].precio - items[itemId].precio
            
            let modificador = document.getElementById(`cantidad${cart[buscadorId].id}`)
            modificador.innerText = "Cant: "+cart[buscadorId].cantidad
            modificador = document.getElementById(`precio${cart[buscadorId].id}`)
            modificador.innerText = "$"+cart[buscadorId].precio
            saveCart(cart)
        }
    // Se remueve item del carrito cuando su cantidad es 0
        else
        {
            let limpiar = document.getElementsByClassName("cart-items")
            let selector = document.getElementsByClassName("delete")
            let sel = "eliminar"+itemId
            console.log(selector)

            for(let i=0; i < cart.length; i++){
                if (selector[i].id==sel){
                    limpiar[i].remove()
                }
            }
            cart.splice(buscadorId,1)
            saveCart(cart)
        }

        // Actualización del costo total de items en carrito

        let monto =0
        cart.forEach(item => {
            monto = item.precio + monto 
        });

        let cartTotal = document.getElementById("cart-total")
        cartTotal.innerText = "Monto total: $"+monto


        let cantItems =0
        cart.forEach(item => {
            cantItems = item.cantidad + cantItems
        });

        let cartCant = document.getElementById("cart_number")
        cartCant.innerText = cantItems

        console.log(cart)

    } 

})

//Funcion de guardado de carrito

const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
};

//Funcion de obtención de carrito

const getCart = () => {
    const cartData = JSON.parse(localStorage.getItem('cart'))
    return cartData
};

// Cargado de carrito si hay en el localStorage

const loadCart = () => {
    if (localStorage.getItem('cart')) {
        cart = getCart()

        let monto =0
        cart.forEach(item => {
            monto = item.precio + monto 
        });

        let cartTotal = document.getElementById("cart-total")
        cartTotal.innerText = "Monto total: $"+monto

        let cantItems =0
        cart.forEach(item => {
            cantItems = item.cantidad + cantItems
        });

        let cartCant = document.getElementById("cart_number")
        cartCant.innerText = cantItems
        
        mostrarCarrito(cart)
    }
};      

loadCart()





// Alerta de compra de carrito con sweetAlert2

const btnbuy = document.querySelector('#cart-buy')
btnbuy.addEventListener('click', () => {
    
    let total = 0
    cart.forEach(item => {
        total = item.precio + total
    });

    if(total>0){
        
        Swal.fire({
            title: 'Favor de pagar $'+total+' para finalizar su compra',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    else
// Alerta carrito vacío
    Swal.fire({
        title: 'Favor de agregar algún producto al carrito',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })

})

