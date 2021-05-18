import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Puzzles from './pages/Puzzles';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Route exact path='/' component={Home} />
        <Route exact path='/puzzles' component={Puzzles} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
