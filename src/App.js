import './App.css';
import SEO from './components/SEO/Seo';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import About from './components/About/About'
import Wrapper from './UI/Layout/Wrapper/Wrapper';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from './components/Contact/Contact';
import EventConstruction from './components/EventConstruction/EventConstruction';
import StretchTents from './components/StretchTents/StretchTents';
import TemporaryStructures from './components/TemporaryStructures/TemporaryStructures';
import Success from './components/Success/Success';
import Form from './components/Contact/Form';

function App() {
  return (
    <Router>
      <div className="App">
        {/* TODO!! Helmet throws error, fix: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html */}
        <SEO />
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/contactus">
              <Form />
            </Route>
            <Route exact path="/success">
              <Success />
            </Route>
            <Route exact path="/eventconstruction">
              <EventConstruction />
            </Route>
            <Route exact path="/stretchtents">
              <StretchTents />
            </Route>
            <Route exact path="/temporarystructures">
              <TemporaryStructures />
            </Route>
          </Switch>
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
