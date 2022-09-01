import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Skill from "./Components/Skill/Skill";
import Experience from "./Components/Experience/Experience";
// import Works from "./Components/Works/Works";
import Project from "./Components/Project/Project";
import Certificate from "./Components/Certificate/Certificate";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import { useContext } from "react";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{background : darkMode? 'black':'',
            color : darkMode? 'white': ''}}>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Experience/>
      {/* <Works/> */}
      <Project/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
