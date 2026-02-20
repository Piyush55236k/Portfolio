import SkillsImages from "./skills.jsx";
import React, { useRef } from 'react'
import { skillsData } from "../data/skills.js";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const skillssection = () => {

  useGSAP (() =>{
    
gsap.from(".image-card", {
  scale: 0.8,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".page3",
    start: "top 80%",
  }
});
  } )
  return (
    <section className="page3">
      <h1 className="Skills">SKILLS</h1>
      <SkillsImages heading="Using Now" items={skillsData.usingNow} className="usingnow"/>
      <SkillsImages heading="Learning" items={skillsData.learning} className="learning"/>
      <SkillsImages heading="Other Skills" items={skillsData.other} className="other"/>
    </section>
  )
}

export default skillssection
