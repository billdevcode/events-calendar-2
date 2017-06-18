import { connect } from 'react-redux'
import Calendar from '../components/Calendar'
import { selectModalIsOpen, toggleModal } from '../modules/calendar'

const mapStateToProps = (state, ownProps) => {
  const open = selectModalIsOpen(state)
  return {
    open
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleModal: () => {
      dispatch(toggleModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
