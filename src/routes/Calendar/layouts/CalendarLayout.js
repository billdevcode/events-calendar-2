import React from 'react'
import './CalendarLayout.scss'
import Sidebar from '../containers/SidebarContainer'
import Calendar from '../containers/CalendarContainer'

const CalendarLayout = () => {
  return (
    <div className='CalendarLayout'>
      <Sidebar />
      <Calendar />
    </div>
  )
}

export default CalendarLayout
