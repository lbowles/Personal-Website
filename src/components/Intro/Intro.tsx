import React from 'react'
import style from "./Intro.module.css"

type Props = {}

const Intro = (props: Props) => {
  return (
    <>
    <div>
      <iframe src='https://my.spline.design/newhandtest-070b076d7dde1e9edb4a0330dfe4eeb6/' frameborder='0' width='100%' height='400px' ></iframe>
    </div>
    <div className={style.hide}></div>  
    </>
  )
}

export default Intro