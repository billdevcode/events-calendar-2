import React from 'react'
import PropTypes from 'prop-types'
import './Event.scss'

const Event = ({ dateEvent }) => {
  const { eventId, color, hour, minute, name, period } = dateEvent
  return (
    <div className='Event' style={{ borderLeftColor: color }} id={eventId}>
      <h4 className='Event--name'>{name}</h4>
      <p className='Event--time'>{hour}:{minute} {period}</p>
    </div>
  )
}

Event.propTypes = {
  dateEvent: PropTypes.object
}

export default Event
