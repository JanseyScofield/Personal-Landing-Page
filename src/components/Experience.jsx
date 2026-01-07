import JobCard from './JobCard';

const Experience = () => {
  const experiencesData = [
    {
      role: "Software Developer",
      company: "@ Instituto Recôncavo de Tecnologia",
      date: "Apr 2025 - Present",
      desc: "Full Stack development of ERP systems. Working with C#, .NET, Blazor, and SQL Server. Implementation of automated CI/CD pipelines in Azure DevOps."
    },
    {
      role: "BI Developer",
      company: "@ Horus CDA",
      date: "Nov 2024 - Mar 2025",
      desc: "Development of dashboards and data modeling in Qlik Sense. Creation of ETL processes and analysis of strategic KPIs."
    },
    {
      role: "Software Developer",
      company: "@ Computação Brasil",
      date: "Apr 2024 - Oct 2024",
      desc: "Maintenance of web applications using .NET Core and JavaScript. Optimization of SQL queries and development of REST APIs."
    }
  ];

  return (
    <section id="experience" className="reveal">
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        {experiencesData.map((job, index) => (
          <JobCard 
            key={index}
            role={job.role}
            company={job.company}
            date={job.date}
            description={job.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;