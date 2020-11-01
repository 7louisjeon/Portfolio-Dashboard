import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <a href="https://travo-fcd0f.web.app/" target="_blank">
        <div
          className="card"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "Travo.png"})`,
          }}
        >
          <h2 className="title">&lt;Travo&gt;</h2>
          <h2 className="content">
            Local event searching web application built with Google map, Google
            auth and Google places API.
          </h2>
        </div>
      </a>
      <a href="https://datafactory-3203f.web.app/" target="_blank">
        <div
          className="card"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "Datafactory.png"
            })`,
          }}
        >
          <h2 className="title">&lt;Datafactory&gt;</h2>
          <h2 className="content">
            Data visualization web application built from scratch with pure
            React, Javascript, MaterialUI and CSS.
          </h2>
        </div>
      </a>
      <a href="https://boxmovies-5977b.web.app/" target="_blank">
        <div
          className="card"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "Boxmovies.png"})`,
          }}
        >
          <h2 className="title">&lt;Boxmovies&gt;</h2>
          <h2 className="content">
            Box office movie searching web application built with React,
            Javascript, MaterialUI.
          </h2>
        </div>
      </a>
    </div>
  );
}

export default Projects;
