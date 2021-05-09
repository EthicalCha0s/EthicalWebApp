import './App.css';
import Hero from './components/Hero'
import About from './components/About';

import { useMediaQuery } from 'react-responsive';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Hero isMobile={isTabletOrMobileDevice}></Hero>
        </Route>
        <Route exact path="/about">
          <About isMobile={isTabletOrMobileDevice}></About>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
