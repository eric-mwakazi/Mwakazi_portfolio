import React from "react";

function Skills() {
  return (
    <div>
      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              As a Backend Developer and DevOps Enthuast, I've continuously learned and adapted
              to modern industry practices. Below are some of the areas I'm
              proficient in:
            </p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">🔧 DevOps</span>
              </div>
              <ul>
                <li>Terraform & Ansible</li>
                <li>CI/CD: Jenkins & GitHub Actions</li>
                <li>Monitoring: Prometheus & Grafana</li>
                <li>Linux Server Administration</li>
                <li>Containerization: Docker & Kubernetes</li>
              </ul>

              <div className="progress">
                <span className="skill">☁️ Cloud Platforms</span>
              </div>
              <ul>
                <li>AWS (EC2, S3, IAM, VPC)</li>
                <li>Azure (basic exposure)</li>
                <li>Cloud-native infrastructure</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">💻 Backend Development</span>
              </div>
              <ul>
                <li>Python (Flask, FastAPI)</li>
                <li>Node.js (Express)</li>
                <li>REST API design & testing</li>
              </ul>

              <div className="progress">
                <span className="skill">🗄️ Databases</span>
              </div>
              <ul>
                <li>PostgreSQL, MySQL</li>
                <li>MongoDB</li>
              </ul>

              <div className="progress">
                <span className="skill">🔧 Tools & Workflow</span>
              </div>
              <ul>
                <li>Git & GitHub</li>
                <li>Agile/Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
