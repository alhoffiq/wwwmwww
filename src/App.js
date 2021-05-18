import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Puzzles from './pages/Puzzles';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/puzzles'>
            <Puzzles />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
