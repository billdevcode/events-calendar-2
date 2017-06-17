import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'

const mapStateToProps = (state, ownProps) => {
  const eventTypes = state.calendar.eventTypes
  return {
    eventTypes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
