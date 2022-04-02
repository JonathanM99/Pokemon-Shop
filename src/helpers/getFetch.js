import { productos } from './data'

const getById = (id, array) => array.find((el) => el.id === id);

const getProducts = new Promise(( resolve, reject )=>{
    
    let condition=true
    if (condition) {
        setTimeout(()=>{ 
            resolve(productos)
         }, 3000)
    } else {
        reject('400 not found')
        
    }
});

const getAllProductsFromDB = async (setState) => {
  try {
    const result = await getProducts;
    setState(result);
  } catch (error) {
    console.log(error);
    alert('No podemos mostrar los productos en este momento');
  }
};

const getProductById = async (id, setState) => {
    try {
      const result = await getProducts;
      setState(getById(id, result));
    } catch (error) {
      console.log(error);
    }
};

export { getAllProductsFromDB, getProductById };