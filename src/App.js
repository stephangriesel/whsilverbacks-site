import './App.css';
import SEO from './components/SEO/Seo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

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
