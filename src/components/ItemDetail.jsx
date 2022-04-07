import React, { useState } from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { useCartContext } from './context/CartContex'


const ItemDetail = ({ prod }) => {

  const [cont, setCont] = useState(1);
  const [show,setShow] = useState(false);
  const [showItem,setShowItem] = useState(true);

  const {addToCart, cartList} = useCartContext()

  const onAdd = (contador) => {
    setCont(contador);
    setShow(true);
    setShowItem(false);
    addToCart( { ...prod, cantidad: contador } )
  };

  console.log(cartList)
  return (
    <div>
      <img src={prod.foto} alt="" />
      <div className='container'>
        <h2>{prod.categoria}</h2>
        <p>{prod.description}</p>
        <ul>
          {showItem?<li>Precio: ${prod.price}</li>:null}
          {show?<li>Total: ${prod.price * cont}</li>:null}
          {show?<li>Has agregado {cont} cervezas 🍺</li>:null}
        </ul>
        {showItem?<ItemCount initial={1} stock={prod.count} onAdd={onAdd}/>:null}
        <Link to="/carrito">
          {show?<button type='button' visible={false}>Terminar Compra</button>:null}
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
