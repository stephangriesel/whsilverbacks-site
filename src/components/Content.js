import React from 'react'
import Button from '../UI/Button/Button'

const Content = () => {
  return (
    <div className='content-wrapper'>
      {/* CSS Modules Button */}
      <Button type="button">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Button>
    </div>
  )
}

export default Content