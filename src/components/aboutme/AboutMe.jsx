
import React from 'react';
import "./aboutme.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function AboutMe() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "UI Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Rufai Taiye</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#skills">
            <img src="assets/arrow-down-3101.png" alt="" />
        </a>
      </div>
        
    </div>
  )
}
