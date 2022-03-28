import React from 'react'
import FreshButton from '../UI/Button/Button'

const TestButton = () => {
  function sum(num1, num2) {
    return num1 + num2;
  }

  console.log("get sum:", sum);

  return (
    <FreshButton variant="contained">
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </FreshButton>
  )
}

export default TestButton