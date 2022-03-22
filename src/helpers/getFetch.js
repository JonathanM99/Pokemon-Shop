const productos = [
    { id: '1' ,categoria: 'Peluches', price: 37, count: 10, foto:'https://latiendapokemon.com/wp-content/uploads/2016/10/peluches_pokemon.jpg' },
    { id: '2' ,categoria: 'Disfraces', price: 27, count: 10, foto:'https://latiendapokemon.com/wp-content/uploads/2016/10/disfraces_pokemon.jpg' },
    { id: '3' ,categoria: 'Juegos', price: 40, count: 10, foto:'https://latiendapokemon.com/wp-content/uploads/2016/10/juegos_cartas_pokemon.jpg' },
    { id: '4' ,categoria: 'Zapatillas', price: 55, count: 10, foto:'https://latiendapokemon.com/wp-content/uploads/2016/10/zapatillas_pokemon.jpg' },
    { id: '5' ,categoria: 'Camisetas', price: 11, count: 10, foto:'https://latiendapokemon.com/wp-content/uploads/2016/10/camisetas_pokemon.jpg' },
    { id: '6' ,categoria: 'Calcetines', price: 19, count: 10, foto:'https://latiendapokemon.com/wp-content/uploads/2016/10/calcetines_pokemon.jpg' },
    { id: '7' ,categoria: 'Posters', price: 2, count: 10, foto:'https://latiendapokemon.com/wp-content/uploads/2016/10/posters_pokemon-1.jpg' },
    { id: '8' ,categoria: 'Tazas', price: 1, count: 10, foto:'https://latiendapokemon.com/wp-content/uploads/2016/10/tazas_pokemon.jpg' },
    { id: '9' ,categoria: 'Gorras', price: 10, count: 10, foto:'https://latiendapokemon.com/wp-content/uploads/2016/10/gorras_pokemon.jpg' }
  ]

export const getFetch = new Promise(( resolve, reject )=>{
    
    let condition=true
    if (condition) {
        setTimeout(()=>{ 
            resolve(productos)
         }, 3000)
    } else {
        reject('400 not found')
        
    }
})