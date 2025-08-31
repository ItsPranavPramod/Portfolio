import React from 'react'
import './Contact.css'
import gmail from './gmail.svg'
import whatsapp from './whatsapp.svg'
import linkedin from './linkedin.svg'

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-sec">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Hey I'm currently open to any projects, events and internship oppurtunities. Why don't we connect and let me know!</p>
                    <div className="contact-det">
                        <div className="email">
                            <img className='icon' src={gmail} alt="" />
                            <p>pranavdevanivas@gmail.com</p>
                        </div>
                        <div className="whatsapp">
                            <img className='icon' src={whatsapp} alt="" />
                            <p>+91 9868632969</p>
                        </div>
                        <div className="linkedin">
                            <img className='icon' src={linkedin} alt="" />
                            <p>pranav-p-pramod</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" name='email' />
                    <label htmlFor="">Enter Your Message Here</label>
                    <textarea name="message" rows={8} ></textarea>
                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact