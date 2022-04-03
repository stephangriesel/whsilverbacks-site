import './App.css';
import FreshButton from './UI/Button/Button'
import SEO from './components/Seo';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      {/* TODO!! Helmet throws error, fix: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html */}
      <SEO />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
