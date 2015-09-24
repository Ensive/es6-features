/* global doWork */
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

})();
