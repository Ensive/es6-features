'use strict';

((exports) => {

  let add = (x, y) => x + y;

  function Person(name, surname) {
    this.name = name || 'Unnamed';
    this.surname = surname || '';
  }

  Person.prototype.saySomething = function (message, callback) {
    // use arrow function for correct lexical binding
    return () => {
      console.log(`${this.name} says: ${message}`);
      return callback();
    };
  };

  function buildNamespace(str, obj) {
    let keys = str.split('.');
    let namespace = window;

    for (let i = 0, len = keys.length; i < len; i += 1) {
      if (typeof namespace[keys[i]] === 'undefined') {
        namespace[keys[i]] = {};
        namespace = namespace[keys[i]];
      }
    }

    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        namespace[attr] = obj[attr];
      }
    }

    return namespace;
  }

  function sortArray(array) {
    var sortedArray;
    var operations = 0;

    for (let i = 0, len = array.length; i < len; i++) {
      if (array[i] > array[i + 1]) {
        let bigger = array[i];
        array[i] = array[i + 1];
        array[i + 1] = bigger;
        operations += 1;
      }
    }

    sortedArray = array;

    return operations === 0 ? sortedArray : sortArray(sortedArray);
  }

  function processArray(arr, callback) {
    return arr.map(callback);
  }

  // exporting
  exports.Person = Person;
  exports.buildNamespace = buildNamespace;
  exports.sortArray = sortArray;
  exports.add = add;
  exports.processArray = processArray;

})(window);
