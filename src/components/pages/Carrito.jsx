import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const carrito = () => {

  return (
    <div>
      <h3>
        SU CARRITO:
      </h3>
      <p>
        Verifique que los datos sean correctos.
      </p>
      <ItemCount initial={0} stock={10}/>
    </div>
  )
}

export default carrito
