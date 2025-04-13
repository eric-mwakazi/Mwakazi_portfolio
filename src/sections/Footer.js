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
        ©mwakazi_eric {year}
        <br />
        Reach out through{" "}
        <a
          style={{ textDecoration: "none" }}
          className="text-success"
          href="https://wa.me/254768793923"
        >
          contact developer
        </a>
      </p>
    </footer>
  );
}

export default Footer;
