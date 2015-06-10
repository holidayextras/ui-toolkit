var React = require('react');

var Image = require('../../../image');
var Button = require('../../../button');
var Flag = require('../../../flag');

module.exports = function(props) {
  return (

    <div className="component-product-tile">

      <Image src={props.image.src} alt={props.image.alt} />

      <div className="content">

        <div className="price">
          <span className="current">&pound;27.99</span>
          <span className="per">&pound;3.99 per day</span>
          <span className="was">&pound;72.00</span>
        </div>

        <Button purpose="primary" size="block">Book Now</Button>

        <div className="label-block">Special offer</div>

        <ul className="list-unstyled meta">
          <li>
            <i className="fa fa-fw fa-plane"></i>
            Suitable for ALL terminals
          </li>
          <li className="transfers">
            <i className="fa fa-bus fa-fw"></i>
            <a data-action="showArrivingAndDepartingModal" data-hxtrack-name="scannable-tile-button-transfers" data-hxtrack-value="LGW2" data-track-action="showArrivingAndDepartingModal" data-track-name="scannable-tile-button-transfers" data-track-code="LGW2" data-track-location="scannable-tile">Transfers</a>
            run to the airport every 10 minutes
          </li>
        </ul>

        <div className="justified">
          <Button>Map</Button>
          <Button>Info</Button>
          <Button>Video</Button>
        </div>

      </div>

    </div>
  );
};
