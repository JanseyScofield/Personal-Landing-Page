import SkillCard from './SkillCard';

const Skills = () => {
  // Dados definidos dentro do componente da seção
  const skillsData = [
    { name: "C#", icon: "devicon-csharp-plain" },
    { name: ".NET Core", icon: "devicon-dotnetcore-plain" },
    { name: "Blazor", icon: "devicon-blazor-original" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "RabbitMQ", icon: "devicon-rabbitmq-original" },
    { name: "Azure DevOps", icon: "devicon-azure-plain" },
  ];

  return (
    <section id="skills" className="reveal">
      <h2 className="section-title">Technologies & Tools</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;