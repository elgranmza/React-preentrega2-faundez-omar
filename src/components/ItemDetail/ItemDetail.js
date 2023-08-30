import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, img, category, description, price, stock }) => {
    return (
        <article className="CardItem"> 
        <header ClassName="Header">
            <h2 ClassName="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p ClassName="Info">
                Categoria: {category}
            </p>
            <p ClassName="Info">
                Descripcion: {description}
            </p>
            <p ClassName="Info">
                Precio: ${price}
            </p>
        </section>
        <footer ClassName="ItemFooter">
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ')}></ItemCount>
        </footer>
        </article>
        )
}
export default ItemDetail