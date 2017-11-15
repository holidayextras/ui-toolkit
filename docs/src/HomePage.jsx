var React = require('react')

var PageHeader = require('./PageHeader.jsx')
var GettingStarted = require('./GettingStarted.jsx')
var Components = require('./Components.jsx')
var Nav = require('./Nav.jsx')
var PageFooter = require('./PageFooter.jsx')

var HomePage = () => (
  <div>
    <PageHeader />
    <a href='#main' className='sr-only'>Skip navigation</a>
    <div className='container'>
      <div className='col-xs-12 col-md-3 col-md-push-9'>
        <Nav />
      </div>
      <div id='main' className='col-xs-12 col-md-9 col-md-pull-3'>
        <GettingStarted />
        <Components />
      </div>
    </div>
    <PageFooter />
  </div>
)

module.exports = HomePage
