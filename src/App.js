import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Home} from './components/Home';
import {Pokemons} from './components/Pokemons';

function App() {
  return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 className="m-4">Welcome to Epitech</h2>
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/pokemon'} className="nav-link">Pokemons</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/pokemon' element={<Pokemons/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
