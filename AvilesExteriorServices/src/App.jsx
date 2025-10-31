import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CallButton from './components/CallButton';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Service1 from './pages/Service1';
import Service2 from './pages/Service2';
import Service3 from './pages/Service3';
import LawnCare from './pages/LawnCare';
import Landscaping from './pages/Landscaping';
import Trimming from './pages/Trimming';
import HouseWashing from './pages/HouseWashing';
import YardMaintenance from './pages/YardMaintenance';
import TreeTrimming from './pages/TreeTrimming';
import LandClearing from './pages/LandClearing';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/service-1" element={<Service1 />} />
            <Route path="/services/service-2" element={<Service2 />} />
            <Route path="/services/service-3" element={<Service3 />} />
            <Route path="/services/lawn-care" element={<LawnCare />} />
            <Route path="/services/landscaping" element={<Landscaping />} />
            <Route path="/services/trimming" element={<Trimming />} />
            <Route path="/services/tree-trimming" element={<TreeTrimming />} />
            <Route path="/services/land-clearing" element={<LandClearing />} />
            <Route path="/services/house-washing" element={<HouseWashing />} />
            <Route path="/services/yard-maintenance" element={<YardMaintenance />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CallButton />
      </div>
    </Router>
  );
}

export default App;
