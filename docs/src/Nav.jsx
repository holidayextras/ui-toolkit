var React = require('react');

var Nav = React.createClass({
  render: function () {
    return (
      <nav className="hidden-xs hidden-sm" role="navigation">

        <ul>
          <li>
            <a href="#setup">Get started</a>
            <ul>
              <li><a href="#terminal">Terminal</a></li>
              <li><a href="#usage">Sample usage</a></li>
            </ul>
          </li>

          <li>
            <a href="#atoms">Atoms</a>
            <ul>
              <li><a href="#anchor">Anchor</a></li>
              <li><a href="#button">Buttons</a></li>
              <li><a href="#flags">Flags</a></li>
              <li><a href="#image">Image</a></li>
              <li><a href="#input">Input</a></li>
              <li><a href="#lists">Lists</a></li>
              <li><a href="#lozenge">Lozenge</a></li>
              <li><a href="#quote">Quote</a></li>
            </ul>
            <a href="#molecules">Molecules</a>
            <ul>
              <li><a href="#alert">Alert</a></li>
              <li><a href="#card">Card</a></li>
              <li><a href="#countdown">Countdown</a></li>
              <li><a href="#payment-card">Payment Card</a></li>
              <li><a href="#rating">Rating</a></li>
              <li><a href="#weather">Weather</a></li>
            </ul>
          </li>
        </ul>

      </nav>
    );
  }
});

module.exports = Nav;
