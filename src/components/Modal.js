import React from 'react'
import PropTypes from 'prop-types'
import DocumentEvent from './DocumentEvent'
import './Modal.scss'

const Modal = ({ children, open, onClose }) => {
  if (!open) { return null }
  return (
    <DocumentEvent onEsc={onClose}>
      <div className='Modal'>
        <div className='Modal__Overlay' onClick={onClose} />
        <div className='Modal__Dialog'>{children}</div>
      </div>
    </DocumentEvent>
  )
}
Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default Modal
