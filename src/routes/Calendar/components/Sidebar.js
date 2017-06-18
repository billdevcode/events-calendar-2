import React from 'react'
import PropTypes from 'prop-types'
import './Sidebar.scss'
import EventType from '../components/EventType'

const Sidebar = ({ eventTypes }) => {
  return (
    <div className='Sidebar'>
      {eventTypes.map( (event, index) => {
        return (
          <EventType key={index+1} type={event.type} color={event.color} />
        )
      })}
      <button>
        Add events to dashboard
      </button>
    </div>
  )
}

Sidebar.propTypes = {
  eventTypes: PropTypes.array
}

export default Sidebar
