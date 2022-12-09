import './App.css';
// import Axios from 'axios';
// import { useEffect, useState } from 'react';
import './components/navbar'
import Navbar from "./components/navbar"
import Home from "./components/home"
import Content from './components/content';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Content />
    </>
  );
}

export default App;
