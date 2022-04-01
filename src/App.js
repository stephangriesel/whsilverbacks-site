import './App.css';
import FreshButton from './UI/Button/Button'
import SEO from './components/Seo';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* TODO!! Helmet throws error, fix: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html */}
      <SEO />
      <div className="wrapper">
        <Header />
        {/* CSS Modules Button */}
        <FreshButton type="button">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </FreshButton>
      </div>
    </div>
  );
}

export default App;
