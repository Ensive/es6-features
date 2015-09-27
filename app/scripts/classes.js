'use strict';

((exports) => {

  class Employee {
    doWork() {
      return 'complete!';
    };
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

  var guest = new Guest();
  var employee = new Employee();

  // exporting
  exports.employee = employee;
  exports.guest = guest;

})(window);
