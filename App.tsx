import "./App.css";

function App() {
  return (
    <main className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="logo">
          <span>&lt;</span>JACKSON<span>/&gt;</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#engineering">Engineering</a>
          <a href="#quant">Quant Research</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-content">
          <p className="eyebrow">
            FULL-STACK SOFTWARE ENGINEER · QUANT RESEARCHER
          </p>

          <h1>
            Building software.
            <br />
            <span>Researching markets.</span>
          </h1>

          <p className="hero-description">
            I'm Jackson Muema, a Computer Science student and aspiring
            software engineer focused on building scalable applications,
            intelligent systems and quantitative research solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>Full-Stack</strong>
              <span>Development</span>
            </div>

            <div>
              <strong>Quant</strong>
              <span>Research</span>
            </div>

            <div>
              <strong>Computer</strong>
              <span>Science</span>
            </div>
          </div>
        </div>

        {/* TERMINAL CARD */}
        <div className="terminal-card">
          <div className="terminal-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="terminal-body">
            <p>
              <span className="green">jack@ubuntu</span>:~$ whoami
            </p>

            <p className="terminal-output">
              Jackson Muema
            </p>

            <p>
              <span className="green">jack@ubuntu</span>:~$ role
            </p>

            <p className="terminal-output">
              Full-Stack Software Engineer
            </p>

            <p>
              <span className="green">jack@ubuntu</span>:~$ research
            </p>

            <p className="terminal-output">
              Quantitative Research
            </p>

            <p>
              <span className="green">jack@ubuntu</span>:~$
              <span className="cursor">█</span>
            </p>
          </div>
        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section">

        <div className="section-label">01 — ABOUT ME</div>

        <div className="about-grid">

          <div>
            <h2>
              Engineer by practice.
              <br />
              <span>Researcher by curiosity.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I'm Jackson Muema, a Computer Science student focused on
              software engineering and quantitative research.
            </p>

            <p>
              My interests span full-stack development, backend systems,
              databases, automation, Linux environments, financial markets
              and quantitative research.
            </p>

            <p>
              I enjoy turning ideas into working systems — from web
              applications and management systems to market research
              workflows and algorithmic strategies.
            </p>
          </div>

        </div>

      </section>


      {/* ENGINEERING */}
      <section id="engineering" className="section">

        <div className="section-label">02 — SOFTWARE ENGINEERING</div>

        <h2 className="section-title">
          Building systems from
          <span> frontend to backend.</span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-number">01</div>
            <h3>Frontend</h3>
            <p>
              Building responsive interfaces and interactive web
              applications.
            </p>
            <div className="tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>
            <h3>Backend</h3>
            <p>
              Designing application logic, APIs, authentication and
              server-side systems.
            </p>
            <div className="tags">
              <span>Python</span>
              <span>Java</span>
              <span>PHP</span>
              <span>Flask</span>
              <span>APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>
            <h3>Databases</h3>
            <p>
              Designing and working with structured data and relational
              database systems.
            </p>
            <div className="tags">
              <span>MySQL</span>
              <span>SQL</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>
            <h3>Systems & DevOps</h3>
            <p>
              Working with Linux, development environments, deployment
              workflows and modern development tools.
            </p>
            <div className="tags">
              <span>Ubuntu</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Docker</span>
              <span>CI/CD</span>
            </div>
          </div>

        </div>

      </section>


      {/* QUANT */}
      <section id="quant" className="section quant-section">

        <div className="section-label">03 — QUANTITATIVE RESEARCH</div>

        <div className="quant-heading">
          <div>
            <h2>
              Data-driven research for
              <span> financial markets.</span>
            </h2>
          </div>

          <p>
            I explore quantitative finance through market data,
            factor research, alpha development and statistical analysis.
          </p>
        </div>

        {/* MARKET GRAPH */}
        <div className="market-card">

          <div className="market-top">
            <div>
              <small>RESEARCH SIMULATION</small>
              <h3>Alpha Performance</h3>
            </div>

            <div className="market-value">
              +16.44%
            </div>
          </div>

          <div className="chart">

            <div className="chart-grid"></div>

            <svg
              viewBox="0 0 900 300"
              preserveAspectRatio="none"
              className="chart-line"
            >
              <polyline
                points="
                  0,240
                  60,220
                  110,230
                  160,190
                  210,205
                  260,165
                  310,180
                  360,130
                  410,145
                  460,110
                  510,125
                  560,85
                  610,105
                  660,70
                  710,90
                  760,45
                  820,65
                  900,25
                "
              />
            </svg>

          </div>

          <div className="chart-metrics">

            <div>
              <span>Sharpe</span>
              <strong>1.82</strong>
            </div>

            <div>
              <span>Fitness</span>
              <strong>1.00+</strong>
            </div>

            <div>
              <span>Turnover</span>
              <strong>54.44%</strong>
            </div>

            <div>
              <span>Drawdown</span>
              <strong>6.64%</strong>
            </div>

          </div>

        </div>


        <div className="quant-grid">

          <div className="quant-card">
            <span>01</span>
            <h3>Alpha Research</h3>
            <p>
              Developing and testing mathematical signals designed
              to identify relationships within financial markets.
            </p>
          </div>

          <div className="quant-card">
            <span>02</span>
            <h3>Market Data</h3>
            <p>
              Exploring price, volume, fundamental and alternative
              datasets for quantitative analysis.
            </p>
          </div>

          <div className="quant-card">
            <span>03</span>
            <h3>Statistical Analysis</h3>
            <p>
              Using statistical measures and performance metrics to
              evaluate research hypotheses.
            </p>
          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="section-label">04 — SELECTED PROJECTS</div>

        <h2 className="section-title">
          Things I've
          <span> built.</span>
        </h2>

        <div className="projects-grid">

          <article className="project-card">
            <span>01 / FULL-STACK</span>
            <h3>Zenken Trading Platform</h3>
            <p>
              A trading-focused web application featuring market
              analysis, charts, trading simulations, risk calculations
              and automated trading concepts.
            </p>
            <div className="tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
            </div>
          </article>

          <article className="project-card">
            <span>02 / JAVA</span>
            <h3>University Management System</h3>
            <p>
              A Java-based management system with student management,
              course registration, results processing and database
              integration.
            </p>
            <div className="tags">
              <span>Java</span>
              <span>MySQL</span>
              <span>MVC</span>
            </div>
          </article>

          <article className="project-card">
            <span>03 / FINTECH</span>
            <h3>M-Pesa Simulator</h3>
            <p>
              A software project exploring digital payment workflows
              and transaction simulation.
            </p>
            <div className="tags">
              <span>Java</span>
              <span>Python</span>
              <span>Database</span>
            </div>
          </article>

          <article className="project-card">
            <span>04 / SYSTEMS</span>
            <h3>Library Management System</h3>
            <p>
              A database-driven system for managing books, borrowing,
              reservations and library records.
            </p>
            <div className="tags">
              <span>Java</span>
              <span>MySQL</span>
              <span>MVC</span>
            </div>
          </article>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div className="section-label">05 — CONTACT</div>

        <h2>
          Let's build something
          <span> meaningful.</span>
        </h2>

        <p>
          I'm interested in software engineering, quantitative research,
          technology and opportunities where I can build, learn and
          contribute.
        </p>

        <div className="contact-buttons">

          <a
            href="https://github.com/jackmuema-002"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jackson-muema-4a925a43a"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer>
        <span>© 2026 Jackson Muema</span>
        <span>Full-Stack Software Engineer · Quant Researcher</span>
      </footer>

    </main>
  );
}

export default App;