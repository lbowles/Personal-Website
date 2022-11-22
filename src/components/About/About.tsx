import React from 'react'
import style from './About.module.css'
import profile from '../../img/profile.jpg'
import twitter from '../../img/twitter.svg'
import github from '../../img/github.svg'
import mail from '../../img/mail.svg'
import linkedIn from '../../img/linkedIn.svg'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
      <div className={style.card}>
        <div className="rowContainer">
          <div className={style.verticalCenter}>
            <img src={profile} className={style.profile}></img>
          </div>
          <div style={{ marginLeft: '15px' }}>
            <h2>About Me</h2>
            <h4>
              I am currently a small business owner and student studying
              computer science. I have always enjoyed all things tech, from
              robotics to programming. I am constantly trying to strengthen my
              skill set and am currently getting into the blockchain and web3,
              more specifically the Regenerative Finance, development space.
            </h4>
          </div>
        </div>
      </div>
      <div className="rowContainer" style={{ paddingTop: '15px' }}>
        <a
          target="_blank"
          href="https://twitter.com/npm_luko"
          style={{ paddingRight: '6px' }}
        >
          <img src={twitter} className={style.icon}></img>
        </a>
        <a
          target="_blank"
          href="https://github.com/lbowles"
          style={{ paddingRight: '6px' }}
        >
          <img src={github} className={style.icon}></img>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/luke-bowles-97401519a"
          style={{ paddingRight: '6px' }}
        >
          <img src={linkedIn} className={style.icon}></img>
        </a>
        <a target="_blank" href="mailto:luke@neonsolutions.co.za">
          <img src={mail} className={style.icon}></img>
        </a>
      </div>
    </div>
  )
}

export default About
