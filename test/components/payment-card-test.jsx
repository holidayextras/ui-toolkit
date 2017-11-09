'use strict'

const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const PaymentCardView = require('../../src/components/payment-card/payment-card.jsx')
const sinon = require('sinon')
const Wrapper = require('../helpers/wrapper')

describe('PaymentCardComponent', function () {
  it('should render an Amazon card', function () {
    const amazonPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='amazon' />
      </Wrapper>
    )

    const renderedAmazon = TestUtils.findRenderedDOMComponentWithClass(amazonPaymentCard, 'amazon')
    assert.isDefined(renderedAmazon)
  })

  it('should render an Amex card', function () {
    const amexPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='amex' />
      </Wrapper>
    )

    const renderedAmex = TestUtils.findRenderedDOMComponentWithClass(amexPaymentCard, 'amex')
    assert.isDefined(renderedAmex)
  })

  it('should render an Apple card', function () {
    const applePaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='apple' />
      </Wrapper>
    )

    const renderedApple = TestUtils.findRenderedDOMComponentWithClass(applePaymentCard, 'apple')
    assert.isDefined(renderedApple)
  })

  it('should render an Cirrus card', function () {
    const cirrusPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='cirrus' />
      </Wrapper>
    )

    const renderedCirrus = TestUtils.findRenderedDOMComponentWithClass(cirrusPaymentCard, 'cirrus')
    assert.isDefined(renderedCirrus)
  })

  it('should render an Delta card', function () {
    const deltaPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='delta' />
      </Wrapper>
    )

    const renderedDelta = TestUtils.findRenderedDOMComponentWithClass(deltaPaymentCard, 'delta')
    assert.isDefined(renderedDelta)
  })

  it('should render an Direct Debit card', function () {
    const directDebitPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='directdebit' />
      </Wrapper>
    )

    const renderedDirectDebit = TestUtils.findRenderedDOMComponentWithClass(directDebitPaymentCard, 'directdebit')
    assert.isDefined(renderedDirectDebit)
  })

  it('should render an Discover card', function () {
    const discoverPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='discover' />
      </Wrapper>
    )

    const renderedDiscover = TestUtils.findRenderedDOMComponentWithClass(discoverPaymentCard, 'discover')
    assert.isDefined(renderedDiscover)
  })

  it('should render an Electron card', function () {
    const electronPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='electron' />
      </Wrapper>
    )

    const renderedElectron = TestUtils.findRenderedDOMComponentWithClass(electronPaymentCard, 'electron')
    assert.isDefined(renderedElectron)
  })

  it('should render an Google card', function () {
    const googlePaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='google' />
      </Wrapper>
    )

    const renderedGoogle = TestUtils.findRenderedDOMComponentWithClass(googlePaymentCard, 'google')
    assert.isDefined(renderedGoogle)
  })

  it('should render an Maestro card', function () {
    const maestroPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='maestro' />
      </Wrapper>
    )

    const renderedMaestro = TestUtils.findRenderedDOMComponentWithClass(maestroPaymentCard, 'maestro')
    assert.isDefined(renderedMaestro)
  })

  it('should render an Mastercard card', function () {
    const mastercardPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='mastercard' />
      </Wrapper>
    )

    const renderedMastercard = TestUtils.findRenderedDOMComponentWithClass(mastercardPaymentCard, 'mastercard')
    assert.isDefined(renderedMastercard)
  })

  it('should render an Paym card', function () {
    const paymPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='paym' />
      </Wrapper>
    )

    const renderedPaym = TestUtils.findRenderedDOMComponentWithClass(paymPaymentCard, 'paym')
    assert.isDefined(renderedPaym)
  })

  it('should render an Paypal card', function () {
    const paypalPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='paypal' />
      </Wrapper>
    )

    const renderedPaypal = TestUtils.findRenderedDOMComponentWithClass(paypalPaymentCard, 'paypal')
    assert.isDefined(renderedPaypal)
  })

  it('should render an Sage card', function () {
    const sagePaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='sage' />
      </Wrapper>
    )

    const renderedSage = TestUtils.findRenderedDOMComponentWithClass(sagePaymentCard, 'sage')
    assert.isDefined(renderedSage)
  })

  it('should render an Sepa card', function () {
    const sepaPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='sepa' />
      </Wrapper>
    )

    const renderedSepa = TestUtils.findRenderedDOMComponentWithClass(sepaPaymentCard, 'sepa')
    assert.isDefined(renderedSepa)
  })

  it('should render an Solo card', function () {
    const soloPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='solo' />
      </Wrapper>
    )

    const renderedSolo = TestUtils.findRenderedDOMComponentWithClass(soloPaymentCard, 'solo')
    assert.isDefined(renderedSolo)
  })

  it('should render an Switch card', function () {
    const switchPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='switch' />
      </Wrapper>
    )

    const renderedSwitch = TestUtils.findRenderedDOMComponentWithClass(switchPaymentCard, 'switch')
    assert.isDefined(renderedSwitch)
  })

  it('should render an Ukash card', function () {
    const ukashPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='ukash' />
      </Wrapper>
    )

    const renderedUkash = TestUtils.findRenderedDOMComponentWithClass(ukashPaymentCard, 'ukash')
    assert.isDefined(renderedUkash)
  })

  it('should render an Visa card', function () {
    const visaPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='visa' />
      </Wrapper>
    )

    const renderedVisa = TestUtils.findRenderedDOMComponentWithClass(visaPaymentCard, 'visa')
    assert.isDefined(renderedVisa)
  })

  it('should render an Visa Debit card', function () {
    const visadebitPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='visadebit' />
      </Wrapper>
    )

    const renderedVisaDebit = TestUtils.findRenderedDOMComponentWithClass(visadebitPaymentCard, 'visadebit')
    assert.isDefined(renderedVisaDebit)
  })

  it('should render an Western Union card', function () {
    const westernUnionPaymentCard = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView type='westernunion' />
      </Wrapper>
    )

    const renderedWesternUnion = TestUtils.findRenderedDOMComponentWithClass(westernUnionPaymentCard, 'westernunion')
    assert.isDefined(renderedWesternUnion)
  })

  describe('with onClick event handler', function () {
    let handler

    beforeEach(function () {
      handler = sinon.stub()
      const card = TestUtils.renderIntoDocument(
        <Wrapper>
          <PaymentCardView onClick={handler} />
        </Wrapper>
      )

      const cardElement = TestUtils.findRenderedDOMComponentWithClass(card, 'component-payment-card')
      TestUtils.Simulate.click(cardElement)
    })

    it('calls the handler', function () {
      sinon.assert.called(handler)
    })
  })

  it('should allow other attributes', function () {
    const card = TestUtils.renderIntoDocument(
      <Wrapper>
        <PaymentCardView id='foo' />
      </Wrapper>
    )

    const cardElement = TestUtils.findRenderedDOMComponentWithClass(card, 'component-payment-card')
    assert.equal(cardElement.id, 'foo')
  })
})
