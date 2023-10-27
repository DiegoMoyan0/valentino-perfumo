import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Burger from './components/Burger';
import Videos from './components/Videos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Burger />
          <NavBar />
          <Banner />
          <About />
          <Services />
          <Contact />
          <Footer />
        </Route>
        <Route path="/videos/:id" exact={true} component={Videos}>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
