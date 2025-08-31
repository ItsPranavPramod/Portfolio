import React from 'react'
import './About.css'
import profimg from './profile_img.svg'

const About = () => {
  return (
    <div className='About'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sec">
            <div className="about-left">
                <img src={profimg} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hey I am Pranav P P and I am a BTech CSE student at Sree Chithra Thirunal College of Engineering. I am an eager student keen on learning new and upcoming technologies and skills.</p>
                    <p>I have some past experience in poster and UI/UX design using Figma, I have volunteered and contributed in events. I also have some past experience in front end development with JavaScript and ReactJS. In fact I made this website your watching right now!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About