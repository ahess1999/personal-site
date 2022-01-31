import React from "react";
import "../StyleSheets/Contact.css";
import Particle from "../../Shared/Particle";

const Contact: React.FC = () => {
  return (
    <div>
      <Particle />
      <div className="contactcontainer">
        <h1 id="Contact" className="contlabel">
          Get in touch with me
        </h1>
        <div className="descc">
          I'm interested in everything computer science, especially web
          development. So if you have any questions or are interested in
          contacting me about an opportunity, my inbox is always open!
        </div>

        <a href="mailto:austinhess1999@gmail.com" className="emailbutton">
          Email Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
