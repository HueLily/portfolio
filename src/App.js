import './App.css';
import { NavBar} from './components/NavBar';
import { Banner } from './components/Banner';
import { Qualification } from './components/Qualification';
import { Works } from './components/Works';
import { Projects } from './components/Projects';
import { Leader } from './components/Leader';
import { Contact } from './components/Contact';
import'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Qualification />
      <Works />
      <Projects />
      <Leader />
      <Contact />
    </div>
  );
}

export default App;
