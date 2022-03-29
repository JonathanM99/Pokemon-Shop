import { useState, useEffect } from 'react'
import { getFetch } from '../../helpers/getFetch'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemCount from '../../components/ItemCount/ItemCount'



function ItemListContainer({ greeting }) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch 
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {greeting}<hr />
            <div className='row'>
                {loading ?
                    <h2>Cargando...</h2>
                    :
                    productos.map((producto) =>
                        <div key={producto.id} className='col-sm-4'>
                            <div className="card border-primary w-100 mb-3 " >
                                {/* <ItemDetail producto={producto}/> */}
                                <ItemDetailContainer producto={producto}/>
                                <ItemCount initial={0} stock={producto.count}/>
                                <div className="card-footer">
                                    <button className="btn btn-outline-primary btn-block">
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div >
    )
}

export default ItemListContainer