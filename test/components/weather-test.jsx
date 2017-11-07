'use strict'
const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert

const WeatherComponent = require('../../src/components/weather/weather.jsx')

let type = null
let temperature = null

describe('WeatherComponent', function () {
  type = 'sunny'
  temperature = 20

  it('is an element', function () {
    assert.ok(TestUtils.isElement(<WeatherComponent type={type} temperature={temperature} />))
  })

  describe('Can accept all types of weather', function () {
    beforeEach(function () {
      temperature = 20
    })

    it('is cloudy', function () {
      type = 'cloudy'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'cloudy')
    })

    it('is foggy', function () {
      type = 'fog'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'fog')
    })

    it('is hailing', function () {
      type = 'hail'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'hail')
    })

    it('is raining heavily', function () {
      type = 'heavy-rain'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'heavy-rain')
    })

    it('is snowing heavily', function () {
      type = 'heavy-snow'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'heavy-snow')
    })

    it('is raining lightly', function () {
      type = 'light-rain'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'light-rain')
    })

    it('is snowing lightly', function () {
      type = 'light-snow'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'light-snow')
    })

    it('is a clear night', function () {
      type = 'night-clear'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'night-clear')
    })

    it('is a partly cloudy night', function () {
      type = 'night-partly-cloudy'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'night-partly-cloudy')
    })

    it('is partly cloudy', function () {
      type = 'partly-cloudy'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'partly-cloudy')
    })

    it('is stormy', function () {
      type = 'storm'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'storm')
    })

    it('is sunny', function () {
      type = 'sunny'

      const weatherType = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherType, 'div')[1]
      assert.equal(renderedWeather.textContent, 'sunny')
    })
  })
  describe('dates', function () {
    beforeEach(function () {
      type = 'sunny'
    })

    describe('is a perfectly valid date', function () {
      it('displays date in full day of week format', function () {
        const weatherDate = TestUtils.renderIntoDocument(
          <WeatherComponent type={type} date='2017-07-27' format='dddd' />
        )

        const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherDate, 'div')[2]
        assert.equal(renderedWeather.textContent, 'Thursday')
      })
    })

    describe('is an invalid date', function () {
      it('fails to display date instead throws invalid date error', function () {
        const weatherDate = TestUtils.renderIntoDocument(
          <WeatherComponent type={type} date='20027-07-2017' format='dddd' />
        )

        const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherDate, 'div')[2]
        assert.equal(renderedWeather.textContent, 'Invalid date')
      })
    })
  })
  describe('valid temperature', function () {
    beforeEach(function () {
      temperature = 20
      type = 'sunny'
    })

    it('displays temperature in Celsius', function () {
      const weatherTemp = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} unit='C' />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherTemp, 'div')[2]
      assert.equal(renderedWeather.textContent, '20°C')
    })

    it('displays temperature in Fahrenheit', function () {
      const weatherTemp = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} unit='F' />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherTemp, 'div')[2]
      assert.equal(renderedWeather.textContent, '20°F')
    })

    it('displays temperature in Rankine', function () {
      const weatherTemp = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} unit='R' />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherTemp, 'div')[2]
      assert.equal(renderedWeather.textContent, '20°R')
    })

    it('displays temperature in Kelvin', function () {
      const weatherTemp = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={temperature} unit='K' />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherTemp, 'div')[2]
      assert.equal(renderedWeather.textContent, '20K')
    })

    it('displays a temperature at 0', function () {
      const weatherTemp = TestUtils.renderIntoDocument(
        <WeatherComponent type={type} temperature={0} unit='C' />
      )

      const renderedWeather = TestUtils.scryRenderedDOMComponentsWithTag(weatherTemp, 'div')[2]
      assert.equal(renderedWeather.textContent, '0°C')
    })
  })
})
