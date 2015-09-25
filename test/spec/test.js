/* global doWork, doJob, swapping, defParameters, restParameters, doSpread, doTemplateLiterals, upper */
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
      expect(result.result).to.equal('test');
    });

  });

  describe('defParameters function', () => {
    it('use default value', () => {
      var result = defParameters();
      expect(result).to.equal('Anton');
    });
  });

  describe('restParameters function', () => {
    it('is like varargs', () => {
      var result = restParameters('Anton', 1, 2, 4);
      expect(result).to.equal(7);
    });
  });

  describe('doSpread function', () => {
    it('should spread parameters from array', () => {
      var result = doSpread(...['Anton ', 'Goncharuk', ' - Software Developer']);
      expect(result).to.equal('Anton Goncharuk - Software Developer');
    });

    it('can build arrays', () => {

    });
  });

  describe('template literals', () => {
    it('should concatenate a string using interpolation', () => {
      var result = doTemplateLiterals();
      expect(result).to.equal('http://google.com/software/23');
    });

    it('should use tag', () => {
      var x = 1;
      var y = 3;
      var result = upper `${x} + ${y} IS ${x + y}`;
      expect(result).to.equal('1 + 3 IS 4');
    });
  });

})();
