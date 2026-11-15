import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, BriefcaseBusiness } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const { darkMode, toggleTheme } = useTheme();
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <BriefcaseBusiness size={23} />
          </span>
          <span>Career<span className="brand-highlight">Connect</span></span>
        </Link>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/jobs" onClick={closeMenu}>Find Jobs</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

          <Link
            to="/jobs"
            className="mobile-post-button"
            onClick={closeMenu}
          >
            Explore Jobs
          </Link>
        </nav>

        <div className="nav-actions">
          <Link to="/jobs" className="nav-login">
            Find a Job
          </Link>
          <Link to="/jobs" className="nav-post">
            Explore Opportunities
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <button
  className="theme-toggle"
  onClick={toggleTheme}
  aria-label="Toggle dark mode"
  title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
</button>

      </div>
    </header>
  );
}

export default Navbar;
