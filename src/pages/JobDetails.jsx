import { Link, useParams } from 'react-router-dom';
import {
  MapPin,
  BriefcaseBusiness,
  Clock,
  Banknote,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';
import { jobs } from '../data/jobs';

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <div className="container not-found">
        <h2>Job not found</h2>
        <Link to="/jobs">Back to jobs</Link>
      </div>
    );
  }

  return (
    <main className="job-details-page">
      <div className="container">
        <Link to="/jobs" className="back-link">
          <ArrowLeft size={18} /> Back to all jobs
        </Link>

        <section className="job-details-header">
          <div className={`company-logo details-logo ${job.color}`}>
            {job.initials}
          </div>

          <div className="details-heading">
            <span className="job-type">{job.type}</span>
            <h1>{job.title}</h1>
            <p>{job.company}</p>
          </div>

          <Link to={`/apply/${job.id}`} className="primary-button">
            Apply Now
          </Link>
        </section>

        <div className="job-details-layout">
          <section className="job-description">
            <div className="details-section">
              <h2>Job Overview</h2>
              <p>{job.description}</p>
            </div>

            <div className="details-section">
              <h2>Key Responsibilities</h2>
              <ul>
                {job.responsibilities.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="details-section">
              <h2>Requirements</h2>
              <ul>
                {job.requirements.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <aside className="job-information">
            <h2>Job Information</h2>

            <div className="information-item">
              <MapPin size={20} />
              <div>
                <small>Location</small>
                <strong>{job.location}</strong>
              </div>
            </div>

            <div className="information-item">
              <BriefcaseBusiness size={20} />
              <div>
                <small>Job Type</small>
                <strong>{job.type}</strong>
              </div>
            </div>

            <div className="information-item">
              <Banknote size={20} />
              <div>
                <small>Salary</small>
                <strong>{job.salary}</strong>
              </div>
            </div>

            <div className="information-item">
              <Clock size={20} />
              <div>
                <small>Posted</small>
                <strong>{job.posted}</strong>
              </div>
            </div>

            <Link to={`/apply/${job.id}`} className="primary-button apply-full">
              Apply for this job
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default JobDetails;