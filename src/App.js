import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar.js';
import CartWidget from './components/CartWidget.js';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-amber-200">
        <Navbar />
        <CartWidget />
      </header>
    </div>
  );
}

export default App;
