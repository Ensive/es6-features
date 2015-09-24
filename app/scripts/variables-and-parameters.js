((exports) => {
  'use strict';

  var doWork = (flag) => {
    if (flag) {
      let x = 3;
      return x;
    } else {
      return null;
    }
  };

  var doJob = () => {

    // use let inside of for loop
    for (var i = 0; i < 10; i++) {

    }

    // if we use let "i" will be undefined
    return i;
  };

  console.log(doJob());
  console.log(doWork(true));

  //exports.doJob = doJob;
  exports.doWork = doWork;

})(this);
