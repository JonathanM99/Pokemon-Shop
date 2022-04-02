import React, { useState, useEffect } from 'react'
import { getAllProductsFromDB } from '../helpers/getFetch'
import Item from './Item'

const ItemList = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getAllProductsFromDB(setProductos);
    }, []);

    return (
        <div>
            <hr />
            <div className='row'>
                {productos.length ? (
                    <>
                        {productos.map((producto) =>
                            <div key={producto.id} className='col-sm-4'>
                                <div className="card border-primary w-100 mb-3 " >
                                    <Item
                                        categoria={producto.categoria}
                                        price={producto.price}
                                        count={producto.count}
                                        foto={producto.foto}
                                    />
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <p>Cargando productos...</p>
                )}
            </div>

        </div >
    )
}

export default ItemList
