/* global employee, guest */
'use strict';

(function () {

  describe('creating classes', () => {
    it('should create a class with method doWork', () => {
      var result = employee.doWork();
      expect(result).to.equal('complete!');
    });

    it('should get guest by name', () => {
      var alex = guest.getGuestByName('Alexey', 'Petraschuk');
      expect(alex.name).to.equal('Alexey');
    });

    it('should show message if it didn\'t find a person', () => {
      var noPerson = guest.getGuestByName('Hello', 'World');
      expect(noPerson).to.equal('There is no such person');
    });
  });

})();
