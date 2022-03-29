import { useState, useEffect } from 'react'
import { getFetch, getFetchOne } from '../../helpers/getFetch'
import ItemDetail from '../../components/ItemDetail/ItemDetail'



function ItemDetailContainer({producto}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetchOne
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <ItemDetail producto={producto}/>
    )
}

export default ItemDetailContainer