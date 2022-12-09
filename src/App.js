import './App.css';
import './components/Navbar'
import NavbarAtas from './components/Navbar';
import Home from "./components/home"
import Content from './components/content';

function App() {
  return (
    <>
      <NavbarAtas />
      <Home />
      <Content />
    </>
  );
}

export default App;
