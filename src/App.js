
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
     <Home/>
      <About></About>
      <Work></Work>
      <Testimonials></Testimonials>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
