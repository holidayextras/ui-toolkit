var React = require('react')

var packageJSON = require('../../package.json')

var PageHeader = () => (
  <header>
    <div className='container'>
      <img src='./assets/toolkit-logo.svg' alt='Toolkit' />
      <h1>{packageJSON.description}</h1>
      <p className='lead'>A set of styled components built with React</p>
    </div>
  </header>
)

module.exports = PageHeader
