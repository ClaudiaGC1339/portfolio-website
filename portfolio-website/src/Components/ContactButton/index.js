import React, { useState } from "react";
import "./style.css";


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
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      >
        Let's Connect
      </button>
  );
}
export default ContactButton;
