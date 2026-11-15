
import { Link } from 'react-router-dom';
import { BriefcaseBusiness, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <BriefcaseBusiness size={27} />
            <span>CareerConnect</span>
          </Link>
          <p>
            Connecting talented people with opportunities.
            Your next career move starts here.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>For Job Seekers</h3>
          <Link to="/jobs">Browse Jobs</Link>
          <Link to="/jobs">Explore Opportunities</Link>
          <Link to="/about">About CareerConnect</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Information</h3>
          <p><Mail size={17} /> support@careerconnect.com</p>
          <p><Phone size={17} /> +234 800 000 0000</p>
          <p><MapPin size={17} /> Nigeria</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} CareerConnect. All rights reserved.</p>
        <p>Connecting Talent With Opportunity.</p>
      </div>
    </footer>
  );
}

export default Footer;
