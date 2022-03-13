import React from 'react'
import style from "./Experience.module.css"
import linkIcon from "../../img/link.svg"

type Props = {}

const Experience = (props: Props) => {
  const projects = [{title:"Neon Analytics",description:"LinkedIn marketing analytics and reporting",date:"[2018-2022]",link:"analytics.neonsolutions.co.za",color:"#8B90FE"},
                    {title:"Neon Analytics",description:"LinkedIn analytics and reporting",date:"[2018-2022]",link:"https://analytics.neonsolutions.co.za",color:"#BE8BFE"}]

  return (
    <div>
        <h1>Experience</h1>
        {projects.map((project,index)=>(
          <div className='rowContainer' style={{paddingTop: index>0 ? "10px" : "0px",width:"100%"}} >
            <div>
              <div className="point" style={{backgroundColor:project.color}}></div>
            </div>
            <div>
              <h2>{project.title}</h2>
              <h3 className={style.infoText}>{project.description}</h3>
              <h3 className={style.date}>{project.date}</h3>
            </div>
            <div style={{float:"right",marginLeft:"auto",marginRight:'0'}}>
              <a target="_blank" href={project.link}>
                <img src={linkIcon}></img>
              </a>
            </div>
          </div>
        ))
        }
    </div>
  )
}

export default Experience