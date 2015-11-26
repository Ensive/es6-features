/* global nameSpace, sortArray, add */
'use strict';

(function () {

  describe('add function', () => {
    it('should add two numbers', () => {
      expect(add(2, 3)).to.equal(5);
      expect(add(3, 7)).to.equal(10);
    });
  });

  describe('nameSpace function', () => {
    it('should create a namespace and assign object to it', () => {
      var person = {
        name: 'Anton',
        surname: 'Goncharuk'
      };

      var ns = nameSpace('com.view.render.myView', person);

      expect(ns.name).to.equal('Anton');
      expect(typeof window.com.view.render.myView === 'object').to.equal(true);
      expect(window.com.view.render.myView.surname === 'Goncharuk').to.equal(true);

    });
  });

  describe('sortArray function', () => {
    it('should accept an array and return sorted', function () {
      var unsortedArray = [3, 2, 7, 1];
      expect(sortArray(unsortedArray)[0]).to.equal(1);
      expect(sortArray(unsortedArray)[1]).to.equal(2);
      expect(sortArray(unsortedArray)[2]).to.equal(3);
      expect(sortArray(unsortedArray)[3]).to.equal(7);
    });
  });

})();
