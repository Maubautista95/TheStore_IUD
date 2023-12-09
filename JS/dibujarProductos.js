divProductos = document.querySelector('[data-div-productos]')

function dibujarProductos(){
    fetch('https://my-json-server.typicode.com/Maubautista95/DB4TheStore/Productos')
    .then(response => response.json())
    .then(data => {
        data.forEach(producto => {
            const productoBox = document.createElement('div');
            productoBox.classList.add('productos-box');

            const img = document.createElement('img');
            img.src = producto.imagenURL;
            productoBox.appendChild(img);

            const info = document.createElement('div');
            info.classList.add('productos-info');

            const p = document.createElement('p');
            p.textContent = producto.nombre;
            info.appendChild(p);

            const span = document.createElement('span');
            span.classList.add('precio');
            span.textContent = producto.precio;
            info.appendChild(span);

            productoBox.appendChild(info);

            const button = document.createElement('button');
            button.textContent = 'Add to cart';
            productoBox.appendChild(button);

            divProductos.appendChild(productoBox);
        });
    })
    .catch(error => console.error('Error:', error));
}

dibujarProductos();
