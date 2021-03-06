import { useCartContext } from './context/CartContex'


function Cart() {

  const { cartList, removeCart } = useCartContext()
  return (
    <div>
      {cartList.map(prod => <li key={prod.id} > nombre: {prod.categoria} - cantidad: {prod.cantidad} </li>)}
      <button className="btn btn-outline-warning" onClick={removeCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart
