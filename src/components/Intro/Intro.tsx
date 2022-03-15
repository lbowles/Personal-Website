import React from 'react'
import style from "./Intro.module.css"

type Props = {}

const Intro = (props: Props) => {
  return (
    <div className={style.padding}>
      <div className={style.iframe} >
        <iframe src='https://my.spline.design/newhandtest-070b076d7dde1e9edb4a0330dfe4eeb6/' frameborder='0'  ></iframe>
      </div>
      <div className={style.hide}></div>  
    </div>
  )
}

export default Intro