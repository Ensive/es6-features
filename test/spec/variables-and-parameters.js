/* global doWork, doJob, loadProfiles, namedParameters, swapping, defParameters, restParameters, displayTags doSpread, spreadValues, doTemplateLiterals, upper */
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

  describe('loadProfiles function', function () {
    it('should return correct length with given data', () => {
      var result = loadProfiles(['Anton', 'Alex', 'Andrew']);
      expect(result).to.equal(3);
    });

    it('should return length 0 if there is no passed arguments', function () {
      var result = loadProfiles();
      expect(result).to.equal(0);
    });
  });

  describe('namedParameters function', function () {
    it('should return correct values', function () {
      var result = namedParameters('New Version out Soon!', { popular: true });

      expect(result.name).to.equal('New Version out Soon!');
      expect(result.popular).to.equal(true);
      expect(result.activeClass).to.be.a('undefined');
    });

    it('should return values if no arguments is passed and do not throw error', function () {
      var result = namedParameters('Another name');

      expect(result.name).to.equal('Another name');
      expect(result.popular).to.equal('hello world');
      expect(result.activeClass).to.be.a('undefined');
      expect(result.expires).to.equal('2015-12-31');
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

  describe('displayTags', function () {
    it('should return full list of tags regardless the amount of params', function () {
      var result = displayTags('sport', 'animals', 'programming');
      var newResult = displayTags('hello', 'world', 'bad');
      var anotherResult = displayTags();

      expect(result).to.be.eql(['sport', 'animals', 'programming']);
      expect(anotherResult).to.be.eql([]);
      expect(newResult).to.be.eql(['hello', 'world', 'bad']);
    });
  });

  describe('doSpread function', () => {
    it('should spread parameters from array', () => {
      var result = doSpread(...['Anton ', 'Goncharuk', ' - Software Developer']);
      var anotherResult = doSpread(...[1, 2, 3]);

      expect(result).to.equal('Anton Goncharuk - Software Developer');
      expect(anotherResult).to.equal(6);
    });

    it('can build arrays', () => {

    });
  });

  describe('spreadValues function', function () {
    it('should spread the values', function () {
      var result = spreadValues(...['Anton', 'magic', 'hello@world.com']);
      expect(result).to.be.equal('hello@world.com');
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
