import React from 'react'

type Props = {}

const Education = (props: Props) => {
  return (
    <div>
        <h1>Education</h1>
        <div className='rowContainer'>
          <div>
            <div className="point"></div>
          </div>
          <div>
            <h2>University Of Cape Town</h2>
            <h3 style={{marginTop:"-12px"}}>Bsc Computer Science and Business Computing</h3>
            <h3 style={{marginTop:"0px",color:"#777777"}}>[2020-2023]</h3>
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default Education