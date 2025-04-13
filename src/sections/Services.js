import React from "react";

function Services() {
  return (
    <div>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              As a skilled backend and DevOps engineer, I offer a wide range of software development and cloud infrastructure services tailored for modern, scalable, and secure digital systems.
            </p>
          </div>
          <div className="row">
            {/* RESTful APIs & Integrations */}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box iconbox-orange">
                <div className="icon">
                  <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f5f5f5" d="..." />
                  </svg>
                  <i className="bx bx-file" />
                </div>
                <h4><a href="#">API Development & Integration</a></h4>
                <p>
                  I build and integrate RESTful APIs with platforms like M-Pesa Daraja, PayPal, Stripe, and more — enabling powerful interactions across services and applications.
                </p>
              </div>
            </div>

            {/* Mobile App Backend APIs */}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box iconbox-pink">
                <div className="icon">
                  <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f5f5f5" d="..." />
                  </svg>
                  <i className="bx bx-tachometer" />
                </div>
                <h4><a href="#">Mobile Backend Development</a></h4>
                <p>
                  I provide backend APIs for mobile apps using Django REST and FastAPI. I also have basic experience with Flutter and React Native for full mobile-stack delivery.
                </p>
              </div>
            </div>

            {/* DevOps & Cloud Automation */}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-yellow">
                <div className="icon">
                  <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f5f5f5" d="..." />
                  </svg>
                  <i className="bx bx-layer" />
                </div>
                <h4><a href="#">DevOps & Infrastructure Automation</a></h4>
                <p>
                  From Dockerizing apps to automating CI/CD pipelines using Jenkins, GitHub Actions, Ansible, and Terraform — I help you deploy efficiently and scale reliably in cloud or on-prem environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
