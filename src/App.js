import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';

function App() {
  return (

    <Router>
      <div>
        <nav>
          <Link to='/'>
            Home
          </Link>
          <br />
          <Link to='/about'>
            About
          </Link>
          <br />
          <Link to='/contact'>
            Contact
          </Link>
          <br />
          <Link to='/portfolio'>
            Portfolio
          </Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <h1>HOME PAGE</h1>
          </Route>
          <Route path='/about'> 
            <About />
          </Route>
          <Route path='/contact'> 
            <Contact />
          </Route>
          <Route path='/portfolio'> 
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
