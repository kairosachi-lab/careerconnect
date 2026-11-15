import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Send } from 'lucide-react';
import { jobs } from '../data/jobs';

function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((item) => item.id === Number(id));

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!job) {
    return (
      <div className="container not-found">
        <h2>Job not found</h2>
        <Link to="/jobs">Back to jobs</Link>
      </div>
    );
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const application = {
      ...form,
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      submittedAt: new Date().toISOString()
    };

    const existingApplications = JSON.parse(
      localStorage.getItem('careerconnect-applications') || '[]'
    );

    existingApplications.push(application);

    localStorage.setItem(
      'careerconnect-applications',
      JSON.stringify(existingApplications)
    );

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="application-page">
        <div className="container success-container">
          <div className="success-icon">
            <CheckCircle size={48} />
          </div>

          <h1>Application Submitted!</h1>
          <p>
            Your application for <strong>{job.title}</strong> at{' '}
            <strong>{job.company}</strong> has been saved successfully.
          </p>

          <Link to="/jobs" className="primary-button">
            Explore More Jobs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="application-page">
      <div className="container application-container">
        <button className="back-link" onClick={() => navigate(`/jobs/${job.id}`)}>
          <ArrowLeft size={18} /> Back to job details
        </button>

        <div className="application-heading">
          <span>JOB APPLICATION</span>
          <h1>Apply for this position</h1>
          <p>Complete the form below to submit your application.</p>
        </div>

        <div className="application-job-card">
          <div className={`company-logo ${job.color}`}>{job.initials}</div>
          <div>
            <h3>{job.title}</h3>
            <p>{job.company} · {job.location}</p>
          </div>
        </div>

        <form className="application-form" onSubmit={handleSubmit}>
          <h2>Personal Information</h2>

          <div className="application-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="application-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="application-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="application-field">
            <label htmlFor="coverLetter">Why are you suitable for this job?</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows="6"
              placeholder="Write a short introduction about yourself and your experience..."
              value={form.coverLetter}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="primary-button submit-application">
            Submit Application <Send size={17} />
          </button>

          <p className="form-note">
            Your application will be saved in this browser for this demo.
          </p>
        </form>
      </div>
    </main>
  );
}

export default Apply;