const SkillCard = ({ name, icon }) => {
  return (
    <div className="skill-card">
      <i className={`${icon} colored`}></i>
      <span>{name}</span>
    </div>
  );
};

export default SkillCard;