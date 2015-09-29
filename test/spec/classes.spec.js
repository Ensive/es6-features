/* global employee, guest, Employee, Car */
'use strict';

(function () {

  describe('the class keyword', () => {
    it('should create a class with methods', () => {
      var complete = employee.doWork();
      var name = employee.getName();
      expect(complete).to.equal('complete!');
      expect(name).to.equal('Anton');
      expect(Employee.prototype.getName.call(employee, 'Anton')).to.equal('Anton');
    });

    it('should retrieve a guest object by name', () => {
      var alex = guest.getGuestByName('Alexey', 'Petraschuk');

      expect(alex instanceof Object).to.equal(true); // is object
      expect(Array.isArray(alex)).to.equal(false); // not array

      expect(alex.name).to.equal('Alexey');
      expect(alex.surname).to.equal('Petraschuk');
      expect(alex.city).to.equal('Chernovtsi');
      expect(alex.isBrideSide).to.equal(false);
    });

    it('should show message if it didn\'t find a person', () => {
      var noPerson = guest.getGuestByName('Hello', 'World');
      expect(noPerson).to.equal('There is no such person');
    });

    it('should use a constructor function', () => {
      var employee = new Employee('Tony');
      expect(employee.getName()).to.equal('Tony');
    });

    it('should use getter and setter functions', () => {
      var employee = new Employee('Greg');

      expect(employee.name).to.equal('GREG');
      expect(employee._isNameTouched).to.equal(false);

      employee.name = 'John';
      expect(employee.name).to.equal('JOHN');
      expect(employee._isNameTouched).to.equal(true);

    });

    it('should support inheritance', () => {
      var bmw = new Car('car', 'BMW', 4, 'red', 343);
      expect(bmw._brand).to.equal('BMW');
      expect(bmw._wheels).to.equal(4);

      bmw.setEngine(6, 3.2, 'S54B32');
      expect(bmw.engine instanceof Object).to.equal(true);

      var bmwEngine = bmw.engine;
      expect(bmwEngine.cylinders).to.equal(6);
      expect(bmwEngine.litres).to.equal(3.2);
      expect(bmw.hp).to.equal(343);
    });

    it('should use a "super" keyword', () => {

    });

  });

})();
