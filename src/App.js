import React from 'react';
import './App.css';
import Navbar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <header className="App-header bg-amber-200">
        <Navbar />
      <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
