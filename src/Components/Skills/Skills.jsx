import React from 'react'
import './Skills.css'
import html from './html.svg'
import css from './css.svg'
import figma from './figma.svg'
import js from './js.svg'
import reactjs from './reactjs.svg'

const Skills = () => {
  return (
    <div>
        <h1 className='skills'>Skills</h1>
        <div className="images">
          <div className='skill-name'>
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
          <div className='skill-name'>
            <img src={css} alt="" />
            <p>CSS</p>
          </div>
          <div className='skill-name'>
            <img src={figma} alt="" />
            <p>Figma</p>
          </div>
          <div className='skill-name'>
            <img src={js} alt="" />
            <p>JavaScript</p>
          </div>
          <div className='skill-name'>
            <img src={reactjs} alt="" />
            <p>ReactJS</p>
          </div>
        </div>
    </div>
  )
}

export default Skills