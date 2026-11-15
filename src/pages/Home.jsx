
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  MapPin,
  ArrowRight,
  BriefcaseBusiness,
  Code,
  Palette,
  BarChart3,
  Megaphone,
  HeartPulse,
  Building2,
  Clock,
  Bookmark,
  Users,
  Globe
} from 'lucide-react';

const categories = [
  { name: 'Technology', jobs: '120+ Jobs', icon: Code },
  { name: 'Design', jobs: '85+ Jobs', icon: Palette },
  { name: 'Marketing', jobs: '95+ Jobs', icon: Megaphone },
  { name: 'Finance', jobs: '70+ Jobs', icon: BarChart3 },
  { name: 'Healthcare', jobs: '60+ Jobs', icon: HeartPulse },
  { name: 'Business', jobs: '100+ Jobs', icon: Building2 }
];

const featuredJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechNova Solutions',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    salary: '₦250k - ₦400k',
    initials: 'TN',
    color: 'blue'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'Creative Studios',
    location: 'Abuja, Nigeria',
    type: 'Remote',
    salary: '₦180k - ₦300k',
    initials: 'CS',
    color: 'purple'
  },
  {
    id: 3,
    title: 'Data Analyst',
    company: 'Insight Analytics',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    salary: '₦200k - ₦350k',
    initials: 'IA',
    color: 'green'
  }
];

function Home() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(
      `/jobs?search=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}`
    );
  };

  return (
    <main>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-container">

          <div className="hero-content">
            <div className="hero-tag">
              <span className="live-dot"></span>
              YOUR CAREER JOURNEY STARTS HERE
            </div>

            <h1>
              Discover Your Next
              <span> Big Opportunity.</span>
            </h1>

            <p>
              Connect with leading companies, explore exciting
              opportunities, and find a career that matches your
              passion and potential.
            </p>

            <form className="search-box" onSubmit={handleSearch}>
              <div className="search-field">
                <Search size={21} />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              <div className="search-divider"></div>

              <div className="search-field">
                <MapPin size={21} />
                <input
                  type="text"
                  placeholder="City or location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <button type="submit" className="search-button">
                Search Jobs
              </button>
            </form>

            <div className="popular-searches">
              <span>Popular:</span>
              <Link to="/jobs?search=Developer">Developer</Link>
              <Link to="/jobs?search=Designer">Designer</Link>
              <Link to="/jobs?search=Marketing">Marketing</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
                alt="Professionals collaborating in an office"
              />

              <div className="floating-card floating-top">
                <div className="floating-icon">
                  <BriefcaseBusiness size={22} />
                </div>
                <div>
                  <strong>New Opportunities</strong>
                  <small>Find your next career move</small>
                </div>
              </div>

              <div className="floating-card floating-bottom">
                <div className="avatar-stack">
                  <span>A</span>
                  <span>B</span>
                  <span>C</span>
                </div>
                <div>
                  <strong>Career Growth</strong>
                  <small>Start something great</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATISTICS */}
      <section className="stats-section">
        <div className="container stats-grid">

          <div className="stat-item">
            <BriefcaseBusiness />
            <div>
              <h2>500+</h2>
              <p>Job Opportunities</p>
            </div>
          </div>

          <div className="stat-item">
            <Building2 />
            <div>
              <h2>200+</h2>
              <p>Partner Companies</p>
            </div>
          </div>

          <div className="stat-item">
            <Users />
            <div>
              <h2>1,000+</h2>
              <p>Job Seekers</p>
            </div>
          </div>

          <div className="stat-item">
            <Globe />
            <div>
              <h2>20+</h2>
              <p>Career Categories</p>
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section section-padding">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">EXPLORE OPPORTUNITIES</span>
              <h2>Browse by Category</h2>
              <p>Find opportunities that match your interests.</p>
            </div>

            <Link to="/jobs" className="view-all">
              View all categories <ArrowRight size={17} />
            </Link>
          </div>

          <div className="categories-grid">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <Link
                  to={`/jobs?category=${encodeURIComponent(category.name)}`}
                  className="category-card"
                  key={index}
                >
                  <div className="category-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{category.name}</h3>
                  <p>{category.jobs}</p>
                  <ArrowRight className="category-arrow" size={18} />
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="featured-section section-padding">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">HANDPICKED FOR YOU</span>
              <h2>Featured Opportunities</h2>
              <p>Explore some of our latest job opportunities.</p>
            </div>

            <Link to="/jobs" className="view-all">
              Explore all jobs <ArrowRight size={17} />
            </Link>
          </div>

          <div className="jobs-grid">
            {featuredJobs.map((job) => (
              <div className="featured-job-card" key={job.id}>

                <div className="job-card-top">
                  <div className={`company-logo ${job.color}`}>
                    {job.initials}
                  </div>

                  <button
                    className="bookmark-button"
                    aria-label={`Save ${job.title}`}
                    onClick={() => alert('Job saved feature coming soon!')}
                  >
                    <Bookmark size={19} />
                  </button>
                </div>

                <span className="job-type">{job.type}</span>

                <h3>{job.title}</h3>
                <p className="company-name">{job.company}</p>

                <div className="job-location">
                  <MapPin size={15} />
                  {job.location}
                </div>

                <div className="job-card-bottom">
                  <div>
                    <strong>{job.salary}</strong>
                    <small>Estimated salary</small>
                  </div>

                  <Link to="/jobs" className="apply-arrow">
                    <ArrowRight size={19} />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="container cta-content">
          <div>
            <span>YOUR FUTURE STARTS TODAY</span>
            <h2>Ready to take the next step in your career?</h2>
            <p>Explore opportunities and discover what is possible.</p>
          </div>

          <Link to="/jobs" className="cta-button">
            Find Your Dream Job <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Home;
