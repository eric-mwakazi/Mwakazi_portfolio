import React from "react";
import bluegreen from "../images/bluegreen.png";
import ec2 from "../images/ec2.png";
import dockerize from "../images/dockerize.png";
import homelab from "../images/homelab.png";
import airbnb from "../images/airbnb.png";
import skills from "../images/skills.png";

function Portfolio() {
  return (
    <div>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Notable projects</h2>
            <p>
              Actions speak louder than words. Using the listed skills, here are
              some of the projects I have built.
            </p>
          </div>
          <div className="row">
            {/* Blue-Green Deployment Practice */}
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img src={bluegreen} alt="Blue-Green Deployment" className="img-fluid w-100" />
                </div>
                <h4><a href="#">Blue-Green Deployment</a></h4>
                <p>
                  Demonstrates Blue-Green Deployment strategy using Kubernetes and CI/CD tools: Jenkins, SonarQube, Nexus, Ansible, and Terraform. All tools containerized with Docker.
                </p>
                <a href="hhttps://github.com/eric-mwakazi/Blue-Green-Deploy-Practice" target="_blank" rel="noopener noreferrer">
                  <button className="btn" style={{ marginTop: 15, backgroundColor: "#34b7a7", color: "white", fontSize: 20 }}>
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>

            {/* EC2 Ansible Automation – KU Edition */}
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img src={ec2} alt="EC2 Ansible Automation" className="img-fluid w-100" />
                </div>
                <h4><a href="#">EC2 Ansible Automation</a></h4>
                <p>
                  Automated EC2 provisioning and web server setup using Ansible. Configures UFW, NGINX, and a welcome page for consistent infrastructure.
                </p>
                <a href="https://github.com/eric-mwakazi/ku-edition" target="_blank" rel="noopener noreferrer">
                  <button className="btn" style={{ marginTop: 15, backgroundColor: "#34b7a7", color: "white", fontSize: 20 }}>
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>

            {/* Django-React Dockerization */}
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img src={dockerize} alt="Dockerized Django React" className="img-fluid w-100" />
                </div>
                <h4><a href="#">Django-React Dockerization</a></h4>
                <p>
                  Dockerized full-stack Django and React app with PostgreSQL, using Docker Compose, secrets management, and pushed images to Docker Hub.
                </p>
                <a href="https://github.com/eric-mwakazi/Django-and-React-app-Dockerization" target="_blank" rel="noopener noreferrer">
                  <button className="btn" style={{ marginTop: 15, backgroundColor: "#34b7a7", color: "white", fontSize: 20 }}>
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>

            {/* Homelab Infrastructure */}
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img src={homelab} alt="Homelab Setup" className="img-fluid w-100" />
                </div>
                <h4><a href="#">Homelab Automation</a></h4>
                <p>
                  Built a Kubernetes cluster on Proxmox with automated provisioning using Terraform and Ansible. Deployed Grafana and Prometheus as the monitoring stack.
                </p>
                <a href="https://github.com/eric-mwakazi/deploy-vms-and-k8s-with-ansible" target="_blank" rel="noopener noreferrer">
                  <button className="btn" style={{ marginTop: 15, backgroundColor: "#34b7a7", color: "white", fontSize: 20 }}>
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>

            {/* Airbnb Clone */}
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img src={airbnb} alt="Airbnb Clone" className="img-fluid w-100" />
                </div>
                <h4><a href="https://github.com/eric-mwakazi/AirBnB_clone_v4" target="_blank" rel="noreferrer">Airbnb Clone</a></h4>
                <p>
                  Flask + MySQL clone of Airbnb, including CLI object manager. Built for Holberton's ALX Software Engineering program.
                </p>
                <a href="https://github.com/eric-mwakazi/AirBnB_clone_v4" target="_blank" rel="noopener noreferrer">
                  <button className="btn" style={{ marginTop: 15, backgroundColor: "#34b7a7", color: "white", fontSize: 20 }}>
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>

            {/* Skillstest */}
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img src={skills} alt="Skillstest Platform" className="img-fluid w-100" />
                </div>
                <h4><a href="https://github.com/eric-mwakazi/skillstest" target="_blank" rel="noreferrer">Skillstest</a></h4>
                <p>
                  Online platform for learning, collaboration, and tutoring. Designed to support learners, experts, and tutors with interactive content.
                </p>
                <a href="hhttps://github.com/eric-mwakazi/skillstest" target="_blank" rel="noopener noreferrer">
                  <button className="btn" style={{ marginTop: 15, backgroundColor: "#34b7a7", color: "white", fontSize: 20 }}>
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
