import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Apply from './pages/Apply';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function Placeholder({ title }) {
  return (
    <div className="container placeholder-page">
      <h1>{title}</h1>
      <p>This page is currently under development.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
          <Footer />

    </>
  );
}

export default App;