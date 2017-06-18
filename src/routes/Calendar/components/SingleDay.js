import React from 'react'
import PropTypes from 'prop-types'
import './SingleDay.scss'
import Event from '../containers/EventContainer.js'

const SingleDay = ({ singleDay, dateEvents }) => {
  return (
    <td className='SingleDay'>
      {singleDay}
      {dateEvents && dateEvents.map((dateEvent, index) => {
        return (
          <Event key={index} dateEvent={dateEvent} />
        )
      })
    }
    </td>
  )
}

SingleDay.propTypes = {
  singleDay: PropTypes.number,
  toggleAddEvent: PropTypes.func
}

export default SingleDay
