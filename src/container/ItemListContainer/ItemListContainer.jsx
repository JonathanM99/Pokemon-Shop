import { useState, useEffect } from 'react'
import { getFetch } from '../../helpers/getFetch'


function ItemListContainer({ greeting }) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch // funcion que simula una api
            // .then(resp =>{ 
            //     //throw new Error('ESto es un error')//insatanciando un error
            //     console.log(resp)
            //     return resp
            // })
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])


    console.log(productos)
    return (
        <div>
            {greeting}<hr />
            <div className='row'>
                {loading ?
                    <h2>Cargando...</h2>
                    :
                    productos.map((producto) =>
                        // <div className='row'>
                        <div key={producto.id} className='col-sm-4'>
                            <div className="card border-primary w-100 mb-3 " >
                                <div className="card-header">
                                    {`${producto.categoria}`}
                                </div>
                                <div className="card-body">
                                    <img src={producto.foto} alt='' className='w-50' />
                                    <p className="card-text">
                                        ${producto.price}
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <button className="btn btn-outline-primary btn-block">
                                        Detalle...
                                    </button>
                                </div>
                            </div>
                        </div>
                        //</div>
                    )
                }
            </div>

        </div >
    )
}

export default ItemListContainer