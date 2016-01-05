'use strict';

((exports) => {
  'use strict';

  function buildUser(first, last) {
    let fullName = first + ' ' + last;

    // use shorthand
    return { first, last, fullName };
  }

  exports.buildUser = buildUser;


})(window);
