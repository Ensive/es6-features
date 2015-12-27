/* global buildNamespace, sortArray, add, processArray */
'use strict';

(function () {

  describe('add function', () => {
    it('should add two numbers', () => {
      expect(add(2, 3)).to.equal(5);
      expect(add(3, 7)).to.equal(10);
    });
  });

  describe('buildNamespace function', () => {
    it('should create a namespace and assign object to it', () => {
      var person = {
        name: 'Anton',
        surname: 'Goncharuk'
      };

      var ns = buildNamespace('com.view.render.myView', person);

      expect(ns.name).to.equal('Anton');
      expect(typeof window.com.view.render.myView === 'object').to.equal(true);
      expect(window.com.view.render.myView.surname === 'Goncharuk').to.equal(true);

    });
  });

  describe('sortArray function', () => {
    it('should accept an array and return sorted', function () {
      var unsortedArray = [3, 2, 7, 1];
      var anotherUnsortedArray = [123, 23, 12, 14, 11, 10, 15, 17, 19, 92, 40, 32, 612, 72, 182, 983, 1234, 647];

      expect(sortArray(unsortedArray)[0]).to.equal(1);
      expect(sortArray(unsortedArray)[1]).to.equal(2);
      expect(sortArray(unsortedArray)[2]).to.equal(3);
      expect(sortArray(unsortedArray)[3]).to.equal(7);
      expect(sortArray(unsortedArray)).to.eql([1, 2, 3, 7]);

      expect(sortArray(anotherUnsortedArray)[0]).to.equal(10);
      expect(sortArray(anotherUnsortedArray)[1]).to.equal(11);
    });
  });

  describe('processArray function', () => {
    it('should apply a callback function to array elements', () => {
      var myArray = [2, 3, 7];
      myArray = processArray(myArray, function (item) {
        return item * 2;
      });

      var newArr = processArray(myArray, function (item) {
        return item - 3;
      });

      expect(myArray).to.be.eql([4, 6, 14]);
      expect(newArr).to.be.eql([1, 3, 11]);
    });
  });

})();
