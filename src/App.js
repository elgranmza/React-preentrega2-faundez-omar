import React from 'react';
import NavBar from './components/NavBar/Navbar'; 
import './App.css';
import './components/CartWidget/CartWidget.css';
import './components/NavBar/NavBar.css';
import './components/ItemListContainer/ItemListContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer  greeting={'BIENVENIDOS A MI SITIO'}/>
      </header>
    </div>
  );
}

export default App;
