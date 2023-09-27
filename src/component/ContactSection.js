import React, { useState } from 'react';
import TitleSection from './TitleSection';
import axios from 'axios';
const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendReq, setSendReq] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return alert('Please fill all input ');
    }
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      return alert('Email is not valid');
    }
    setSendReq(true);
    const data = await axios.post('/api/hello', {
      name,
      email,
      message,
    });
    console.log('data send');
    console.log(data);
    console.log('data send');
  };
  return (
    <div id='contact'>
      <TitleSection
        title={'Contact'}
        subTitle={
          "Got a question or want to collaborate? Use the form below, and I'll get back to you soon."
        }
      />
      <div className='bg_offwhite '>
        <div className='container '>
          <div className='ContactSection_title'>Contact Details</div>
          <div className='ContactSection'>
            <form className='contactform'>
              <div className='input_flex'>
                <label htmlFor=''>Name </label>
                <input
                  type='text'
                  value={name}
                  placeholder='Enter Your name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='input_flex'>
                <label htmlFor=''>Email </label>
                <input
                  type='text'
                  placeholder='Enter Your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='input_flex_Message'>
                <label htmlFor=''>Message </label>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='3'
                  placeholder='Message...'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {sendReq ? (
                <button className='contact_btn_disabled'> Please wait</button>
              ) : (
                <button
                  className='contact_btn'
                  // disabled={sendReq}
                  onClick={(e) => submitHandler(e)}
                >
                  Submit
                </button>
              )}
            </form>
            <div className='contact_detail'>
              <div className='contact_col'>
                <div className='label'>Quick Links</div>
                <div className='link'>
                  <a href=''>Home</a>
                  <a href=''>About</a>
                  <a href=''>Skills</a>
                  <a href=''>Project</a>
                </div>
              </div>

              <div className='contact_col'>
                <div className='label'>Email Address</div>
                <div className='link'>msdesai32@gmail.com</div>
              </div>

              <div className='contact_col'>
                <div className='label'>Mobile Contact</div>
                <div className='link'>9372191971</div>
              </div>

              <div className='contact_col'>
                <div className='label'>Based In</div>
                <div className='link'>
                  Virar East, Mumbai,
                  <br /> Maharastra - India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
