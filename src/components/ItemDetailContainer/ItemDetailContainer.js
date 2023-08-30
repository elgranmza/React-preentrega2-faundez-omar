import { useState, useEffect } from "react";
import { getProductById } from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null); // Cambiado a 'product' en lugar de 'products'

    useEffect(() => {
        getProductById('1')
            .then(response => {
                setProduct(response); // Cambiado a 'setProduct'
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="ItemDetailContainer">
            {/* Cambiado el spread operator */}
            {product && <ItemDetail {...product} />} 
        </div>
    );
};

export default ItemDetailContainer;
