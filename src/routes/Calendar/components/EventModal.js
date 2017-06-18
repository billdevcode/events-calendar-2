import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import Modal from 'components/Modal'
import './EventModal.scss'

const EventModal = ({ open, onClose, addEvent, handleSubmit, cancel }) => {
  if (!open) { return null }
  return (
    <Modal open={open} onClose={onClose}>
      <div className='EventModal'>
        <h2>Event</h2>
        <p>Edit your event information here</p>
        <form className='EventModal--form' onSubmit={handleSubmit(addEvent)}>
          <div>
            <label htmlFor="eventType">Event Type</label>
            <Field name="eventType" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="month">Month</label>
            <Field name="month" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <Field name="date" component="input" type="number" min='1' max='31' />
          </div>
          <div>
            <label htmlFor="hour">Hour</label>
            <Field name="hour" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="minute">Minute</label>
            <Field name="minute" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="period">Period</label>
            <Field name="period" component="input" type="text" />
          </div>
          <button type="button" onClick={cancel}>Cancel</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Modal>
  )
}

EventModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  addEvent: PropTypes.func,
  handleSubmit: PropTypes.func,
  cancel: PropTypes.func
}

export default EventModal
