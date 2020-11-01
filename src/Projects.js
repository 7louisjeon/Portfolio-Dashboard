import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <a href="https://travo-dbdbb.web.app/" target="_blank">
        <div
          className="card"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "Travo.jpg"})`,
          }}
        >
          <h2 className="title">&lt;Travo&gt;</h2>
          <h2 className="content">
            Local event searching web application built with Google map, Google
            auth, Google places API and frontend user customization
            functionality.
          </h2>
        </div>
      </a>
      <a href="https://datafactory-3203f.web.app/" target="_blank">
        <div
          className="card"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "Datafactory.jpg"
            })`,
          }}
        >
          <h2 className="title">&lt;Datafactory&gt;</h2>
          <h2 className="content">
            Interactive data visualization web application with 4 different type
            of graph results. Users can choose simple or comlex data types.
          </h2>
        </div>
      </a>
      <a href="https://boxmovies-5977b.web.app/" target="_blank">
        <div
          className="card"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "Boxmovies.jpg"})`,
          }}
        >
          <h2 className="title">&lt;Boxmovies&gt;</h2>
          <h2 className="content">
            Box office movie searching web application with search filter
            functionality. IMDB movies API, React, Javascript, CSS and
            MaterialUI.
          </h2>
        </div>
      </a>
    </div>
  );
}

export default Projects;
