import React from "react";
import style from "../Sections.module.css";
import linkIcon from "../../img/link.svg";
import neonLogo from "../../img/neon.png";
import traqLogo from "../../img/traq.png";
import klima from "../../img/klima.png";
import punk from "../../img/punk.png";
import clock from "../../img/clock.svg";
import onset from "../../img/onset.svg";
import westernCape from "../../img/westernCape.svg";
import walletUsage from "../../img/walletUsage.svg";
import solarSystems from "../../img/solarSystems.svg";
import simpleLearningTime from "../../img/simpleLearningTime.png";
import arc from "../../img/ARC.png";

type Props = {};

const Experience = (props: Props) => {
  const projects = [
    {
      title: "Simple Learning Time",
      description:
        "An educational app to teach students how to tell time. It is used in multiple schools across South Africa and several other countries.",
      date: "[2016]",
      link: "https://apps.apple.com/za/app/simple-learning-time/id1096092596",
      color: "#C6FF99",
      logo: simpleLearningTime,
    },
    {
      title: "WRO 2016 Senior Open Category",
      description:
        "Our team placed 9th out of 380 international tertiary teams in the Advanced Robotics Challenge at the World Robot Olympiad in Costa Rica. The challenge was to build a robot that plays a 3D Tetris-like game",
      date: "[2016]",
      link: "https://docs.google.com/document/d/1lOSYYLLtHfKbfC3GePSzaI4h3GZ6m7QN2lN7buuLsyE/edit?usp=sharing",
      color: "#C0F89E",
      logo: arc,
    },
    {
      title: "WRO 2017 Advanced Robotics Challenge",
      description:
        "Team Infinity placed 15th out of 30 teams in the Senior Open Category at the World Robot Olympiad in New Delhi, India. Our project was developing the concept of an autonomous fleet of robots to clean up waste in large bodies of water",
      date: "[2017]",
      link: "https://drive.google.com/file/d/1Gt3sx2SJ0AIhwbU1TJDCcwYEnEDOIPP1/view?usp=sharing",
      color: "#A5F89E",
      logo: arc,
    },
    {
      title: "Klima Incoom",
      description: "Simple staking rewards calculator for KlimaDAO",
      date: "[2021]",
      link: "https://klimaincoom.luko.co.za/",
      color: "#8EF0B5",
      logo: klima,
    },
    {
      title: "Substance Use Disorder Assessment Tool",
      description:
        "Standardised tool for assessing substance use disorders in the Western Cape (South Africa) - Final year Comp Sci project",
      date: "[2022]",
      color: "#7BE7A6",
      link: "https://thundering-morning-845.notion.site/WC-SUDAT-User-Manual-fbec5295cae441e1a0e5779a79e536f7",
      logo: westernCape,
    },
    {
      title: "Wallet Usage",
      description:
        "Simple tool showing wallet activity, made to test development using ChatGPT",
      date: "[2022]",
      link: "https://walletusage.luko.co.za/",
      color: "#71DA9A",
      logo: walletUsage,
    },
  ];

  return (
    <div>
      <h1>Side Projects</h1>
      {projects.map((project, index) => (
        <div
          id="out"
          className="rowContainer moveUp"
          style={{ paddingTop: index > 0 ? "12px" : "5px", width: "100%" }}
        >
          <div>
            <div
              className="point"
              id="point"
              style={{ backgroundColor: project.color }}
            ></div>
          </div>
          <div>
            <div className="rowContainer">
              <img src={project.logo} className={style.logo}></img>
              <h2>{project.title}</h2>
            </div>
            <h3 className={style.infoText}>{project.description}</h3>
            <h3 className={style.date}>{project.date}</h3>
          </div>
          <div style={{ float: "right", marginLeft: "auto", marginRight: "0" }}>
            {project.link ? (
              <>
                <a target="_blank" href={project.link}>
                  <img src={linkIcon} className={style.icon}></img>
                </a>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
