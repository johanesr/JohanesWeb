import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';

const Particles = React.lazy(() => import('react-particles-js'));

const Social = React.lazy(() => import('./components/Social'));
const Menu = React.lazy(() => import('./components/Menu'));
const Home = React.lazy(() => import('./routes/Home'));

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
    <Suspense fallback={<div>Loading...</div>}>
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
                <Home />
              </Route>
              <Route path="/about">
                TEST
              </Route>
            </Switch>
          </div>

          <Social />
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
