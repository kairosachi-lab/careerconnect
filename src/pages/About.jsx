
import {
  Target,
  Users,
  BriefcaseBusiness,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <span>ABOUT CAREERCONNECT</span>
          <h1>Connecting Talent With Opportunity.</h1>
          <p>
            We make finding the right job and discovering the right talent
            easier, faster and more accessible.
          </p>
        </div>
      </section>

      <section className="container about-intro">
        <div>
          <span className="section-tag">WHO WE ARE</span>
          <h2>Building bridges between people and careers.</h2>
          <p>
            CareerConnect is a job recruitment platform designed to connect
            talented individuals with organisations looking for skilled
            professionals.
          </p>
          <p>
            Whether you are searching for your first job or looking for your
            next career opportunity, CareerConnect helps you discover
            opportunities that match your goals.
          </p>
        </div>

        <div className="about-visual">
          <div className="about-visual-icon">
            <BriefcaseBusiness size={65} />
          </div>
          <h3>Your next opportunity starts here.</h3>
          <p>Discover. Connect. Grow.</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container mission-grid">
          <div className="mission-card">
            <Target size={35} />
            <h3>Our Mission</h3>
            <p>
              To make job opportunities more accessible and help people
              connect with employers who value their skills.
            </p>
          </div>

          <div className="mission-card">
            <TrendingUp size={35} />
            <h3>Our Vision</h3>
            <p>
              To become a trusted platform where talent meets opportunity
              and careers grow.
            </p>
          </div>

          <div className="mission-card">
            <Users size={35} />
            <h3>Our Community</h3>
            <p>
              We bring job seekers and employers together in one convenient
              recruitment platform.
            </p>
          </div>
        </div>
      </section>

      <section className="container about-benefits">
        <div>
          <span className="section-tag">WHY CAREERCONNECT?</span>
          <h2>A simpler way to move your career forward.</h2>
        </div>

        <div className="benefits-list">
          {[
            'Easy access to job opportunities',
            'Simple job search and filtering',
            'Detailed job descriptions',
            'Convenient online applications',
            'Opportunities across different industries'
          ].map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <CheckCircle size={20} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
