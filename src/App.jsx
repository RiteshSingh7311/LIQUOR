import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AgeVerification from './components/AgeVerification';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  const [isAgeVerified, setIsAgeVerified] = window.localStorage.getItem('ageVerified') === 'true' 
    ? useState(true) 
    : useState(false);

  useEffect(() => {
    if (isAgeVerified) {
      window.localStorage.setItem('ageVerified', 'true');
    }
  }, [isAgeVerified]);

  return (
    <Router>
      {!isAgeVerified && <AgeVerification onVerify={() => setIsAgeVerified(true)} />}
      <div className={!isAgeVerified ? 'blur-sm pointer-events-none' : ''}>
        <Navbar />
        <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 100px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<div className="container mt-8"><h1>Cart Coming Soon</h1></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
