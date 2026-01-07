const JobCard = ({ role, company, date, description }) => {
  return (
    <div className="job-card">
      <h3>{role}</h3>
      <h4>{company}</h4>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '10px' }}>
        {date}
      </p>
      <p>{description}</p>
    </div>
  );
};

export default JobCard;