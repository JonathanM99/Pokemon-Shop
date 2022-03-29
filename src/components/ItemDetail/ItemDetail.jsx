
function ItemDetail ({producto}){  

  return (
    <div>
      <div className="card-header">
        {producto.categoria}
      </div>
      <div className="card-body">
          <img src={producto.foto} alt='' className='w-50' />
          <p className="card-text">
            {producto.price}
          </p>
      </div>
    </div>
  )
}

export default ItemDetail