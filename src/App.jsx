import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Logo from './assets/image.png'

function App() {
  return (
    <Router>
      <div>
        <nav >
          <img src={Logo} id='logo'/>
          <ul>
            <li><Link to="/" style={{color: "#fff", textDecoration:"none"}}>Home</Link></li>
            <li><Link to="/about" style={{color: "#fff", textDecoration:"none"}}>Sobre</Link></li>
            <li><Link to="/projects" style={{color: "#fff", textDecoration:"none"}}>Projetos</Link></li>
            <li><Link to="/contact" style={{color: "#fff", textDecoration:"none"}}>Contato</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
