import React from "react";
import style from "./About.module.css";
import profile from "../../img/profile.jpg";
import twitter from "../../img/twitter.svg";
import github from "../../img/github.svg";
import mail from "../../img/mail.svg";
import linkedIn from "../../img/linkedIn.svg";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <div className={style.card}>
        <div className="rowContainer">
          <div className={style.verticalCenter}>
            <img src={profile} className={style.profile}></img>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <h2>About Me</h2>
            <h4>
              I'm an aspiring entrepreneur and tech enthusiast with a degree in
              computer science and business computing. My passion lies at the
              intersection of business and technology, specialising in software
              development and business analysis. I've honed my skills working on
              diverse projects from robotics, SaaS, web3 and recently the ReFi
              space. Real-world problem-solving and constant learning are at the
              heart of my work ethos, seeing every project as an opportunity to
              improve my skill set.
            </h4>
          </div>
        </div>
      </div>
      <div className="rowContainer" style={{ paddingTop: "15px" }}>
        <a
          target="_blank"
          href="https://twitter.com/npm_luko"
          style={{ paddingRight: "6px" }}
        >
          <img src={twitter} className={style.icon}></img>
        </a>
        <a
          target="_blank"
          href="https://github.com/lbowles"
          style={{ paddingRight: "6px" }}
        >
          <img src={github} className={style.icon}></img>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/luke-bowles-97401519a"
          style={{ paddingRight: "6px" }}
        >
          <img src={linkedIn} className={style.icon}></img>
        </a>
        <a target="_blank" href="mailto:luke@neonsolutions.co.za">
          <img src={mail} className={style.icon}></img>
        </a>
      </div>
    </div>
  );
};

export default About;
