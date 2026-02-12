import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import About from './pages/About';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserver" element={<Booking />} />
          <Route path="/en-savoir-plus" element={<About />} />
        </Routes>
        <WhatsAppFAB />
      </div>
    </Router>
  );
}

export default App;
