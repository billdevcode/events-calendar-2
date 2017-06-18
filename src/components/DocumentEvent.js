import { Component } from 'react'
import PropTypes from 'prop-types'

class DocumentEvent extends Component {
  constructor () {
    super()
    this.onKeydownEsc = this.onKeydownEsc.bind(this)
  }

  componentWillMount () {
    const { onClick, onKeyDown, onEsc } = this.props
    if (onClick) { document.addEventListener('click', onClick) }
    if (onKeyDown) { document.addEventListener('keydown', onKeyDown) }
    if (onEsc) { document.addEventListener('keydown', this.onKeydownEsc) }
  }

  onKeydownEsc (e) {
    const { onEsc } = this.props
    if (e.keyCode === 27) { onEsc(e) }
  }

  componentWillUnmount () {
    const { onClick, onKeyDown, onEsc } = this.props
    if (onClick) { document.removeEventListener('click', onClick) }
    if (onKeyDown) { document.removeEventListener('keydown', onKeyDown) }
    if (onEsc) { document.removeEventListener('keydown', this.onKeydownEsc) }
  }

  render () {
    const { children } = this.props
    return children
  }
}

DocumentEvent.propTypes = {
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onEsc: PropTypes.func,
  children: PropTypes.node
}

export default DocumentEvent
