import React from 'react'
import './Projects.css'
import catapp from './catphotoapp.png'
import mcode from './morsecode.png'

const Projects = () => {
  return (
    <div className='project-container'>
        <div className="project-title">
            <h1>Past Projects</h1>
        </div>
        <div className="ss-container">
            <div className="catapp">
                <img src={catapp} alt="" />
                <p>Cat Photo WebApp</p>
            </div>
            <div className="morsecode">
                <img src={mcode} alt="" />
                <p>Morse Code Translator</p>
            </div>
        </div>
    </div>
  )
}

export default Projects