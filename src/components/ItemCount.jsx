import React, { useState } from 'react'


function ItemCount({ initial, stock, onAdd}) {

  const [contador, setContador] = useState(initial);

  return (
    <div>
      <div>
        <p>Cantidad : {contador}</p>
        <button className="button" onClick={() => {
          if (contador > 0) {
            setContador(contador - 1)
          }
        }}>
          -
        </button>
        <button className="button" onClick={() => {
          if (contador < stock) {
            setContador(contador + 1)
          }
        }}>
          +
        </button>
        <p>MAX : {stock}</p>
      </div>
      <button
        className="btn btn-outline-primary btn-block"
        onClick={() => onAdd(contador)}
        disabled={stock === 0 ? true : null}
      >
        Añadir al Carrito
      </button>
    </div>
  )
}

export default ItemCount
