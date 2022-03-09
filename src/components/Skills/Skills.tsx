import React from 'react'
import style from "./Skills.module.css"

type Props = {}

const Skills = (props: Props) => {
  return (
    <div>
      <h1>Skills</h1>
      <div className='rowContainer'>
        <div>
          <h2>Primary</h2>
          <div className='rowContainer'>
            <div className={style.accent}></div>
            <div style={{marginTop:"3px"}}>
              <h3>HTML5</h3>
              <h3>CSS</h3>
              <h3>React</h3>
              <h3>Java Scrip</h3>
              <h3>UI Design</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills