import React from 'react'
import SingleDay from '../containers/SingleDayContainer'

const SingleRow = ({ row }) => {
  let days = []
  for (let i = 1; i <= 7; i++) {
    days.push( <SingleDay key={i} date={row+i} /> )
  }
  return (
    <tr className='SingleRow'>
      {days}
    </tr>
  )
}

export default SingleRow
