'use strict';
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var assert = require('chai').assert;
var PaymentCardView = require('../../src/components/payment-card/payment-card.jsx');

describe('PaymentCardComponent', function() {

  it('should render an Amazon card', function() {
    var amazonPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="amazon" />
    );

    var renderedAmazon = TestUtils.findRenderedDOMComponentWithClass(amazonPaymentCard, 'amazon');
    assert.isDefined(renderedAmazon);

  });

  it('should render an Amex card', function() {
    var amexPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="amex" />
    );

    var renderedAmex = TestUtils.findRenderedDOMComponentWithClass(amexPaymentCard, 'amex');
    assert.isDefined(renderedAmex);

  });

  it('should render an Apple card', function() {
    var applePaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="apple" />
    );

    var renderedApple = TestUtils.findRenderedDOMComponentWithClass(applePaymentCard, 'apple');
    assert.isDefined(renderedApple);

  });

  it('should render an Cirrus card', function() {
    var cirrusPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="cirrus" />
    );

    var renderedCirrus = TestUtils.findRenderedDOMComponentWithClass(cirrusPaymentCard, 'cirrus');
    assert.isDefined(renderedCirrus);

  });

  it('should render an Delta card', function() {
    var deltaPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="delta" />
    );

    var renderedDelta = TestUtils.findRenderedDOMComponentWithClass(deltaPaymentCard, 'delta');
    assert.isDefined(renderedDelta);

  });

  it('should render an Direct Debit card', function() {
    var directDebitPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="directdebit" />
    );

    var renderedDirectDebit = TestUtils.findRenderedDOMComponentWithClass(directDebitPaymentCard, 'directdebit');
    assert.isDefined(renderedDirectDebit);

  });

  it('should render an Discover card', function() {
    var discoverPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="discover" />
    );

    var renderedDiscover = TestUtils.findRenderedDOMComponentWithClass(discoverPaymentCard, 'discover');
    assert.isDefined(renderedDiscover);

  });

  it('should render an Electron card', function() {
    var electronPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="electron" />
    );

    var renderedElectron = TestUtils.findRenderedDOMComponentWithClass(electronPaymentCard, 'electron');
    assert.isDefined(renderedElectron);

  });

  it('should render an Google card', function() {
    var googlePaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="google" />
    );

    var renderedGoogle = TestUtils.findRenderedDOMComponentWithClass(googlePaymentCard, 'google');
    assert.isDefined(renderedGoogle);

  });

  it('should render an Maestro card', function() {
    var maestroPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="maestro" />
    );

    var renderedMaestro = TestUtils.findRenderedDOMComponentWithClass(maestroPaymentCard, 'maestro');
    assert.isDefined(renderedMaestro);

  });

  it('should render an Mastercard card', function() {
    var mastercardPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="mastercard" />
    );

    var renderedMastercard = TestUtils.findRenderedDOMComponentWithClass(mastercardPaymentCard, 'mastercard');
    assert.isDefined(renderedMastercard);

  });

  it('should render an Paym card', function() {
    var paymPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="paym" />
    );

    var renderedPaym = TestUtils.findRenderedDOMComponentWithClass(paymPaymentCard, 'paym');
    assert.isDefined(renderedPaym);

  });

  it('should render an Paypal card', function() {
    var paypalPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="paypal" />
    );

    var renderedPaypal = TestUtils.findRenderedDOMComponentWithClass(paypalPaymentCard, 'paypal');
    assert.isDefined(renderedPaypal);

  });

  it('should render an Sage card', function() {
    var sagePaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="sage" />
    );

    var renderedSage = TestUtils.findRenderedDOMComponentWithClass(sagePaymentCard, 'sage');
    assert.isDefined(renderedSage);

  });

  it('should render an Sepa card', function() {
    var sepaPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="sepa" />
    );

    var renderedSepa = TestUtils.findRenderedDOMComponentWithClass(sepaPaymentCard, 'sepa');
    assert.isDefined(renderedSepa);

  });

  it('should render an Solo card', function() {
    var soloPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="solo" />
    );

    var renderedSolo = TestUtils.findRenderedDOMComponentWithClass(soloPaymentCard, 'solo');
    assert.isDefined(renderedSolo);

  });

  it('should render an Switch card', function() {
    var switchPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="switch" />
    );

    var renderedSwitch = TestUtils.findRenderedDOMComponentWithClass(switchPaymentCard, 'switch');
    assert.isDefined(renderedSwitch);

  });

  it('should render an Ukash card', function() {
    var ukashPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="ukash" />
    );

    var renderedUkash = TestUtils.findRenderedDOMComponentWithClass(ukashPaymentCard, 'ukash');
    assert.isDefined(renderedUkash);

  });

  it('should render an Visa card', function() {
    var visaPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="visa" />
    );

    var renderedVisa = TestUtils.findRenderedDOMComponentWithClass(visaPaymentCard, 'visa');
    assert.isDefined(renderedVisa);

  });

  it('should render an Visa Debit card', function() {
    var visadebitPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="visadebit" />
    );

    var renderedVisaDebit = TestUtils.findRenderedDOMComponentWithClass(visadebitPaymentCard, 'visadebit');
    assert.isDefined(renderedVisaDebit);

  });

  it('should render an Western Union card', function() {
    var westernUnionPaymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView type="westernunion" />
    );

    var renderedWesternUnion = TestUtils.findRenderedDOMComponentWithClass(westernUnionPaymentCard, 'westernunion');
    assert.isDefined(renderedWesternUnion);

  });

});
