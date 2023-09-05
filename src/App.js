import React from 'react';
import NavBar from './components/NavBar/Navbar'; 
import './App.css';
import './components/CartWidget/CartWidget.css';
import './components/NavBar/NavBar.css';
import './components/ItemListContainer/ItemListContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
