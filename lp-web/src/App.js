import React, { Fragment } from 'react';

import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


import './global.scss';
import './App.scss';


function App() {
  return (
    <Fragment>
      <Header />
    <main>
      <Home />
      <About />
      <Contact />
    </main>
  </Fragment>

  );
}

export default App;
