import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Categorias from './components/categorias';
import Libros from './components/libros';

function App() {
  return (
    <Router>
      <nav>
        <ul className='flex justify-between m-7'>
          <li className='hover:scale-150 transition duration-300 ease-in-out'><Link to="/categorias">Categorias</Link></li>
          <li className='hover:scale-150 transition duration-300 ease-in-out'><Link to="/libros">Libros</Link></li>

        </ul>
      </nav>

      <Routes>
        <Route path='/categorias' Component={Categorias}></Route>
        <Route path='/libros' Component={Libros}></Route>

      </Routes>
    </Router>
  );
}

export default App;
