import Header from './components/Header'
import './assets/css/global.css'
// import CardFounders from './components/CardFounders';
// import Footer from './components/Footer';
// import Button from './components/Button';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header fundo="transparente"/>
        <Routes />
      </BrowserRouter>

      {/* <Button text="Aprenda agora!"/> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
