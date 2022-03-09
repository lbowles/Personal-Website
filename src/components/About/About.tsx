import React from 'react'
import style from "./About.module.css"
import profile from "../../img/profile.png"

type Props = {}

const About = (props: Props) => {
  return (
    <div className={style.card} >
      <div className='rowContainer'>
        <img src={profile} className={style.profile}></img>
        <div style={{marginLeft:"25px"}}>
          <h2>About Me</h2>
          <h4>ada bn adsknad a adkand </h4>
        </div>
      </div>
    </div>
  )
}

export default About