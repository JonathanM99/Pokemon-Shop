import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link to='./'>
          <img src="./logo-pokemon.png" width={100}/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-2">
              <li className="nav-item">
                <Link className="nav-link" to='./'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='./pokemon'>Pokemones</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar