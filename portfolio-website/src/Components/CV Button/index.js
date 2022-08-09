import React, { useState } from "react";
import "./style.css";

function DownloadButton(onClick, buttonText) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <button
      className="download-bttn"
      to=""
      onClick={onClick}
      // smooth={true}
      // duration={500}
      // spy={true}
      // exact="true"
      // offset={-80}
      // primary="true"
      dark="true"
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      Download CV
    </button>
  );
}
export default DownloadButton;
