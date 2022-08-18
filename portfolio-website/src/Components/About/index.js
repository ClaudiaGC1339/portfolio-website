import "./style.scss";
import React from "react";
// import DownloadButton from "../CV Button";



const About = () => {
  return (
    <div className="container">
      <div className="about-background">
        <div className="text-zone">
          <div className="about-container">
            <h1 className="about-header">About Me</h1>
            <p>
              I am a motivated software engineer with the ability to challenge
              others and myself to develop solutions to problems and situations.
              I am driven by growth within this field of work. I have shown
              strong leadership skills with an understanding of both individual
              and team goals to collaboratively work towards a common goal. My
              overall goal as a software engineer is to simplify solutions to
              technology’s complex problems and use the knowledge I already
              possess to keep improving the quality and ease of work through
              software. I also have strong organizational skills that allow
              efficient progression and division of tasks amongst my peers and
              myself. My objective is to obtain a position that will allow me to
              utilize and apply my experiences to achieve any task or goal that
              is set ahead of me.
            </p>
        
            {/* <DownloadButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
