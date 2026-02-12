import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SkillsImages from "./components/skills.jsx";
import { items } from "./data/skills.js";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const container = useRef(null);

  useGSAP(() => {
    // bottom section fade in on scroll
    gsap.fromTo(
      ".page1bottom",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".page1bottom",
          start: "top 40%",
          end: "top 40%", 
          scrub: true,
        },
      }
    );

    // navbar fade out when scrolling down first page
    gsap.to("nav", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".page1",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: container });

  return (
    <div ref={container}>
      <section className="page1">
        <div className="left">
          <nav className="firstnav">
            <h2>Piyush</h2>
            <div className="secondnav">
              <h3>About Me</h3>
              <h3>Skills</h3>
              <h3>Portfolio</h3>
              <h3>CONTACT ME</h3>
            </div>
          </nav>

          <div className="intro">
            <h3 className="greet">Hi, I am</h3>
            <h1 className="name">Piyush Pandey</h1>
            <p className="role">Front-end Developer / UI Designer</p>

            <div className="social">
              <img src="socialicons/icons8-linkedin.svg" alt="LinkedIn" />
              <img src="socialicons/icons8-github.svg" alt="Github" />
              <img src="socialicons/icons8-threads.svg" alt="Threads" />
            </div>
          </div>
        </div>

        <div className="right">
          <img src="/Profile/Profile.png" alt="Profile" />
        </div>

        <div className="page1bottom">
          <div className="content">
            <h2>IT BERRIES</h2>
            <p className="ITBERRIES">
              I design and develop modern web interfaces that focus on clarity,
              performance, and user experience. As a Front-End Developer at IT
              Berries, I’ve worked on real projects that required problem-solving,
              teamwork, and the ability to deliver under time pressure.
              <br /><br />
              Beyond coding, I’ve gained experience working in collaborative
              environments and contributing to technology-driven initiatives. I
              believe good design is simple, functional, and purposeful — and
              that’s exactly how I approach every project.
              <br /><br />
              Want to see what I’ve built? Click below.
            </p>
          </div>
        </div>
      </section>

      <section className="page2">
        <div className="aboutme">
          <h1>ABOUT ME</h1>
          <p>
            My name is Piyush Pandey, I'm a third year Applied Computer Science
            student at the Institute of Information Technology and Management.
            I have been learning Front-End technologies for a year and this time
            was just enough for me to make sure that this is my place in the
            industry.
          </p>
          <p>
            Membership in the science club developed my design skills, which
            quickly turned into a new hobby. I am fluent in English (spoken and
            written) and intermediate Spanish. Apart from designing and
            programming websites, my passion is motorsport.
          </p>

          <div className="divider">
            <span></span>
            <span className="diamond">W</span>
            <span></span>
          </div>
        </div>

        <div className="cards">
          <div className="design">
            <h1>DESIGN</h1>
            <p>I can design websites based on your needs and suggestions.</p>
          </div>

          <div className="development">
            <h1>DEVELOPMENT</h1>
            <p>I can build fully functional and responsive websites.</p>
          </div>

          <div className="maintenance">
            <h1>MAINTENANCE</h1>
            <p>I can add new features and maintain your site over time.</p>
          </div>
        </div>
      </section>

      <section className="page3">
        <h1 className="Skills">SKILLS</h1>
        <div className="usingnow">
          <div className="image-list">
      {items.map(item => (
        <div key={item.id} className="image-card">
          <img src={item.src} alt={item.text} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
        </div>
      </section>

      <section className="projects">
        <div className="portfolio">
          <h1>PORTFOLIO</h1>
        </div>

        <div className="demo">
          <img src="projects/2107.w026.n002.637B.p1.637.jpg" alt="" />
          <img src="projects/1753250630051.jpg" alt="" />
          <img src="projects/1753250763181.jpg" alt="" />
          <img src="projects/1753250771118.jpg" alt="" />
          <img src="projects/download (1).jpg" alt="" />
          <img src="projects/pixl sky.jpg" alt="" />
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-header">
          <h1>CONTACT</h1>
          <p className="contact-subtext">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus.
          </p>
          <div className="divider">
            <span></span>
            <span className="diamond">W</span>
            <span></span>
          </div>
        </div>

        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="ENTER YOUR NAME" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="ENTER YOUR EMAIL" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="PHONE NUMBER" />
          </div>
          <div className="input-group textarea">
            <textarea placeholder="YOUR MESSAGE" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            <span></span>
            SUBMIT
            <span></span>
          </button>
        </form>
      </section>

      <footer className="footer">
        <a href="#top" className="back-to-top">BACK TO TOP</a>
        <div className="footer-icons">
          <a href="#"><img src="socialicons/icons8-linkedin.svg" alt="LinkedIn" /></a>
          <a href="#"><img src="socialicons/icons8-github.svg" alt="Github" /></a>
          <a href="#"><img src="socialicons/icons8-threads.svg" alt="Threads" /></a>
          <a href="#"><img src="socialicons/icons8-facebook.svg" alt="facebook" /></a>
        </div>
        <p className="copyright">
          ©2026 Piyush Pandey All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
