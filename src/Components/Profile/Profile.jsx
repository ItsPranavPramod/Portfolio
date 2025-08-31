import React from 'react'
import './Profile.css'
import profile_img from './profile_img.svg'

const Profile = () => {
  return (
    <div className='profile'>
        <img src={profile_img} alt="" />
        <h1>I'm  <span>Pranav P P</span>, a BTech CSE student at SCTCE</h1>
        <p>I am an avid learner keen on learning and imrpoving my skills and to be a better version of myself at the end of the day.</p>
        <div className="prof-btns">
            <div className="prof-con">Connect With Me</div>
            <div className="prof-res">My Resume</div>
        </div>
    </div>
  )
}

export default Profile