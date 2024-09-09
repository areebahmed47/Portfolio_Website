import React, { useState } from 'react';
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

function Contact() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();

    // Add access_key to formData
    const dataToSubmit = { ...formData, access_key: 'd0864104-5c71-4e71-b978-32df5ef7bb3f' };
    const json = JSON.stringify(dataToSubmit);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        alert(res.message);

        // Clear the form fields
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm always excited to take on new projects and collaborate with amazing people. If you have a project in mind or just want to chat about ideas, feel free to reach out!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>areebahmed1018@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>03118286352</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>Pak Colony, Karachi</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder='Enter Your Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder='Enter Your Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Write your Message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder='Enter Your Message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
