import React from 'react'

const pokemon = () => {
  return (
    <div>
      <h1>
        POKEMONES
      </h1>
    </div>
  )
}

export default pokemon

// const productos = [
//   { id: '1', categoria: 'auto', name: 'Juan', price: 30 },
//   { id: '2', categoria: 'moto', name: 'Pablo', price: 15 },
//   { id: '3', categoria: 'moto', name: 'Carlos', price: 20 },
//   { id: '4', categoria: 'auto', name: 'Diego', price: 50 }
// ]

// const task = new Promise((resolve, reject) => {
//   let condition = true
//   if (condition) {
//     setTimeout(() => {
//       resolve(productos)
//     }, 3000);
//   }
//   else {
//     reject('400 not found')
//   }
// })


// task
//   .then(resp => {
//     //throw new Error('Esto es un error')
//     console.log(resp)
//     return resp
//   })
//   .catch(err => console.log(err))
//   .then(resp => console.log(resp))
//   .finally(() => console.log('siempre al ultimo'))

//   {productos.map((prod) => <li key={prod.id}>{prod.name}</li>)}