'use strict';

((exports) => {

  let add = (x, y) => x + y;

  function nameSpace(str, obj) {
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

  // exporting
  exports.nameSpace = nameSpace;
  exports.sortArray = sortArray;
  exports.add = add;

})(window);
