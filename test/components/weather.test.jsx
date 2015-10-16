'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;

var WeatherComponent = require('../../src/components/weather.jsx');

var type = null;
var temperature = null;

describe('WeatherComponent', function() {
  type = 'sunny';
  temperature = 20;

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<WeatherComponent type={type} temperature={temperature} />));
  });

  describe('Can accept all types of weather', function() {

    beforeEach(function() {
      temperature = 20;
    });

    it('is cloudy', function() {
      type = 'cloudy';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'cloudy');
    });

    it('is foggy', function() {
      type = 'fog';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'fog');
    });

    it('is hailing', function() {
      type = 'hail';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'hail');
    });

    it('is raining heavily', function() {
      type = 'heavy-rain';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'heavy-rain');
    });

    it('is snowing heavily', function() {
      type = 'heavy-snow';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'heavy-snow');
    });

    it('is raining lightly', function() {
      type = 'light-rain';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'light-rain');
    });

    it('is snowing lightly', function() {
      type = 'light-snow';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'light-snow');
    });

    it('is a clear night', function() {
      type = 'night-clear';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'night-clear');
    });

    it('is a partly cloudy night', function() {
      type = 'night-partly-cloudy';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'night-partly-cloudy');
    });

    it('is partly cloudy', function() {
      type = 'partly-cloudy';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'partly-cloudy');
    });

    it('is stormy', function() {
      type = 'storm';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'storm');
    });

    it('is sunny', function() {
      type = 'sunny';

      var weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1];
      assert.equal(renderedWeather.getDOMNode().textContent, 'sunny');
    });
  });
  describe('dates', function() {

    beforeEach(function() {
      type = 'sunny';
    });

    describe('is a perfectly valid date', function() {
      it('displays date in full day of week format', function() {

        var weatherDate = TestUtils.renderIntoDocument(
          <WeatherComponent type={type} date="2017-07-27" format="dddd" />
        );

        var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherDate, 'div')[2];
        assert.equal(renderedWeather.getDOMNode().textContent, 'Thursday');

      });
    });

    describe('is an invalid date', function() {
      it('fails to display date instead throws invalid date error', function() {

        var weatherDate = TestUtils.renderIntoDocument(
          <WeatherComponent type={type} date="20027-07-2017" format="dddd" />
        );

        var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherDate, 'div')[2];
        assert.equal(renderedWeather.getDOMNode().textContent, 'Invalid date');

      });
    });
  });
  describe('valid temperature', function() {

    beforeEach(function() {
      temperature = 20;
      type = 'sunny';
    });

    it('displays temperature in Celsius', function() {

      var weatherTemp = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} unit="C"/>
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherTemp, 'div')[2];
      assert.equal(renderedWeather.getDOMNode().textContent, '20°C');

    });

    it('displays temperature in Fahrenheit', function() {

      var weatherTemp = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} unit="F"/>
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherTemp, 'div')[2];
      assert.equal(renderedWeather.getDOMNode().textContent, '20°F');
    });

    it('displays temperature in Rankine', function() {

      var weatherTemp = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} unit="R"/>
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherTemp, 'div')[2];
      assert.equal(renderedWeather.getDOMNode().textContent, '20°R');
    });

    it('displays temperature in Kelvin', function() {

      var weatherTemp = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} unit="K"/>
      );

      var renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherTemp, 'div')[2];
      assert.equal(renderedWeather.getDOMNode().textContent, '20K');
    });
  });

});
