import React from 'react'
import './Sidebar.scss'
import Event from '../components/Event'

const Sidebar = ({ eventTypes }) => {
  return (
    <div className='Sidebar'>
      {eventTypes.map( (event, index) => {
        return (
          <Event key={index+1} name={event.name} color={event.color} />
        )
      })}
      <button>
        Add events to dashboard
      </button>
    </div>
  )
}

export default Sidebar
