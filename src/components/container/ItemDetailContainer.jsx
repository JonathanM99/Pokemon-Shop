import React, { useState, useEffect } from 'react'
import { getProductById } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail'

const ItemDetailContainer = ({id}) => {

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById(Number(id), setProducto);
  }, [id]);

  return (
    <div>
      <h2>Productos destacados</h2>
      {/* <ItemDetail prod={producto}/> */}
      {producto ? <ItemDetail item={producto} /> : <p>Obteniendo producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;
