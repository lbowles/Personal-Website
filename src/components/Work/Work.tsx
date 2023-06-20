import React from "react";
import style from "../Sections.module.css";
import linkIcon from "../../img/link.svg";
import neonLogo from "../../img/neon.png";
import traqLogo from "../../img/traq.png";
import onset from "../../img/onset.svg";
import alpha from "../../img/alpha.svg";

type Props = {};

const Work = (props: Props) => {
  const jobs = [
    {
      title: "Cell Traq",
      description:
        "System monitoring cathode efficiency in electrowinning plants.",
      date: "[2018-2019]",
      link: "https://masq.co.za/cell-traq/",
      color: "#8B90FE",
      logo: traqLogo,
    },
    {
      title: "Neon Analytics",
      description: "LinkedIn marketing analytics and reporting",
      date: "[2020-2022]",
      link: "https://analytics.neonsolutions.co.za",
      color: "#A98BFE",
      logo: neonLogo,
    },
    {
      title: "Onset Carbon",
      description: "Easy, publicly verifiable carbon offsetting",
      date: "[2022-ongoing]",
      link: "https://www.onsetcarbon.com/",
      color: "#CB8BFE",
      logo: onset,
    },
    {
      title: "Alpha Feed",
      description:
        "Using AI to surface the most significant AI related news of the day",
      date: "[2023-ongoing]",
      link: "https://alphafeed.xyz/",
      color: "#E4ABFF",
      logo: alpha,
    },
  ];

  return (
    <div>
      <h1>Work</h1>
      {jobs.map((project, index) => (
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

export default Work;
