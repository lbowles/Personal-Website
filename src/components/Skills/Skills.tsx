import React from "react";
import style from "./Skills.module.css";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div>
      <h1>Skills</h1>
      <div className="rowContainer">
        <div style={{ width: "33%" }}>
          <h2>Primary</h2>
          <div className="rowContainer" id="skillOut">
            <div
              className={style.accent}
              style={{ backgroundColor: "#8BE9FE" }}
              id="accent"
            ></div>
            <div style={{ marginTop: "3px" }}>
              <h3>Web3</h3>
              <h3>React</h3>
              <h3>Type Script</h3>
              <h3>Next.js</h3>
              <h3>Business Analysis</h3>
            </div>
          </div>
        </div>
        <div style={{ width: "33%" }}>
          <h2>Secondary</h2>
          <div className="rowContainer" id="skillOut">
            <div
              className={style.accent}
              style={{ backgroundColor: "#76CEFF" }}
              id="accent"
            ></div>
            <div style={{ marginTop: "3px" }}>
              <h3>Python</h3>
              <h3>Java</h3>
              <h3>SQL</h3>
              <h3>Node.js</h3>
              <h3>
                Solidity <span className={style.learning}>Learning</span>
              </h3>
            </div>
          </div>
        </div>
        <div style={{ width: "33%" }}>
          <h2>Extras</h2>
          <div className="rowContainer" id="skillOut">
            <div
              className={style.accent}
              style={{ backgroundColor: "#41AFFE" }}
              id="accent"
            ></div>
            <div style={{ marginTop: "3px" }}>
              <h3>3D Modeling</h3>
              <h3>3D Printing</h3>
              <h3>Video Editing</h3>
              <h3>Lottie Animation</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
