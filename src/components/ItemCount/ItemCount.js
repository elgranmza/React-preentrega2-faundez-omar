import React, { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > initial) { 
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button" onClick={decrement} disabled={quantity === initial}>
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
