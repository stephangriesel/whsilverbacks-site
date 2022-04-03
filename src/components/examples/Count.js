import React from 'react'
import PropTypes from 'prop-types'

const Count = (props) => {
  return (
    <div>
      My name is {props.name} and my age is {props.age}
    </div>
  )
}

Count.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}

export default Count