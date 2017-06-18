import { handleActions, createAction } from 'redux-actions'

// NOTE for simplicity sake, we'll use these sample data
import { eventTypes, eventsOn17 } from 'sampleData'

// ------------------------------------
// Constants
// ------------------------------------
export const PLACEHOLDER = 'PLACEHOLDER'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const SUBMIT_EVENT = 'SUBMIT_EVENT'
export const ADD_NEW_EVENT = 'ADD_NEW_EVENT'
export const EDIT_EVENT = 'EDIT_EVENT'

// ------------------------------------
// Actions
// ------------------------------------
export const placeholder = createAction(PLACEHOLDER)
export const toggleModal = createAction(TOGGLE_MODAL)
export const submitEvent = createAction(SUBMIT_EVENT)
export const addNewEvent = createAction(ADD_NEW_EVENT)
export const editEvent = createAction(EDIT_EVENT)

// ------------------------------------
// Selectors
// ------------------------------------
export const selectModalIsOpen = state => state.calendar.openModal
export const selectMonthEvent = state => month => state.calendar[month]
export const selectDateEvent = state => month => date => selectMonthEvent(state)(month)[date]
export const selectEventTypeColor = state => type =>  {
  return state.calendar.eventTypes.find(eventType => {
    if (eventType && type) {
      return eventType.type.toLowerCase() === type.toLowerCase()
    }
  }).color
}
export const selectEventById = state => month => date => id => {
  return selectMonthEvent(state)(month)[date].find(event => {
    return event.eventId === id
  })
}

// ------------------------------------
// Reducer
// ------------------------------------

export const calendarReducer = handleActions({
  [PLACEHOLDER]: (state, action) => {
   return { ...state }
 },
  [TOGGLE_MODAL]: (state, action) => {
   return {
     ...state,
     openModal: !state.openModal
   }
 },
 [SUBMIT_EVENT]: (state, action) => {
   return {
     ...state
   }
 },
 [ADD_NEW_EVENT]: (state, action) => {
  const { payload } = action
  const currentEvents = state.june['18']
  const newEvents = currentEvents.slice().concat(payload)
  return {
    ...state,
    june: {
      ...state.june,
      ['18']: [...state.june['18'], payload]
    }
  }
 },
 [EDIT_EVENT]: (state, action) => {
  return {
    ...state
  }
 }
}, {
   eventTypes,
   openModal: false,
   june: {
     '17': eventsOn17,
     '18': []
   }
})

export default calendarReducer
