import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './components/NavBar';
import  Banner  from './components/Banner';
import  Services  from './components/Services';
import  About from './components/About';
import  Contact from './components/Contact';
import  Footer from './components/Footer';
import  Burger from './components/Burger';

function App() {
  return (
    <div className="App">
      <Burger />
      <NavBar />
      <Banner />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
