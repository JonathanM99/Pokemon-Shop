import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Titulo from './components/title/Titulo'
import Home from './components/pages/Home'
import Pokemon from './components/pages/Pokemon'
import Error404 from './components/pages/Error404'
import Carrito from './components/pages/Carrito'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Titulo tituloProps='PokeShop - Argentina' subTit='Todo lo que necesitas para ser un entrenador pokemon.' />
      <hr />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pokemon' component={Pokemon} />
          <Route exact path='/error404' component={Error404} />
          <Route exact path='/carrito' component={Carrito} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
