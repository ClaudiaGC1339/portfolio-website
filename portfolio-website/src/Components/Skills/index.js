import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGithub,
  SiReact,
  SiPostgresql,
  SiNpm,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import "./style.css";

function Skills() {
  return (
    <div className="container">
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-wrapper">
          <div className="skills-card">
            <h1>
              <SiHtml5 style={{ color: "#ff6e40" }} />
            </h1>
            <h4 style={{ color: "#ff6e40" }}>Html5</h4>
          </div>
          <div className="skills-card">
            <h1>
              <SiCss3 style={{ color: "#1e88e5" }} />
            </h1>
            <h4 style={{ color: "#1e88e5" }}>Css3</h4>
          </div>
          <div className="skills-card">
            <h1>
              <SiJavascript style={{ color: "#ffeb3b" }} />
            </h1>
            <h4 style={{ color: "#ffeb3b" }}>Javascript</h4>
          </div>
          <div className="skills-card">
            <h1>
              <SiGithub style={{ color: "#4db6ac" }} />
            </h1>
            <h4 style={{ color: "#4db6ac" }}>Github</h4>
          </div>
          <div className="skills-card">
            <h1>
              <SiReact style={{ color: "#40c4ff" }} />
            </h1>
            <h4 style={{ color: "#40c4ff" }}>React</h4>
          </div>
          <div className="skills-card">
            <h1>
              <SiMongodb style={{ color: "#b388ff" }} />
            </h1>
            <h4 style={{ color: "#b388ff" }}>MongoDb</h4>
          </div>
          <div className="skills-card">
            <h1>
              <SiPostgresql style={{ color: "#fbc02d" }} />
            </h1>
            <h4 style={{ color: "#fbc02d" }}>Postgres</h4>
          </div>
          <div className="skills-card">
            <h1>
              <SiNpm style={{ color: "#9ccc65" }} />
            </h1>
            <h4 style={{ color: "#9ccc65" }}>Npm</h4>
          </div>
          <div className="skills-card">
            <h1>
              <SiNodedotjs style={{ color: "#ff5252" }} />
            </h1>
            <h4 style={{ color: "#ff5252" }}>NodeJs</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
