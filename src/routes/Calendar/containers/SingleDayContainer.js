import { connect } from 'react-redux'
import SingleDay from '../components/SingleDay'
import { selectDateEvent } from '../modules/calendar'

const mapStateToProps = (state, ownProps) => {
  const { date } = ownProps
  const singleDay = date <= 31 ? date : null
  const dateEvents = selectDateEvent(state)('june')(singleDay) || null
  return {
    singleDay,
    dateEvents
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDay)
