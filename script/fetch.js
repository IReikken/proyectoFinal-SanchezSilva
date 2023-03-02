// Cargar items de tienda desde archivo JSON
data = []
fetch('/data/stock.json')
    .then((resp)  => resp.json())
    .then(data => {
        mostrarItems(data)
        items = data;
    })