// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Notes from './pages/Notes';
import NoteDetail from './pages/NoteDetail';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-accent text-background-dark shadow-lg"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div className="overlay active" onClick={toggleSidebar}></div>
        )}
        <div className="prompt-container">
          <div className="prompt-box">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/notes/:slug" element={<NoteDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
