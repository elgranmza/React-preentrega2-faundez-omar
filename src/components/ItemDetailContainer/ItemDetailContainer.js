import React, { useState, useEffect } from "react";
import { getProductById } from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams(); 

    useEffect(() => {
        getProductById(itemId) 
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error("Error fetching product:", error);
            });
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            {product && <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;

