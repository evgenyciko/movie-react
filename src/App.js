import './App.css';
import './components/Navbar'
import Navbar from "./components/Navbar"
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
