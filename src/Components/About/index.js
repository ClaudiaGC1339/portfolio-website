import "./style.scss";
import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-background">
          <h1 className="about-header">About Me</h1>
        <div className="text-zone">
          <p>
           Hi, my name is Claudia. I am a 22 year old Spaniard living in London. 
           I am fluent in both Spanish and English.
           <br/>
           <br/>
           Before joining the School of Code, I completed a BA in Video Game Art & Design.
           My journey into tech started with some basic lessons in Java and I soon realised
           that I enjoyed Software Development and problem solving. I joined the School of Code 
           to pursue a career in tech. 
           <br/>
           <br/>
           I have found that I enjoy both frontend and backend and I am able to combine my 
           artistic skills and knowledge as well as my recently developed technical skillset for an all-rounded 
           fullstack view. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
