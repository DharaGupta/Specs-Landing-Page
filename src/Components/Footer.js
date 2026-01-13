import React from "react";
import { useState } from "react";
import useScrollReveal from "./useScrollReveal";

const Footer = () => {
const[formData, setFormData] = useState({name: "", email: ""});
const[errors, setErrors] = useState({});
const[status, setStatus] = useState("idle");

const handleChange = (e) => {
  const {id, value} = e.target;
  setFormData({...formData, [id]: value});
  if(errors[id]){
    setErrors({...errors, [id]: ""});
  }
}; 

const handleSubmit = (e) => {
e.preventDefault();
let validationErrors = {};
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!formData.email){
  validationErrors.email = "EMAIL IS REQUIRED";
}
else if(!emailPattern.test(formData.email)){
  validationErrors.email = "PLEASE ENTER VALID EMAIL";
}

if(Object.keys(validationErrors).length>0){
  setErrors(validationErrors);
  setStatus("error");
}
else{
  setErrors({});
  setStatus("success");
  setFormData({name: "", email: ""});

  setTimeout(() => setStatus("idle"), 5000);
}
};

useScrollReveal();

return(
 <div className="Footer">
    <div className="FooterImageContainer">
      <div className="FooterImage">
        <img src="image/Footer img.svg" />
      </div>
    </div>

    <div className="contact" className="contact fade-up">
      <img src = "image/Footericon1.svg" />
      <p>JOIN THE COMMUNITY</p>
    </div>
   
    <div className="footerText" className="footerText fade-up">
        Experience the future now with elegance and explore the world in style.
    </div> 

    <div className="form">
     <form className="glassBox" onSubmit={handleSubmit}>
      BE THE FIRST TO KNOW
        <div className="fieldNsubmit">

           <div className="field1">
            <label htmlFor="name">NAME</label>
            <input
            id = "name" 
            type="text" 
            className="fieldBox" 
            placeholder="YOUR NAME HERE" 
            value={formData.name}
            onChange={handleChange}
            />
            {errors.name && <span className="errorText">{errors.name}</span>}
           </div>

           <div className="field1">
            <label htmlFor="email">EMAIL</label>
            <input
            id = "email" 
            type="email" 
            className="fieldBox" 
            placeholder="YOUR EMAIL HERE" 
            value={formData.email}
            onChange={handleChange}
            />
            {errors.email && <span className="errorText">{errors.email}</span>}
           </div>

          <button type="submit" className="submitButton">SUBMIT</button>
          
          {status === "success" && (
            <div className="successMessage">THANK YOU! YOU'RE ON THE LIST.</div>
          )}
        </div>
    </form>

    </div>
    
    <div className="socialLinks">
      <p className="socialText">SOCIAL LINKS</p>

      <div className="List">

        <div className="oneBlock">
          <div className="nameNarrow">
            <p>INSTAGRAM</p>
            <img src = "image/arrowSocial.svg" />
          </div>
          <div className="divider" />
        </div>

        <div className="oneBlock">
          <div className="nameNarrow">
            <p>TWIITER</p>
            <img src = "image/arrowSocial.svg" />
          </div>
          <div className="divider" />
        </div>

        <div className="oneBlock">
          <div className="nameNarrow">
            <p>FACEBOOK</p>
            <img src = "image/arrowSocial.svg" />
          </div>
          <div className="divider" />
        </div>

        <div className="oneBlock">
          <div className="nameNarrow">
            <p>MEDIUM</p>
            <img src = "image/arrowSocial.svg" />
          </div>
          <div className="divider" />
        </div>
      </div>

      

    </div>
    
</div>
);

};

export default Footer;