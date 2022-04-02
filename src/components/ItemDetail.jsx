import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({ prod }) => {

  const onAdd = (contador) => {
    alert(`Has agregado ${contador} cervezas 🍺`);
  };

  return (
    <div className="product-detail">
      <img src={prod.foto} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{prod.categoria}</h2>
        <p className="description">{prod.description}</p>
        <ul className="info-grid">
          <li>Price:</li>
          <li>${prod.price}</li>
        </ul>
        <ItemCount stock={prod.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
