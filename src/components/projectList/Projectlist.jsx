import React from 'react';
import "./projectlist.css";
import Project from "../project/Project";
import { products } from "../../data";

function Projectlist() {
  return (
    <div className="projectlist" id="projectlist">
      <div className="projectlist-container">
        <div className="pl-texts">
          <h1 className="pl-title">Create, Inspire and explore</h1>
          <p className="pl-desc">
            This is a creative portfolio that your work has been waiting for 
            Beautiful homes, stunning portfolio styles & a whole lot more
          </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Project key={item.id} img={item.img} link={item.link} />
          ))}
          
        </div>
      </div>
      
    </div>
  )
}

export default Projectlist