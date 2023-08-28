import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='button' >{props.title}</button>
    </div>
  )
}
