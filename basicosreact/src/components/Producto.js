import React from 'react';

const Producto = ({product}) => (
    <div>
        <p>Nombre: {product.name}</p>
        <p>Precio: ${product.precio}</p>
    </div>
);

export default Producto;
