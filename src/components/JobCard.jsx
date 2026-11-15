
import { Link } from 'react-router-dom';
import {
  MapPin,
  Bookmark,
  ArrowUpRight,
  Clock
} from 'lucide-react';

function JobCard({ job, saved, onToggleSave }) {
  return (
    <article className="job-listing-card">

      <div className="listing-top">
        <div className={`company-logo ${job.color}`}>
          {job.initials}
        </div>

        <button
          className={`bookmark-button ${saved ? 'saved' : ''}`}
          onClick={() => onToggleSave(job.id)}
          aria-label={saved ? 'Remove saved job' : 'Save job'}
        >
          <Bookmark
            size={19}
            fill={saved ? 'currentColor' : 'none'}
          />
        </button>
      </div>

      <span className="job-type">{job.type}</span>

      <h3>{job.title}</h3>
      <p className="company-name">{job.company}</p>

      <div className="listing-meta">
        <span><MapPin size={15} /> {job.location}</span>
        <span><Clock size={15} /> {job.posted}</span>
      </div>

      <div className="listing-bottom">
        <div>
          <strong>{job.salary}</strong>
          <small>{job.category}</small>
        </div>

        <Link to={`/jobs/${job.id}`} className="apply-arrow">
          <ArrowUpRight size={20} />
        </Link>
      </div>

    </article>
  );
}

export default JobCard;
