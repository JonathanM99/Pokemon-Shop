import React, { useState } from 'react'


function ItemCount ({initial,stock}){  

  const [contador, setContador] = useState(initial);

  return (
    <div>
      <p>Cantidad : {contador}</p>
      <button className="button" onClick={() => {
        if (contador > 0) {
          setContador(contador -1)
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
  )
}

export default ItemCount
