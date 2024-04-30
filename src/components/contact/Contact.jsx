import React, { useRef, useState } from 'react';
import "./contact.css";
import axios from "axios";


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email sent. Thank you!");
    
  

    axios.get("http://localhost:4000/", {
      params: {
        name,
        email,
        subject,
        message,
      },
    })
    .then(() => {
      console.log("success");
    })
  };


  return (
    <div className="c" id="contact">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
              <h1 className="c-title">Let's discuss your project</h1>
              <div className="c-info">
                <div className="c-info-item">
                  <img 
                    src="assets/phone.png"
                    alt=""
                    className="c-icon"
                  />
                  +2348051817820
                </div>
                <div className="c-info-item">
                  <img className="c-icon" src="assets/email.png" alt="" />
                  rufaitaiye@gmail.com
                </div>
                <div className="c-info-item">
                  <img className="c-icon" src="assets/address.png" alt="" />
                  1 Shola Bodunrin Close, Ilorin, Nigeria
                </div>
              </div>
            </div>
            <div className="c-right">
              <p className="c-desc">
                  <b>What's your story?</b> Get in touch. Always available for 
                  freelancing if the right project comes along. 
              </p>
              <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Subject" name="user_subject" onChange={(e) => setSubject(e.target.value)} />
                    <input type="email" placeholder="Email" name="user_email" onChange={(e) => setEmail(e.target.value)} />
                    <textarea rows="5" placeholder="Message" name="message" onChange={(e) => setMessage(e.target.value)} />
                    {/* <button>Submit</button> */}
                    <input type="submit" className="sub-mit" />
              </form>
            </div>
        </div>
    </div>
  );
};

export default Contact