// Cargar items de tienda desde archivo JSON
fetch('/data/stock.json')
    .then((resp)  => resp.json())
    .then(data => {
        mostrarItems(data)
    })