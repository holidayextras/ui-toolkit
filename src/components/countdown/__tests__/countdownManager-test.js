// var countdown = require('../code/lib/countdownManager.js');
// var Trips = require('../../../js/lib/trips.js');
// var expect = require('expect.js');
// var moment = require('moment');
// var Moment = moment().constructor;
// var sinon = require('sinon');

// describe('TripCountdown', function() {
//   before(function() {
//     this.timer = sinon.useFakeTimers();
//   });

//   beforeEach(function() {
//     var trip = Trips.build();
//     this.tripCountdown = new TripCountdown(trip);
//     this.callback = sinon.spy();
//   });

//   after(function() {
//     this.timer.restore();
//   });

//   it('.start sets interval countdown', function() {
//     this.tripCountdown.start(this.callback);
//     this.timer.tick(TripCountdown.countdownInterval);
//     expect(this.callback.called).to.be(true);
//   });

//   it('.stop clears interval countdown and returns moment', function() {
//     this.tripCountdown.start(this.callback);
//     var stopMoment = this.tripCountdown.stop();
//     this.timer.tick(TripCountdown.countdownInterval);
//     expect(stopMoment).to.be.a(Moment);
//     expect(this.callback.called).to.be(false);
//   });
// });
