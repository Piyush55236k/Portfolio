import React from "react";
import { items } from "../data/skills.js";

function SkillsImages({heading}) {
  return (<>
  <h1 className="skillsheading">{heading}</h1>
    <div className="image-list">
      {items.map(item => (
        <div key={item.id} className="image-card">
          <img src={item.src} alt={item.text} />
          <p>{item.text}</p>
        </div>
      ))}
    </div></>
  );
}

export default SkillsImages;
