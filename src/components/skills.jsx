function SkillsImages({ heading, items, className }) {
  return (
    <div className={className}>
      <h3 className="skillsheading">{heading}</h3>

      <div className="image-list">
        {items.map((item) => (
          <div key={item.id} className="image-card">
            <img src={item.src} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default SkillsImages;