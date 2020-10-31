import React from "react";
import "./Icons.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Icons() {
  return (
    <div className="icons">
      <h3>Web Developer</h3>
      <a href="https://github.com/7louisjeon" target="_blank">
        <GitHubIcon
          style={{
            fontSize: "40px",
            marginRight: "10px",
            color: "white",
            cursor: "pointer",
          }}
        />
      </a>
      <a href="https://resume.io/r/wsJ6qvccV" target="_blank">
        <DescriptionIcon
          style={{
            fontSize: "40px",
            marginRight: "10px",
            color: "white",
            cursor: "pointer",
          }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/eunbae-jeon-b70b14192/"
        target="_blank"
      >
        <LinkedInIcon
          style={{ fontSize: "40px", color: "white", cursor: "pointer" }}
        />
      </a>
    </div>
  );
}

export default Icons;
