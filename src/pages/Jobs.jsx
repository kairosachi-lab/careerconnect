
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import jobs from '../data/jobs';
import JobCard from '../components/JobCard';

function Jobs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [type, setType] = useState('All');
  const [savedJobs, setSavedJobs] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('careerconnect-saved') || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('careerconnect-saved', JSON.stringify(savedJobs));
  }, [savedJobs]);

  const toggleSave = (id) => {
    setSavedJobs(previous =>
      previous.includes(id)
        ? previous.filter(jobId => jobId !== id)
        : [...previous, id]
    );
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch =
      `${job.title} ${job.company} ${job.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesLocation =
      job.location.toLowerCase().includes(location.toLowerCase());

    const matchesCategory =
      category === 'All' || job.category === category;

    const matchesType =
      type === 'All' || job.type === type;

    return matchesSearch && matchesLocation &&
      matchesCategory && matchesType;
  });

  const clearFilters = () => {
    setSearch('');
    setLocation('');
    setCategory('All');
    setType('All');
    setSearchParams({});
  };

  const updateSearchParams = (event) => {
    event.preventDefault();
    const params = {};

    if (search.trim()) params.search = search.trim();
    if (location.trim()) params.location = location.trim();
    if (category !== 'All') params.category = category;

    setSearchParams(params);
  };

  return (
    <main className="jobs-page">

      <section className="jobs-hero">
        <div className="container">
          <span className="section-label">CAREER OPPORTUNITIES</span>
          <h1>Find the job that fits your future.</h1>
          <p>
            Explore opportunities from companies looking
            for talented people like you.
          </p>
        </div>
      </section>

      <section className="container jobs-content">

        <form className="jobs-search" onSubmit={updateSearchParams}>
          <div>
            <Search size={20} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search job title, company or keyword"
            />
          </div>

          <div>
            <input
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="Enter location"
            />
          </div>

          <button type="submit">
            Search Jobs
          </button>
        </form>

        <div className="jobs-toolbar">
          <div>
            <SlidersHorizontal size={19} />
            <strong>Filter Jobs</strong>
          </div>

          <button onClick={clearFilters} className="clear-filters">
            <X size={16} /> Clear filters
          </button>
        </div>

        <div className="filter-row">

          <label>
            Category
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Business">Business</option>
            </select>
          </label>

          <label>
            Employment Type
            <select
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Remote">Remote</option>
              <option value="Contract">Contract</option>
            </select>
          </label>

        </div>

        <div className="jobs-results-heading">
          <div>
            <h2>Available Jobs</h2>
            <p>Discover your next opportunity.</p>
          </div>

          <span>{filteredJobs.length} jobs found</span>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="jobs-list-grid">
            {filteredJobs.map(job => (
              <JobCard
                key={job.id}
                job={job}
                saved={savedJobs.includes(job.id)}
                onToggleSave={toggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="no-jobs">
            <Search size={35} />
            <h3>No jobs found</h3>
            <p>Try changing your search or filters.</p>
            <button onClick={clearFilters}>Reset filters</button>
          </div>
        )}

      </section>
    </main>
  );
}

export default Jobs;
