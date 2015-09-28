'use strict';

((exports) => {

  class Employee {

    constructor (name) {
      this.name = name;
      this._isNameTouched = false;
    }

    get name() {
      console.info('Reading "name" property...');
      return this._name.toUpperCase();
    }

    set name(newValue) {
      console.info('Writing to the "name" property...');

      if (newValue && this._name !== newValue) {
        this._name = newValue;
        this._isNameTouched = true;
      } else {
        return false;
      }

    }

    //set name

    doWork() {
      return 'complete!';
    }

    getName() {
      return this._name;
    }
  }

  class Guest {
    getGuestByName(name, surname) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', './app/data/guests.json', false);
      xhr.send();

      let guests = JSON.parse(xhr.response);

      // go through the guests
      for (let i = 0, len = guests.length; i < len; i++) {

        if (guests[i].name === name && guests[i].surname === surname) {
          return guests[i];
        } else if (i === len - 1) {
          return 'There is no such person';
        }

      }

    }

  }

  let guest = new Guest();
  let employee = new Employee('Anton');

  let name = employee.name;

  // exporting
  exports.Employee = Employee;
  exports.employee = employee;
  exports.guest = guest;

})(window);
