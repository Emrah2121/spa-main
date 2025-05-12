import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><a href="/">Haqqında</a></li>
            <li><a href="/portfolio">İş nümunələri</a></li>
            <li><a href="/contact">Əlaqə</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
