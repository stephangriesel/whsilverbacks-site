import React from 'react'
import Button from '../../UI/Button/Button'
import Layout from '../../UI/Layout/Layout'

const Content = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default Content