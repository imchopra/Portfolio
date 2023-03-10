import "./FormStyles.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


const Form = () => {
 
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ntuzz18', 'template_9dn1zg8', form.current, '1Mo--g_huv5J3u5B_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      Swal.fire({
        icon: "success",
        title: 'Message Sent',
      })

      setTimeout( 
  function() {
    window.location.reload(true);
  },2000);
      
  };
  return (
    <div className="form">
    
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required="true" />
      <label>Email</label>
      <input type="email" name="user_email" required="true" />
      <label>Message</label>
      <textarea rows="6" name="message" id="message" required="true" placeholder="Enter your message here"/>
      <button className="btn">Submit</button>
    </form>
    </div>
  )
}

export default Form
