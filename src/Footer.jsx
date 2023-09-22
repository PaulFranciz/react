import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <a
          href="https://www.linkedin.com/in/paul-francis-%F0%9F%92%BB-123281260/"
          target="_blank"
          className="footer-links"
        >
          <img
            src="public/Linkedin.jpg"
            alt="LinkedIn Icon"
            className="social-media-image-two"
          />
        </a>
        <a
          href="https://twitter.com/paul_franciz"
          target="_blank"
          className="footer-links"
        >
          <img
            src="public/Twitter Icon.png"
            alt="Twitter Icon"
            className="social-media-image-two"
          />
        </a>
        <a
          href="https://github.com/PaulFranciz"
          target="_blank"
          className="footer-links"
        >
          <img
            src="public/Github Icon.png"
            alt="Github Icon"
            className="social-media-image-two"
          />
        </a>
      </div>
    </footer>
  );
}
