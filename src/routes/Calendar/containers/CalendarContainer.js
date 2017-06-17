import { connect } from 'react-redux'
import Calendar from '../components/Calendar'
import { selectAddingEvent } from '../modules/calendar'

const mapStateToProps = (state, ownProps) => {
  const addingEvent = selectAddingEvent(state)
  console.log(state)
  console.log(addingEvent)
  return {
    addingEvent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
