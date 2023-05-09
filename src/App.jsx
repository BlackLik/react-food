import './App.css';
import { Header, Main, Footer } from './layout';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routers';
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

function App() {
  return (
    <>
      <BrowserRouter basename='/react-food'>
        <HelmetProvider context={helmetContext}>
          <Header />
          <Main>
            <Routes />
          </Main>
          <Footer />
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
