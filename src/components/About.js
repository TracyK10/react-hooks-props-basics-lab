import React from "react";

function About({bio, links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={links.github}>{links.github}</a>
      <a href={links.linkedin}>{links.linkedin}</a>
    </div>
  );
}

export default About;
