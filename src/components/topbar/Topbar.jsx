import "./topbar.css";
import React, {useState} from "react";

export default function Topbar() {
  const [active, setActive] = useState("nav_menu");

  const navToggle = () => {
    active === "nav_menu" ? setActive("nav_menu nav_active") : setActive("nav_menu");
  };

  return (
    <div className="topbar">
      <nav className="nav">
        <a href="#" className="brand">Rufai</a>
        <ul className={active}>
          <li className="nav_item"><a href="#aboutme">Home</a></li>
          <li className="nav_item"><a href="#skills">Skills</a></li>
          <li className="nav_item"><a href="#projectlist">Projects</a></li>
          <li className="nav_item"><a href="#contact">Contact</a></li>
        </ul>
        <div onClick={navToggle} className="hamburger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>

      </nav>
    </div>
        
  )
}
