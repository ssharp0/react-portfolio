import './App.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'

import Home from './pages/index'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
