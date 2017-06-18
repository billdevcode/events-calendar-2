import { connect } from 'react-redux'
import Event from '../components/Event'
import { selectEventTypeColor, editEvent } from '../modules/calendar'

const mapStateToProps = (state, ownProps) => {
  const { dateEvent } = ownProps
  const { eventType = 'miscellaneous' } = dateEvent
  const color = selectEventTypeColor(state)(eventType)
  dateEvent.color = color
  return {
    dateEvent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    edit: (eventInfo) => {
      dispatch(editEvent(eventInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)
