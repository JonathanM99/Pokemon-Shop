
function Titulo( {tituloProps, subTit} ) {
  // const {tituloProps, subTit} = props
  // console.log(obj[0])
  return (
    <div className='titulo'> 
        <h1>{tituloProps}</h1>
        <h2> {subTit} </h2>
    </div>
  )
}

export default Titulo