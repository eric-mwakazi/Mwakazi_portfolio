import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer style={{ marginTop: "auto" }}>
      <hr />
      <p
        style={{
          textAlign: "center",
          color: "black",
          bottom: "0",
        }}
      >
        <a href="https://github.com/eric-mwakazi/"
        target="_blank" rel="noreferrer">©mwakazi_eric </a>{year}
        <br />
        Reach out through{" "}
        <a
          style={{ textDecoration: "none" }}
          className="text-success"
          href="https://wa.me/254706570456"
        >
          contact developer
        </a>
      </p>
    </footer>
  );
}

export default Footer;
