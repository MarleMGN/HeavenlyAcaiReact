import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav.jsx"
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Home />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
