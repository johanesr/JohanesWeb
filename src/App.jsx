import React, { useState, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';

const Particles = React.lazy(() => import('react-particles-js'));

const Social = React.lazy(() => import('./components/Social'));
const Menu = React.lazy(() => import('./components/Menu'));
const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));
const Portfolio = React.lazy(() => import('./routes/Portfolio'));
const Contact = React.lazy(() => import('./routes/Contact'));

const MyContext = React.createContext();

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
  const [theme, setTheme] = useState(true); //if true then light theme else dark
  const onChangeTheme = () => {
    setTheme(!theme);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <MyContext.Provider isMobile={window.innerWidth<=990}/>
        <Particles
          className={theme ? "particles" : "dark-particles"}
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
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>

          <Social changeTheme={onChangeTheme} curTheme={theme}/>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
