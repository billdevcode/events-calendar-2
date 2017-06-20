import React from 'react'
import PropTypes from 'prop-types'
import './Calendar.scss'
import EventModal from '../containers/EventModalContainer'
import SingleRow from '../components/SingleRow'

const Calendar = ({ open, toggleModal }) => {
  let rows = []
  for (let i = 0; i < 5; i++) {
    rows.push(<SingleRow key={i} row={i * 7} />)
  }
  return (
    <div className='Calendar'>
      <EventModal open={open} />
      June 2017
      <table className='Calendar__Table'>
        <thead>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody onClick={toggleModal}>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

Calendar.propTypes = {
  open: PropTypes.bool,
  toggleModal: PropTypes.func
}

export default Calendar
