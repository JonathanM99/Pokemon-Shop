import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({ prod }) => {

  const onAdd = (contador) => {
    alert(`Has agregado ${contador} cervezas 🍺`);
  };

  return (
    <div>
      <img src={prod.foto} alt=""/>
      <div>
        <h2>{prod.categoria}</h2>
        <p>{prod.description}</p>
        <ul>
          <li>Price:</li>
          <li>${prod.price}</li>
        </ul>
        <ItemCount initial={1} stock={prod.count} onAdd={onAdd}/>
      </div>
    </div>
  );
};

export default ItemDetail;
