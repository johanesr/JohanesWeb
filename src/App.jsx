import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Particles from 'react-particles-js';

import Social from './components/Social';
import Menu from './components/Menu'

import Home from './routes/Home';

const particlesParams = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

function App() {
  return (
    <BrowserRouter>

      <Particles
        className="particles"
        params={particlesParams}
      />
      <div className="app-wrapper">
        <Menu />

        <div className="app-route glassmorphism">
          <Switch>
            <Route exact path="/">
              <div className="App">TEST</div>
              <Home />
            </Route>
          </Switch>
        </div>

        <Social />
      </div>
    </BrowserRouter>
  );
}

export default App;
