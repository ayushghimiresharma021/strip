
import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import Sidebar from './sidebar';
import Submenu from './submenu';



function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
    </div>
  );
}

export default App;
