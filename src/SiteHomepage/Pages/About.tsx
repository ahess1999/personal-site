import React from "react";
import "../StyleSheets/About.css";
import Particle from "../Components/Particle";
import Austin from "./AustinHess.jpg";
import { Csharp } from "@styled-icons/simple-icons/Csharp";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Java } from "@styled-icons/simple-icons/Java";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Python } from "@styled-icons/simple-icons/Python";
import { Typescript } from "@styled-icons/simple-icons/Typescript";

const About: React.FC = () => {
  return (
    <div>
      <Particle />
      <div className="aboutcontainer">
        <div id="About" className="abouttag">
          About me
        </div>
        <div className="desca">
          Software Engineer currently employed at Paycom in Oklahoma City, OK. I
          atteneded Kansas State University where I received my Bachelor's Degree in
          Computer Science. I've been programming for over 3 years and I'm
          constantly trying to learn something new everyday.
          <br />
          <br />
          I'm a hard-working, well-organized individual who shows attention to
          every detail.
          <br /> Big NBA fan and everything basketball, getting outside and
          enjoying life!
          <br />
          <br />
          I'm interested in just about anything programming related. I have
          experience in web development as well as developing software that not
          only looks good, but is highly functional too.
          <img id="aboutimage" src={Austin} alt={Austin}></img>
        </div>

        <div className="languages">
          Languages
          <div className="langgrid">
            <Csharp
              style={{ width: "40px", height: "40px", paddingTop: "10px" }}
            />
            <Css3
              style={{ width: "40px", height: "40px", paddingTop: "10px" }}
            />
            <Html5
              style={{ width: "40px", height: "40px", paddingTop: "10px" }}
            />
            <Java
              style={{ width: "40px", height: "40px", paddingTop: "10px" }}
            />
            <Javascript
              style={{ width: "40px", height: "40px", paddingTop: "10px" }}
            />
            <Mysql
              style={{ width: "40px", height: "40px", paddingTop: "10px" }}
            />
            <Python
              style={{ width: "40px", height: "40px", paddingTop: "10px" }}
            />
            <Typescript
              style={{ width: "40px", height: "40px", paddingTop: "10px" }}
            />
          </div>
        </div>
        <img id="aboutimagem" src={Austin} alt={Austin}></img>
      </div>
    </div>
  );
};

export default About;
