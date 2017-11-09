'use strict'

const React = require('react')

/**
 * TestUtils.renderIntoDocument() doesn't support rendering
 * functional components, so to test rendering them we have to wrap
 * them in an ES2015 class based component.
 *
 * This will be made redundant by enzyme unit tests.
 */
class Wrapper extends React.Component {
  render () {
    /**
     * wrap the real component in a <section> tag
     * as it's unlikely a test will be looking for that.
     */
    return <section>{this.props.children}</section>
  }
}

module.exports = Wrapper
