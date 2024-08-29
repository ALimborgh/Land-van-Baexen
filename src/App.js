import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import About from '../Components/About';
import News from '../Components/News';
import What from '../Components/What';
import QA from '../Components/Q&A';
import Contact from '../Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/what" element={<What />} />
          <Route path="/q&a" element={<QA />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;