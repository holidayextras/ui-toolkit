var React = require('react')
var ReactDOM = require('react-dom')

var HomePage = require('./HomePage.jsx')

var a11y = require('react-a11y')
// a11y(React, {includeSrcNode: true })
a11y(React)

var App = () => (
  <div className='wrapper'>
    <HomePage />
  </div>
)

/**
 * Get the doctype the page expects to be rendered with
 * @returns {string}
 */
App.getDoctype = () => '<!doctype html>'

/**
 * Render the application to a string
 * @returns {string}
 */
App.renderToString = (props) => App.getDoctype() + ReactDOM.renderToString(<App {...props} />)

/**
 * Get the list of pages that are renderable
 * @returns {Array}
 */
App.getPages = () => ['index.html']

module.exports = App
