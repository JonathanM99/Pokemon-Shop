import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CartContextProvider from './components/context/CartContex'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Pokemon from './components/pages/Pokemon'
import Detalle from './components/pages/Detalle'
import Error404 from './components/pages/Error404'
import Carrito from './components/pages/Carrito'

function App() {
  return (
    <div className="App">
      <Navbar />
      <CartContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pokemon' component={Pokemon} />
            <Route exact path='/detalle' component={Detalle} />
            <Route exact path='/error404' component={Error404} />
            <Route exact path='/carrito' component={Carrito} />
          </Switch>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
