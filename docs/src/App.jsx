var React = require('react');

var HomePage = require('./HomePage.jsx');

var a11y = require('react-a11y');
// a11y(React, {includeSrcNode: true });
a11y(React);

var App = React.createClass({
  statics: {

    /**
     * Get the doctype the page expects to be rendered with
     *
     * @returns {string}
     */
    getDoctype: function () {
      return '<!doctype html>';
    },

    renderToString: function (props) {
      return App.getDoctype() +
        React.renderToString(<App {...props} />);
    },

    /**
     * Get the list of pages that are renderable
     *
     * @returns {Array}
     */
    getPages: function () {
      return ['index.html'];
    }

  },

  render: function () {

    return (
      <div className="wrapper">
        <HomePage />
      </div>
    );
  }
});

module.exports = App;
