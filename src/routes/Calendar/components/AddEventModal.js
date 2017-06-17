import React from 'react'

const AddEvent = () => {
  return (
    <div>
      <form>
        <div>
          <label>Event Type</label>
          <input type='text' />
        </div>
        <div>
          <label>Name</label>
          <input type='text' />
        </div>
        <input type='button' value='Cancel' />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default AddEvent
