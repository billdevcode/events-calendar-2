import React from 'react'
import PropTypes from 'prop-types'
import SingleDay from '../containers/SingleDayContainer'

const SingleRow = ({ row }) => {
  let days = []
  for (let i = 1; i <= 7; i++) {
    days.push(<SingleDay key={i} date={row + i} />)
  }
  return (
    <tr className='SingleRow'>
      {days}
    </tr>
  )
}

SingleRow.propTypes = {
  row: PropTypes.number
}

export default SingleRow
