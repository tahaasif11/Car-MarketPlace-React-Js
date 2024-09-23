import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavbarComponent/Navbar';
import AboutUs from './components/AboutUsComponent/AboutUs';
import HomePage from './components/HomeComponent/HomePage';
import Footer from './components/FooterComponent/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={() => <h2>Page Not Found</h2>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
