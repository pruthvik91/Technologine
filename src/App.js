import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Topclients from "./components/Topclients/Topclient";
import Featured from './components/Featured';
import Footer from './components/Footer';
import {Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <Featured/>
      <Skills />
     
      <Topclients/>

      <Projects />
      <Contact />
<Footer/>
    </div>
  );
}

export default App;