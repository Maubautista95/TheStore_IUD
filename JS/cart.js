const products = [

{
    name: 'Bicicleta montaña',
    image: 'https://raw.githubusercontent.com/Maubautista95/TheStore_IUD/main/Imagenes/cicla.jpg',
    price: "200",
    quantity: 2
},
{
    name: 'iPhone 7',
    image: 'https://raw.githubusercontent.com/Maubautista95/TheStore_IUD/main/Imagenes/iphone.jpeg',
    price: "200",
    quantity: 4
},
{
    name: 'Gafas de sol',
    image: 'https://raw.githubusercontent.com/Maubautista95/TheStore_IUD/main/Imagenes/gafas_de_sol.jpg',
    price: "200",
    quantity: 6
},
{
    name: 'Juego comedor',
    image: 'https://raw.githubusercontent.com/Maubautista95/TheStore_IUD/main/Imagenes/comedor.jpeg',
    price: "200",
    quantity: 1
}

]

const divCartTable = document.querySelector('[data-div-cart-table]');



function drawCartItems(){

products.forEach((elemento) =>{

    divCartTable.innerHTML += `
    <tr>
    <td><img src="${elemento.image}"</td>
    <td>${elemento.name}</td>
    <td>$${elemento.price}</td>
    <td>${elemento.quantity}</td>
    <td>${Number(elemento.price)*Number(elemento.quantity)}</td>
    </tr>
        
    `
} );
}


drawCartItems();


