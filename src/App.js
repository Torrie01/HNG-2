import './index.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MoviesDetails from './Components/MoviesDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies/:id' element={<MoviesDetails />}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
