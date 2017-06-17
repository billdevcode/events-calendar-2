import React from 'react'
import './SingleDay.scss'

const SingleDay = ({ singleDay, toggleAddEvent }) => {
  return (
    <td className='SingleDay' onClick={toggleAddEvent}>
      {singleDay}
    </td>
  )
}

export default SingleDay
