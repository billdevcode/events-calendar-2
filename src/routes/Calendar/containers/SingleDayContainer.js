import { connect } from 'react-redux'
import SingleDay from '../components/SingleDay'
import { toggleAddEvent } from '../modules/calendar'

const mapStateToProps = (state, ownProps) => {
  const { date } = ownProps
  const singleDay = date <= 31 ? date : null

  return {
    singleDay
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleAddEvent: () => {
      dispatch(toggleAddEvent())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDay)
