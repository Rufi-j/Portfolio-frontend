import React from 'react';
import "./skills.css";
import { CheckCircle } from '@mui/icons-material';

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills_content">
        <h1>Skills</h1>
        <p className="sub_heading">My technical level</p>
        <div className="fullstack">
          <div className="stack">
            <h3>Frontend developer</h3>
            <div className="skill_breakdown">  
              <div className="skill_item">
                <div className="line_div">
                  <CheckCircle className="icon" /><p>HTML</p> 
                  <span className="competency">Advanced</span>
                </div>
                <div className="line_div">
                  <CheckCircle className="icon"/><p>CSS</p>
                  <span className="competency">Intermediate</span>
                </div>
                <div className="line_div">
                  <CheckCircle className="icon"/><p>JavaScript</p>
                  <span className="competency">Intermediate</span>
                </div>
              </div>
              <div className="skill_item">
                <div className="line_div">
                  <CheckCircle className="icon"/><p>Bootstrap</p>
                  <span className="competency">Intermediate</span>
                </div>
                <div className="line_div">
                  <CheckCircle className="icon"/><p>React</p>
                  <span className="competency">Advanced</span>
                </div>
                <div className="line_div">
                  <CheckCircle className="icon"/><p>Git</p>
                  <span className="competency">Intermediate</span>
                </div>   
              </div>
            </div>
          </div>
          <div className="stack">
            <h3>Backend developer</h3>
            <div className="skill_breakdown">
              <div className="skill_item">
                <div className="line_div">
                  <CheckCircle className="icon"/><p>NodeJS</p>
                  <span className="competency">Intermediate</span>
                </div>
                <div className="line_div">
                  <CheckCircle className="icon"/><p>Express</p>
                  <span className="competency">Intermediate</span>
                </div>
                <div className="line_div">
                  <CheckCircle className="icon"/><p>MongoDB</p>
                  <span className="competency">Intermediate</span>
                </div> 
              </div>
              <div className="skill_item">
                <div className="line_div">
                  <CheckCircle className="icon"/><p>Python</p>
                  <span className="competency">Basic</span>
                </div>
                <div className="line_div">
                  <CheckCircle className="icon"/><p>SQL</p>
                  <span className="competency">Intermediate</span>
                </div>
                <div className="line_div">
                  <CheckCircle className="icon"/><p>Firebase</p>
                  <span className="competency">Basic</span>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}
