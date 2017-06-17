import React from 'react'
import './Event.scss'

const Event = ({ name, color }) => {
  return (
    <div className='Event'>
      <span className='Event--color' style={{ color: color }}/>
        {name}
      <input type='checkbox' defaultChecked />
    </div>
  )
}

export default Event
