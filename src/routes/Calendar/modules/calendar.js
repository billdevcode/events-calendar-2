import { handleActions, createAction } from 'redux-actions'

const eventTypes = [
  {
    name: 'Birthdays',
    color: 'red'
  },
  {
    name: 'Holidays',
    color: 'yellow'
  },
  {
    name: 'Company events',
  },
  {
    name: 'Miscellaneous',
    color: 'blue'
  },
]
// ------------------------------------
// Constants
// ------------------------------------
export const PLACEHOLDER = 'PLACEHOLDER'
export const TOGGLE_ADD_EVENT = 'TOGGLE_ADD_EVENT'
export const ADD_NEW_EVENT = 'ADD_NEW_EVENT'

// ------------------------------------
// Actions
// ------------------------------------
export const placeholder = createAction(PLACEHOLDER)
export const toggleAddEvent = createAction(TOGGLE_ADD_EVENT)
export const addNewEvent = createAction(ADD_NEW_EVENT)

// ------------------------------------
// Selectors
// ------------------------------------
export const selectAddingEvent = state => state.calendar.addingEvent
// ------------------------------------
// Reducer
// ------------------------------------

export const calendarReducer = handleActions({
  [PLACEHOLDER]: (state, action) => {
   return { ...state }
 },
  [TOGGLE_ADD_EVENT]: (state, action) => {
   return {
     ...state,
     addingEvent: !state.addingEvent
   }
 },
  [ADD_NEW_EVENT]: (state, action) => {
    const { payload } = action
   return {
     ...state
   }
 }
}, {
   eventTypes,
   addingEvent: false,
   '2017':{
     june: {}
   }
})

export default calendarReducer
