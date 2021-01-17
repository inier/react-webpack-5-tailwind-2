import React from 'react'
import PropTypes from 'prop-types'

const View = ({ component, children, ...props }) => {
  return React.createElement(component, props, children)
}

View.propTypes = {
  component: PropTypes.elementType,
  children: PropTypes.node,
}
View.defaultProps = { component: 'div', children: null }

export default View
