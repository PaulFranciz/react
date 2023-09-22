import React from "react";

export default function Content() {
  return (
    <section className="container">
      <section className="content-wrapper">
        <div className="profile-intro">
          <h1 className="name">Paul Francis</h1>
          <h3 className="subtitle">Frontend Developer</h3>
        </div>
        <div className="icons-container">
          <a
            href="mailto:pauledet339a@gmail.com"
            target="_blank"
            className="social-media-links"
          >
            <img
              src="public/Mail.png"
              alt="An Email Icon"
              className="social-media-image-one"
            />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/paul-francis-%F0%9F%92%BB-123281260/"
            target="_blank"
            className="social-media-links"
          >
            <img
              src="public/linkedin.png"
              alt="LinkedIn Icon"
              className="social-media-image-one"
            />
            LinkedIn
          </a>
        </div>
      </section>
      <section className="profile-main">
        <div className="info-container">
          <h2 className="subheadings">About</h2>
          <p className="info">
            I am a passionate frontend developer with a love for
            problem-solving. My resilient nature fuels my enthusiasm for
            creating elegant solutions to complex problems.
          </p>
          <h2 className="subheadings">Interests</h2>
          <p className="info">
            I'm an avid reader, a professional chef who embraces the art of
            culinary creation, an entrepreneur, creative writer, and
            fashionista.
          </p>
        </div>
      </section>
    </section>
  );
}
