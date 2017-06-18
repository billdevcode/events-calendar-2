import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import EventModal from '../components/EventModal'
import { toggleModal, addNewEvent } from '../modules/calendar'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClose: () => {
      dispatch(toggleModal())
    },
    addEvent: (values) => {
      dispatch(addNewEvent(values))
      dispatch(toggleModal())
      dispatch(reset('newEvent'))
    },
    cancel: () => {
      dispatch(reset('newEvent'))
      dispatch(toggleModal())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: 'newEvent'
})(EventModal))
