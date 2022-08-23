import React, { useState } from "react";
import "./style.css";
import CV from '../../assets/Claudia Gonzalez-Casales Software Dev CV.pdf';

function DownloadButton(onClick, buttonText) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

function openCv(){
  window.open(CV)
}

  return (
    <button
      className="download-bttn"
      to=""
      onClick={openCv}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      Download CV
    </button>
  );
}
export default DownloadButton;
