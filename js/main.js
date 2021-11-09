carrito = []

const container_productos = document.querySelector('.container_products');
const btn_carrito = document.querySelector('.btn_carrito');
const cart = document.querySelector('.cart');

const restarProducto = (e) => {
    let item = e.target.getAttribute('id_product') 
    carrito.splice(parseInt(carrito.indexOf(item)),1)
    mostrarCarito();
}

const eliminarProducto = (e) => {
    let item = e.target.getAttribute('id_product');
    
    carrito = carrito.filter((id_producto) => {
        return id_producto !== item;
    });

    mostrarCarito();
}

const mostartProductos = () => {
    productos.forEach(items => {
        const card_producto = document.createElement('div');
        const nombre_producto = document.createElement('h2');
        const precio_producto = document.createElement('p');
        const btn_agregar_carrito = document.createElement('button');
        const div_image = document.createElement('div')
        const image_card = document.createElement('img')
        const card_main = document.createElement('div')
        
        nombre_producto.textContent = items.nombre
        precio_producto.textContent = items.precio
        div_image.classList.add('card_imagen')
        image_card.setAttribute('src',items.imge)
        card_main.classList.add('card-main')
        

        btn_agregar_carrito.setAttribute('id_product', items.id)        
        btn_agregar_carrito.textContent = 'Comprar';
        card_producto.classList.add('card');
        btn_agregar_carrito.classList.add('button');
        btn_agregar_carrito.addEventListener('click', agregarCarrito);

        card_producto.appendChild(nombre_producto)
        card_producto.appendChild(card_main)
        
        
        
        card_producto.appendChild(precio_producto)
        
        
        card_producto.appendChild(div_image)
        div_image.appendChild(image_card)
        container_productos.appendChild(card_producto)
        card_producto.appendChild(btn_agregar_carrito)
        /*main.appendChild(card_producto)*/

    });
}

const mostrarCarito = () => {
    cart.innerHTML = ''
    let lista = [...new Set(carrito)]; 
    
    lista.forEach(item => {
        const todos_productos = productos.filter(productos => {
            return productos.id === parseInt(item);
        })

        let cont = 0;

        for(let id of carrito) {
            if(id === item) {
                cont++;
            }
        }
        const card_producto_cart = document.createElement('div');
        const name = document.createElement('p');
        const price = document.createElement('p');
        
        const contador = document.createElement('p');
        const btn_suma = document.createElement('button');
        const btn_resta = document.createElement('button');
        const btn_eliminar = document.createElement('button');
        
        btn_suma.setAttribute('id_product', todos_productos[0].id);
        btn_resta.setAttribute('id_product',todos_productos[0].id);
        btn_eliminar.setAttribute('id_product',todos_productos[0].id);

        name.textContent = todos_productos[0].nombre;
        price.textContent = todos_productos[0].precio;
        btn_suma.textContent = '+';
        btn_resta.textContent = '-'
        btn_eliminar.textContent = 'X';
        
        contador.textContent = cont;

        card_producto_cart.classList.add('card_producto')
        card_producto_cart.appendChild(name);
        
        card_producto_cart.appendChild(price);
        card_producto_cart.appendChild(contador)
        card_producto_cart.appendChild(btn_suma);
        card_producto_cart.appendChild(btn_resta);
        card_producto_cart.appendChild(btn_eliminar)

        btn_suma.addEventListener('click', agregarCarrito);
        btn_resta.addEventListener('click', restarProducto);
        btn_eliminar.addEventListener('click', eliminarProducto)
        
        
        
        cart.appendChild(card_producto_cart);
    })
}

const agregarCarrito = (e) => {
    carrito.push(e.target.getAttribute('id_product'));
    mostrarCarito();
}

mostartProductos();

btn_carrito.addEventListener('click', () => {
    cart.classList.toggle('ocult');
})