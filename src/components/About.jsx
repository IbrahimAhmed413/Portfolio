import React from "react";
import "../components/Styles/About.css";
import ProjectScreen from "./ProjectScreen";
const About = () => {
  return (
    <>
      
        <ProjectScreen dh1=" About Me" />

      <section className="about-container">
        <div className="about-header">
          {/* <img src={profilePic} alt="Ibrahim Ahmed" className="about-image" /> */}
          <div>
            <h1 className="about-name">Ibrahim Ahmed</h1>
            <h3 className="about-role">Front-End Developer</h3>
            <p className="about-intro">
              Front-End / MERN Stack Developer with 1.5 years of experience
              designing and building responsive, scalable web applications using
              React.js, HTML, CSS, and JavaScript. Passionate about writing
              clean, maintainable code and integrating RESTful APIs with modern
              design principles.
            </p>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="about-section">
          <h2>Professional Experience</h2>
          <p>
            <strong>Cedrus Group (Pvt) Ltd</strong> — Front-End Developer
            <br />
            Abbottabad, KPK (Mar 2024 – Present)
          </p>
          <ul>
            <li>
              Developed and maintained responsive front-end interfaces using
              React.js aligned with modern design.
            </li>
            <li>
              Built and integrated RESTful APIs with seamless data
              communication.
            </li>
            <li>
              Optimized performance through caching strategies and backend
              refinements.
            </li>
            <li>
              Collaborated with teams to transform Figma/UI designs into
              scalable web pages.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="about-section">
          <h2>Education</h2>
          <p>
            <strong>COMSATS University of Science & Technology</strong>
            <br />
            Bachelor of Computer Science (2020 – 2024)
          </p>
        </div>

        {/* Projects */}
        <div className="about-section">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Radio Pakistan Website</strong> — Enhanced and improved
              the official Radio Pakistan site.{" "}
              <a
                href="https://www.radio.gov.pk/"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </li>
            <li>
              <strong>ZeroWave Labs</strong> — Built a responsive web app
              showcasing innovative solutions.{" "}
              <a
                href="https://zerowavelabs.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </li>
            <li>
              <strong>PPAP System</strong> — Generated past papers for
              O/A-levels students.
              <a
                href="https://pastpaperai.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </li>
            <li>
              <strong>Sync Care Web App</strong> — Healthcare management
              platform built with React.js.
              <a
                href="https://syncaresystems.com/syncare-frontend"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </li>
            <li>
              <strong>Learning Management System</strong> — Built responsive
              education portal using React.js, HTML, CSS, JavaScript.
            </li>
            <li>
              <strong>Ongoing Development</strong> — Currently developing
              another scalable project with modern technologies.
              <a
                href="https://zerowavelabs.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="about-section skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <span>React.js</span>
            {/* <span>Node.js</span> */}
            {/* <span>Express.js</span> */}
            <span>MongoDB</span>
            <span>JavaScript</span>
            <span>Material UI</span>
            <span>HTML & CSS</span>
            <span>API Integration</span>
            <span>Jira</span>
            <span>Problem Solving</span>
            <span>OOP</span>
            <span>Version Control</span>
            <span>Visual Studio Code</span>
            <span>Performance Optimization & Responsive Design</span>
            <span>Component Based Architecture</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
