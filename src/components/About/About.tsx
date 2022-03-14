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
          <h4>I’m a micro business owner and student studying computer science. I have alwaysed enjoyed all things tech, from robotics to programming. I am always trying widen my strengthen my skill set and am currently geting into the blockchain and web3 development space.</h4>
        </div>
      </div>
    </div>
  )
}

export default About