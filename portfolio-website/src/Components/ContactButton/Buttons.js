import React, { useState } from "react";
import "./button.css";


function ContactButton() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
      <button
        className="contact-bttn"
        to="contact"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        primary="true"
        dark="true"
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      >
        Let's Connect
      </button>
  );
}
export default ContactButton;
