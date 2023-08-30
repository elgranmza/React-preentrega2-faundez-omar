import React from "react";
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = ({ name, img, price, stock }) => {
    const handleAddToCart = (quantity) => {
    };

    return (
        <article className="card-item">
            <div className="card-header">
                <h2 className="item-header">
                    {name}
                </h2>
            </div>
            <div>
                <img src={img} alt={name} className="item-img" />
            </div>
            <div>
                <p className="item-info">
                    Precio: ${price}
                </p>
                <p className="item-info">
                    Stock disponible: {stock}
                </p>
            </div>
            <div className="item-footer">
                <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
            </div>
        </article>
    );
};

export default Item;
