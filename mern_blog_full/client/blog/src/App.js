import './App.css';
import  React  from "react";
import Scene from './section';
import Post from './post';
import About from './about';
import Contact from './contact';
import Matha from './Header';
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    
      <body>
      <Matha/>
      <Scene/>
      <About/>
      <Post/>
      <Contact/>
    </body>
    
  
  );
}

export default App;
