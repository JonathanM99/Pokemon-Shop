import React from 'react';
import ItemCount from '../components/ItemCount'

const Item = (prod) => {
    const onAdd = (contador) => {
        alert(`Has agregado ${contador} cervezas 🍺`);
    };

    return (
        <>
            <div className="card-header">
                {prod.categoria}
            </div>
            <div className="card-body">
                <img src={prod.foto} alt='' className='w-50' />
                <p className="card-text">
                    ${prod.price}
                </p>
            </div>
            <div className="card-footer">
                <ItemCount initial={1} stock={prod.count} onAdd={onAdd}/>
            </div>
        </>
    );
};

export default Item;

{/* <article className="product-card">
<img className="card-header" src={item.thumbnail} alt="" />

<h3 className="product-card__name">{item.name}</h3>

<span className="product-card__name">${item.price}</span>

<ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
</article> */}