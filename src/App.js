
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AddingAlpha from './components/AddingAlpha';
import News from './components/News';
import About from './components/About';
import Hero from './components/Hero';
import LongAlphaA from './components/LongAlphaA';
import LognAlphaB from './components/LognAlphaB';
import IAlpha from './components/IAlpha';
import WhyEstee from './components/WhyEstee';
import Team from './components/Team';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <AddingAlpha/>
    <LongAlphaA/>
    <LognAlphaB/>
    <IAlpha/>
    <WhyEstee/>
    <Team/>
    <Contact/>
    <About/>
    <News/>
    <Footer/>
    </>
  );
}

export default App;
