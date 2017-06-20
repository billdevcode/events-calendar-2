import React from 'react'
import PropTypes from 'prop-types'
import './EventType.scss'

const EventType = ({ type, color }) => {
  return (
    <div className='EventType'>
      <span className='EventType--color' style={{ color: color }} />
      {type}
      <input type='checkbox' defaultChecked />
    </div>
  )
}

EventType.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string
}

export default EventType
