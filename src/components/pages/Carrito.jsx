import React from 'react'
import ItemListContainer from '../../container/ItemListContainer/ItemListContainer'


const carrito = () => {
  return (
    <div>
        <h3>
            SU CARRITO:
        </h3>
        <p>
            Verifique que los datos sean correctos.
        </p>
        <ItemListContainer
        greeting=''
      />
    </div>
  )
}

export default carrito
