
let cart = []
let cart_button = document.getElementById("cart")
        cart_button.addEventListener("click", cartWindow)
            function cartWindow(){
                    document.getElementById("cart-content").style.display ="flex";
            }

let close_button = document.getElementById("close")
            close_button.addEventListener("click", cartWindow2)
            function cartWindow2 () {
                document.getElementById("cart-content").style.display ="none";
            }

let itemContainer = document.getElementById("shop")

let itemId = 0
let interior = []
let sumaCant = 0
let sumaDinero = 0
let buscador = {}
let buscadorId = 0
let counter = {}

itemContainer.addEventListener('click', (e) => {

    if (e.target.classList.contains('addCart')) {

    itemId= e.target.id
    inCart= cart.find(item => item.id == itemId)
    if(!inCart){
        interior[0] = items.find(item => item.id == itemId)
        counter ={cantidad:1}
        interior[0] = Object.assign(counter,interior[0])
        cart.push(interior[0])
        mostrarCarrito(interior)
        }
        else{
            
            buscador=(cart.find(item => item.id == itemId))
            buscadorId  = cart.indexOf(buscador)
            cart[buscadorId].cantidad++
            cart[buscadorId].precio = cart[buscadorId].precio + items[itemId].precio
            let modificador = document.getElementById(`cantidad${cart[buscadorId].id}`)
            modificador.innerText = "Cant: "+cart[buscadorId].cantidad

            modificador = document.getElementById(`precio${cart[buscadorId].id}`)
            modificador.innerText = "$"+cart[buscadorId].precio

        }
        
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


let itemRemove = document.getElementById("cart-content")

itemRemove.addEventListener('click', (e) => {

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
            
        }

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
        }

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