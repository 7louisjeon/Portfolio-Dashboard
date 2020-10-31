import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="cards">
        <a href="https://travo-fcd0f.web.app/" target="_blank">
          <div
            className="card"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "Travo.png"})`,
            }}
          >
            <h2 className="title">&lt;Travo&gt;</h2>
            <h2 className="content">
              Travo is a local event searching web application with Google map,
              Google auth and Google places API.
            </h2>
          </div>
        </a>
        <a href="" target="_blank">
          <div
            className="card"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "Dataspace.png"
              })`,
            }}
          >
            <h2 className="title">&lt;DataSpace&gt;</h2>
          </div>
        </a>
        <a href="" target="_blank">
          <div
            className="card"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "Neckflips.png"
              })`,
            }}
          >
            <h2 className="title">&lt;Neckflips&gt;</h2>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
