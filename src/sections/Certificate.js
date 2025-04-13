import React from "react";
import alx from "../assets/certificate.png";
import ceh from "../assets/ceh.png";
import ibm from "../assets/ibm.png";


function Certificate() {
  return (
<div>
<section id="certificates" className="certificates">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Browse My Certifications</h2>
      <p>
        Course and programmes I have completed and earned a certificate.
      </p>
    </div>
    <div className="row">
        <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box iconbox-pink">
                <div className="icon">
                <img src={alx} alt="ALX Certificate" className="img-fluid w-100" />
                </div>
                <h4><a href="https://www.alxafrica.com/programme/back-end-web-development/">ALX Software Engineering Course Completion Certificate</a></h4>
                <a href="https://www.alxafrica.com/programme/back-end-web-development/" target="_blank" rel="noopener noreferrer">
                  <button className="btn" style={{ marginTop: 15, backgroundColor: "#34b7a7", color: "white", fontSize: 20 }}>
                    View Programme
                  </button>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box iconbox-pink">
                <div className="icon">
                <img src={ceh} alt="cisco ceh" className="img-fluid w-100" />
                </div>
                <h4><a href="https://www.netacad.com/courses/ethical-hacker">Cisco CEH Training.</a></h4>
                <a href="https://www.credly.com/earner/earned/badge/99e50824-485f-420d-94e9-2ad1906ccf5a" target="_blank" rel="noopener noreferrer">
                  <button className="btn" style={{ marginTop: 15, backgroundColor: "#34b7a7", color: "white", fontSize: 20 }}>
                    View Badge on Credly
                  </button>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box iconbox-pink">
                <div className="icon">
                <img src={ibm} alt="cisco ceh" className="img-fluid w-100" />
                </div>
                <h4><a href="https://www.ibm.com/training/badge/cybersecurity-fundamentals/">Cybersecurity Fundamentals Certificate</a></h4>
                <a href="https://www.ibm.com/training/badge/cybersecurity-fundamentals/" target="_blank" rel="noopener noreferrer">
                  <button className="btn" style={{ marginTop: 15, backgroundColor: "#34b7a7", color: "white", fontSize: 20 }}>
                    View Course
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

export default Certificate;
