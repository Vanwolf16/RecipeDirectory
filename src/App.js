import logo from './logo.svg';
import './App.css';

// page components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/recipes' element={<Recipe />}/>
      </Routes>
      
    </div>
  );
}

export default App;
