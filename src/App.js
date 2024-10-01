import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import About from '../src/Components/About';
import News from '../src/Components/News';
import Contact from '../src/Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;