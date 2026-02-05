import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav.jsx"
import Footer from './components/Footer.jsx';
import Landing from './components/Landing.jsx';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Landing />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
