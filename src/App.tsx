import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Services from './components/Services'; // Ensure that the Work component exists in the specified path
import Location from './components/Location';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/location" element={<Location />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/rna" element={<Navigate to="/profile" replace />} />
            <Route path="/" element={<Navigate to="/profile" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;