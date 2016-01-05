'use strict';

((exports) => {
  'use strict';

  function buildUser(first, last, postCount) {
    let fullName = `${first} ${last}`;
    const ACTIVE_POST_COUNT = 10;

    // use shorthand
    return {
      first,
      last,
      fullName,
      isActive() {
        return postCount >= ACTIVE_POST_COUNT;
      }
    };
  }

  exports.buildUser = buildUser;


})(window);
