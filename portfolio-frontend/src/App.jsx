import { useEffect } from "react";
import "./App.css";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export default function App() {
  useEffect(() => {
    /* ================= REVEAL OBSERVER ================= */
    const revealSections = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealSections.forEach(section => revealObserver.observe(section));

    /* ================= SCROLLSPY OBSERVER ================= */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const spyObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLinks.forEach(link => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${entry.target.id}`) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => spyObserver.observe(section));

    /* ================= SKILLS HOVER OPEN ================= */
    const skillDetails = document.querySelectorAll("#skills details");

    skillDetails.forEach(detail => {
      detail.addEventListener("mouseenter", () => {
        detail.open = true;
      });

      detail.addEventListener("mouseleave", () => {
        detail.open = false;
      });
    });

    return () => {
      revealObserver.disconnect();
      spyObserver.disconnect();

      skillDetails.forEach(detail => {
        detail.open = false;
      });
    };
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-logo">Portfolio</div>

        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero" id="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>
              Hi, I&apos;m <span>Dhanush K</span>
            </h1>

            <h2 className="typing">
              <span></span>
            </h2>

            <p>
              🚀 Passionate about building scalable web applications.
              <br />
              💻 Skilled in frontend & backend development.
              <br />
              ✨ Love clean code and continuous learning.
            </p>

            <div className="btns">
              <a href="https://www.linkedin.com/in/dhanushkannavar" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/dhanushk02" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href={`${BACKEND_URL}/static/portfolio/Dhanush-Resume.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-img">
              <img
                src={`${BACKEND_URL}/static/portfolio/Profile.jpeg`}
                alt="Dhanush K"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section reveal" id="about">
        <h3>About Me</h3>
        <p>
          Engineering graduate from BIET, Davangere with a strong interest in
          software development, problem solving, and modern web technologies.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="section reveal" id="skills">
        <h3>Skills</h3>

        <details>
          <summary className="skill-web">Web Technologies</summary>
          <p>HTML, CSS, JavaScript, Responsive Design</p>
        </details>

        <details>
          <summary className="skill-python">Python</summary>
          <p>Python, Django, REST APIs, Automation</p>
        </details>

        <details>
          <summary className="skill-react">React</summary>
          <p>Hooks, Component-based architecture, API integration</p>
        </details>

        <details>
          <summary className="skill-db">Databases</summary>
          <p>MySQL, PostgreSQL, SQLite</p>
        </details>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="section reveal" id="education">
        <h3>Education</h3>

        <div className="timeline">
          <div className="timeline-item left">
            <h4>Bachelor of Engineering</h4>
            <p>BIET, Davangere</p>
            <p>CGPA: 6.85</p>
          </div>

          <div className="timeline-item right">
            <h4>PUC</h4>
            <p>St. John’s PU College</p>
            <p>67%</p>
          </div>

          <div className="timeline-item left">
            <h4>SSLC</h4>
            <p>B.H.P.E.M.[CBSE].S</p>
            <p>57.8%</p>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="section reveal" id="experience">
        <h3>Experience</h3>

        <div className="card">
          <h4>Cloud Application Developer Intern</h4>
          <p>VTU – Rooman Technologies</p>
          <p>Sep 2024 – Feb 2025</p>
        </div>

        <div className="card">
          <h4>Python Full Stack Intern</h4>
          <p>PySpiders, Basavanagudi</p>
          <p>Jun 2025 – Dec 2025</p>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="section reveal" id="projects">
        <h3>Projects</h3>

        <div className="grid">
          <div className="card">
            <h4>Product Review Sentiment Analysis</h4>
            <ul className="project-points">
              <li><strong>Problem:</strong> Users struggle to judge product quality from large volumes of reviews.</li>
              <li><strong>Tech:</strong> Python, Flask, NLP, Machine Learning</li>
              <li><strong>Outcome:</strong> Automated sentiment classification to help users make faster decisions.</li>
            </ul>
            <a href="https://github.com/dhanushk02" target="_blank" rel="noreferrer" className="project-link">
              View on GitHub →
            </a>
          </div>

          <div className="card">
            <h4>Portfolio Website</h4>
            <ul className="project-points">
              <li><strong>Problem:</strong> Needed a professional way to showcase skills and experience.</li>
              <li><strong>Tech:</strong> React, Vite, CSS, IntersectionObserver</li>
              <li><strong>Outcome:</strong> Built a responsive, recruiter-friendly personal portfolio.</li>
            </ul>
          </div>

          <div className="card">
            <h4>Hospital Management System</h4>
            <ul className="project-points">
              <li><strong>Problem:</strong> Manual patient and appointment handling caused inefficiency.</li>
              <li><strong>Tech:</strong> Django, Python, MySQL</li>
              <li><strong>Outcome:</strong> Streamlined hospital operations with secure CRUD workflows.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section reveal" id="contact">
        <h3 className="section-title">Contact Me</h3>

        <p className="contact-cta">
          🚀 Open to full-time / internship opportunities
        </p>

        <div className="contact-card">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <strong>Email</strong>
              <a href="mailto:dhanushkannavar06@gmail.com">
                dhanushkannavar06@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <a href="tel:+919380014659">+91 93800 14659</a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Location</strong>
              <p>Davangere, Karnataka, India</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">🔗</span>
            <div>
              <strong>LinkedIn</strong>
              <a href="https://www.linkedin.com/in/dhanushkannavar" target="_blank" rel="noreferrer">
                linkedin.com/in/dhanushkannavar
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📄</span>
            <div>
              <strong>Resume</strong>
              <a
                href={`${BACKEND_URL}/static/portfolio/Dhanush-Resume.pdf`}
                target="_blank"
                rel="noreferrer">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
