import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item'; 
import './ItemDetail.css';

const ItemDetail = ({ name, img, category, description, price, stock }) => {
    const handleAddToCart = (quantity) => {
        console.log(`Agregado ${quantity} ${name} al carrito.`);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Categoría: {category}</p>
                <p className="Info">Descripción: {description}</p>
                <p className="Info">Precio: ${price}</p>
                <p className="Info">Stock disponible: {stock}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
            </footer>
            <Item name={name} img={img} price={price} stock={stock} />
        </article>
    );
};

export default ItemDetail;
