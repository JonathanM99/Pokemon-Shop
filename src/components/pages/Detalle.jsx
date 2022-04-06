import React from 'react'
// import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../container/ItemDetailContainer'

const Detalle = () => {
  // let { id } = useParams();

  return (
    <div>
      <ItemDetailContainer id={3} />
    </div>
  )
}

export default Detalle
