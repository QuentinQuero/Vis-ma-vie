import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Home} from './pages/Home';
import {Pokemon} from './pages/Pokemon';

function App() {
  return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 className="m-4">Welcome to Pokedex</h2>
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Home</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/pokemon/:name' element={<Pokemon/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
