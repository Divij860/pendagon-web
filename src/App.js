import './App.css';
import About from './Components/About';
import Clients from './Components/Clients';
import Desc from './Components/Desc';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Service from './Components/Service';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <div className="App">
      <Home/>
      <Desc/>
      <Clients/>
      <About/>
      <Service/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
