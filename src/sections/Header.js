import React from "react";

function Header() {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="logo">
            <a href="index.html">
              <span>ERIC</span>
              <span style={{ color: "#34b7a7" }}>Mwakazi</span>
            </a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}

          {/* .nav-menu */}
          <div className="header-social-links">
            <a 
              href="https://www.linkedin.com/in/eric-mwakazi" 
              className="linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="icofont-linkedin" />
            </a>
            <a 
              href="https://github.com/eric-mwakazi" 
              className="github" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="icofont-github" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
