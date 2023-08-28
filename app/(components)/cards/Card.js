import Image from 'next/image'
import React from 'react'

export default function cards(props) {
  return (
    <div className='card'>
      <div className='container'>
      <div className='row'>
        <div className='col'>
     
      <Image style={{textAlign:'center'}} src={props.src} width={"100"} height={"100"} alt='not found'/>
      <h4>{props.card}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore</p>
     
        
    </div>
    </div>
    </div>
    </div>
  )
}


