
// Renderización de items para la tienda
const mostrarItems = (items) => {
    const container = document.getElementById("shop");
        items.forEach(item => {
            const seccion = document.createElement('div');
            seccion.classList.add('item-card');
            seccion.innerHTML += `
                                <div>
                                    <img src=${item.icono} alt="Foto de ${item.nombre}">
                                </div>
                                <h3>
                                    ${item.nombre}
                                </h3>
                                <article>
                                ${item.descripcion}
                                </article>
                                <div class="price">
                                    <div>
                                    $${item.precio}
                                    </div>
                                    <button  id=${item.id} class="addCart">
                                        Agregar al carrito
                                    </button>
                                </div>
                            
                            `
            container.appendChild(seccion);
            });
        };

// Renderización de contenido del carrito        

let mostrarCarrito =(cartItems) => {
    const container2 = document.getElementById("cart-content");
        cartItems.forEach(item => {
            const seccion = document.createElement('div');
            seccion.classList.add('cart-items');
            seccion.innerHTML += `
                <p>${item.nombre}</p>
                <p id=precio${item.id}>$${item.precio}</p>
                <p id=cantidad${item.id}>Cant: ${item.cantidad}</p>
                <img src="./img/bin.png" alt="Eliminar item" id=eliminar${item.id} class=delete>
                `
            container2.appendChild(seccion);
        });
        
};



