import React from "react";
import Skills from "./Skills";
import aboutimg from "../images/hero_bg.jpeg";

function About() {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>
              👋 Hi, I'm <b>Eric Mwakazi</b> — a backend developer skilled in Python, Flask, and Node.js,
              with experience building scalable web applications and APIs.
              I’m proficient in DevOps tools like <b>Docker, Kubernetes, Jenkins, Ansible, Terraform, Prometheus, and Grafana</b>,
              enabling efficient CI/CD, automation, and monitoring. 
              I also work well in Agile teams, and manage both SQL and NoSQL databases.
              A recent <b>ALX software engineering graduate</b>,
              I have hands-on experience with <b>AWS and Azure</b>, 
              and I’m passionate about delivering cloud-native, high-performance solutions.
            </p>

          </div>
          <div className="row">
            <div className="col-lg-4">
              <img src={aboutimg} className="img-fluid" alt="devriz" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Backend Developer &amp; DEVOPS Enthuast</h3>
              <p className="font-italic">
                Below is a small biograph of myself. I can describe myself as
                young, competent and energetic person who is ready to learn and
                adapt to changes in the industry
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Name : </strong> Eric Mwakazi
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Website : </strong>
                      <a href=" https://mwakazieric.vercel.app" target="_blank">
                      https://mwakazieric.vercel.app
                      </a>
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Phone :</strong> +254706570456
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>City : </strong>Nairobi, KENYA
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Nationality :</strong> Kenyan
                    </li>

                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Email : </strong> mwakazieric@gmail.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>github : </strong>{" "}
                      <a
                        href="https://github.com/hamisirizwan"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://github.com/eric-mwakazi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
}

export default About;
