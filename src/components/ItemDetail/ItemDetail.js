import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const handleAddToCart = (quantity) => {
        // EN EL FUTURO AGREGARE FUNCIONALIDAD
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoría: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                
                <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
            </section>
        </article>
    );
}

export default ItemDetail;

