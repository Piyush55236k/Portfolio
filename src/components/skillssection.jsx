import React from 'react'
import SkillsImages from "./skills.jsx";

const skillssection = () => {
  return (
       <section className="page3">
        <h1 className="Skills">SKILLS</h1>
        <div className="usingnow">
          <SkillsImages heading="Using Now :"/>
        </div>
        <div className="learning">
          <SkillsImages heading="Learning :"/>
        </div>
        <div className="other">
          <SkillsImages heading="Other Skills :"/>
        </div>
      </section>
  )
}

export default skillssection
