import React from 'react'
import './Calendar.scss'
import AddEventModal from '../containers/AddEventModalContainer'
import SingleRow from '../components/SingleRow'

const Calendar = ({ addingEvent }) => {
  let rows = []
  for (let i = 0; i < 5; i++) {
   rows.push( <SingleRow key={i} row={i*7} /> )
  }
  return (
    <div className='Calendar'>
      {addingEvent && <AddEventModal />}
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
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar
