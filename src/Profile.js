import React from "react";
import "./Profile.css";
import Icons from "./Icons";

function Profile() {
  return (
    <div className="profile">
      <img
        src={process.env.PUBLIC_URL + "Eunbae_Jeon.jpg"}
        alt=""
        className="img1"
      />
      <div className="part1">
        <h2>Eunbae Jeon</h2>
        <h3>Web Developer</h3>
      </div>
      <div className="part2">
        <p>
          Hi, my name is Eunbae and I am a web developer from South Korea living
          in Vancouver.
        </p>
        <div className="part2Bottom">
          <Icons />
          <a href="mailto:wjss5115@gmail.com">
            <button className="btn">Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
