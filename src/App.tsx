import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Work from './components/Work'; // Ensure that the Work component exists in the specified path

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/work" element={<Work />} />
            <Route path="/" element={<Navigate to="/profile" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;