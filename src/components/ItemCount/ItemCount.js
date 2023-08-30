import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 0) { // Cambiado de 'quantity > stock' a 'quantity > 0'
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button" onClick={decrement} disabled={quantity === 0}>
                    -
                </button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment} disabled={quantity === stock}>
                    +
                </button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;