import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gangs from './pages/Gangs';
import Challengers from './pages/Challenges';

const App = () => {
  return (
    <Router>
      <div style={{backgroundColor: '#121212'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gangs" element={<Gangs />} />
          <Route path="/challengers" element={<Challengers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
