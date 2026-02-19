import React from 'react'

const aboutme = () => {
  return (
    <div>
       <section className="page2">
        <div className="aboutme">
          <h1>ABOUT ME</h1>
         <p>
  I’m Piyush Pandey,  BCA student at the Institute of Information Technology and Management, focused on building modern, scalable web applications. I specialize in front-end development using React and JavaScript, with hands-on experience in the MERN stack for full-stack projects.
</p>

<p>
  Through a 3-month professional internship and participation in multiple hackathons — including winning an internal competition — I’ve strengthened my ability to build reliable solutions under deadlines. I focus on clean architecture, performance optimization, and creating intuitive user experiences that solve real problems.
</p>

<p>
  I am actively seeking internship and entry-level opportunities where I can contribute to real-world products, collaborate with experienced teams, and continue improving through practical challenges.
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
    </div>
  )
}

export default aboutme
