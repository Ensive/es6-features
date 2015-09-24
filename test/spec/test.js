/* global doWork, doJob, swapping */
'use strict';

(function () {

  describe('doWork function', () => {
    it('should return 3 if parameter is true', () => {
      var result = doWork(true);
      expect(result).to.equal(3);
    });

    it('should return null if parameter if false', () => {
      var result = doWork(false);
      expect(result).to.equal(null);
    });
  });

  describe('doJob function', () => {
    it('can shadow outer declaration', () => {
      var result = doJob();
      expect(result).to.equal(10);
    });

  });

  describe('destructuring', () => {
    it('can destructure arrays', () => {
      var result = swapping();
      expect(result.x).to.equal(3);
      expect(result.y).to.equal(2);
      expect(result.z).to.equal(undefined);
    });

    it('can destructure objects', () => {
      var result = swapping();
      expect(result.deviceName).to.equal('iPhone');
      expect(result.deviceOS).to.equal('iOS 9');
      expect(result.deviceWeight).to.equal('129 g');
    });

  });

})();
