import React from "react";
import style from "../Sections.module.css";
import linkIcon from "../../img/link.svg";
import punk from "../../img/punk.png";
import clock from "../../img/clock.svg";
import blackHoles from "../../img/blackHoles.svg";
import kaleidoscopes from "../../img/kaleidoscopes.svg";
import etherplanets from "../../img/etherplanets.png";

import solarSystems from "../../img/solarSystems.svg";

type Props = {};

const NFTs = (props: Props) => {
  const projects = [
    {
      title: "Synthetic Punks",
      description:
        "A unique, fully on-chain CryptoPunk for every Ethereum address",
      date: "[2022]",
      link: "https://syntheticpunks.com/",
      color: "#FE8B8B",
      logo: punk,
    },
    {
      title: "Moment NFT",
      description: "A fully on-chain clock NFT",
      date: "[2022]",
      link: "https://momentNFT.luko.co.za/",
      color: "#FEA78B",
      logo: clock,
    },
    {
      title: "On-chain Solar Systems",
      description:
        "Fully on-chain, procedurally generated, animated solar systems",
      date: "[2022]",
      color: "#FEC28B",
      link: "https://onchainsolar.systems/",
      logo: solarSystems,
    },
    {
      title: "Kaleidoscopes",
      description:
        "Fully on-chain, procedurally generated, animated solar kaleidoscopes",
      date: "[2023]",
      color: "#FED78B",
      link: "https://onchainkaleidoscopes.xyz/",
      logo: kaleidoscopes,
    },
    {
      title: "On-chain Black Holes",
      description:
        "Fully on-chain, procedurally generated pixel art black holes. Blackholes introduced a burning mechanic where they could be merged together to form larger black holes",
      date: "[2023]",
      color: "#FEE58B",
      link: "https://onchainblackholes.com/",
      logo: blackHoles,
    },
    {
      title: "Etherplanets",
      description:
        "Fully on-chain, procedurally 3d planets using Three.js rendering",
      date: "[2023]",
      color: "#FFEDAC",
      link: "https://etherplanets.com/",
      logo: etherplanets,
    },
  ];

  return (
    <div>
      <h1>NFTs</h1>
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

export default NFTs;
