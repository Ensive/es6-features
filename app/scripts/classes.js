/* eslint no-shadow: 0 */
'use strict';

((exports) => {

  // general vehicle class
  class Vehicle {

    constructor (type, brand, wheels, color) {
      this._type = type;
      this._brand = brand;
      this._wheels = wheels;
      this._color = color;
    }

    get type() {
      let type = this._type;
      return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
    }

    get brand() {
      return this._brand;
    }

    get wheels() {
      return this._wheels;
    }

    get color() {
      return this._color;
    }

    set color(newColor) {
      this._color = newColor;

      let message = `Color of the ${this.type} was changed to ${newColor}`;
      console.info(message);

      return true;
    }

    driveTo () {
      return `Driving a ${this.type} - ${this.brand}`;
    }

    getMaximumSpeed() {
      return '20 km/h';
    }

  }

  // specific Car class
  class Car extends Vehicle {
    constructor(type, brand, wheels, color, hp) {
      super(type, brand, wheels, color);
      this._hp = hp;
    }

    get hp() {
      return this._hp;
    }

    get engine() {
      return this._engine;
    }

    setEngine(cylinders, litres, serialNumber) {

      Object.defineProperty(this, '_engine', {
        value: {
          cylinders: cylinders,
          litres: litres,
          serialNumber: serialNumber,
          hp: this.hp
        },
        enumerable: true,
        configurable: false,
        writable: false
      });

      console.info('Engine is set and is not able to be changed.');

      return true;
    }

    //driveTo() {
    //  super();
    //}

  }

  class Employee {

    constructor (name) {
      this._name = name;
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

  // exporting
  exports.Employee = Employee;
  exports.Car = Car;
  exports.employee = employee;
  exports.guest = guest;

})(window);
