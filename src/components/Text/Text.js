import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ component, children, ...props }) => {
  return React.createElement(component, props, children)
}

Text.propTypes = {
  component: PropTypes.elementType,
  children: PropTypes.node,
}
Text.defaultProps = { component: 'span', children: null }

export default Text
