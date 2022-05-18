import './App.css';
import SEO from './components/SEO/Seo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentPage from './components/ContentPage/ContentPage';
import Wrapper from './UI/Layout/Wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      {/* TODO!! Helmet throws error, fix: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html */}
      <SEO />
      <Wrapper>
      <Header />
      <ContentPage />
      <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
