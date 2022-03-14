import React from 'react'
import UCT from "../../img/UCT.png"

type Props = {}

const Education = (props: Props) => {
  return (
    <div>
        <h1>Education</h1>
        <div id="out" className='rowContainer'>
          <div>
            <div id="point" className="point"></div>
          </div>
          <div>
            <div className='rowContainer'>
              <img src={UCT} style={{height:"18px",marginTop:"4px",paddingRight:"6px"}}></img>
              <h2>University Of Cape Town</h2>
            </div>
            <h3 style={{marginTop:"-12px"}}>Bsc Computer Science and Business Computing</h3>
            <h3 style={{marginTop:"0px",color:"#777777"}}>[2020-2023]</h3>
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default Education