import './Contact.css';
import React ,{useRef}from 'react';
import {useState} from 'react';
import emailjs from '@emailjs/browser'

function Contact() {
  const form=useRef();
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sk36md9','template_tdp8fp5',form.current,'xMwOdRt5pgUk3Y4sn')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    console.log('Email:', email);
    console.log('Content:', content);

   
    setEmail('');
    setContent('');
  };
  return (
    <div className="contact-form">
      <form ref={form}onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
