import './App.css';
import About from './Components/About';
import Clients from './Components/Clients';
import Desc from './Components/Desc';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      <Desc/>
      <Clients/>
      <About/>
    </div>
  );
}

export default App;
