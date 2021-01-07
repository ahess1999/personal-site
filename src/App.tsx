import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import { AnimatePresence } from 'framer-motion'
import Projects from "./Pages/Projects";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Startpage from './Pages/Startpage';

function App() {
  let location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/projects' component={Projects}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/' component={Startpage}/>
        </Switch>
    </AnimatePresence>
  );
}

export default App;
