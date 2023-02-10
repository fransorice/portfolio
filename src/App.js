import '../src/Styles/App.scss';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import NavBar from './components/NavBar';
import Proyectos from './components/Proyectos';
import Skills from './components/Skills';
import SobreMi from './components/SobreMi';

function App() {
  return (
    <>
      <NavBar/>
      <Inicio/>
      <SobreMi/>
      <Skills/>
      <Proyectos/>
      <ContactMe/>
      <Footer/>
    </>
  );
}

export default App;
