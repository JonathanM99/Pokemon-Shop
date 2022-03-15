import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/nav/Navbar'
// import Home from './components/pages/Home'
// import Pokemon from './components/pages/Pokemon'


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <div id="ribbon" className="container-fluid">
              <div id="birthday" className="container w-50 px-5 rounded-lg">
                  <div className="row aling-items-center">
                      <div className="col-sm p-3 text-light text-center">
                          <p className="text-warning h3">Entrega</p>
                          <h4 className="text-shadow">MEDINA JONATHAN</h4>
                      </div>
                  </div>
              </div>
          </div>
        {/* <Switch>
          <Route path='./' exact component={Home}/>
          <Route path='./pokemon' component={Pokemon}/>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
