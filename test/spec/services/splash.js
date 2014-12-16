'use strict';

describe('Service: Splash', function () {

  // load the service's module
  beforeEach(module('craterdustApp'));

  // instantiate service
  var Splash;
  beforeEach(inject(function (_Splash_) {
    Splash = _Splash_;
  }));

  it('should do something', function () {
    expect(!!Splash).toBe(true);
  });

});
