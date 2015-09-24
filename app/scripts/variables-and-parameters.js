'use strict';

((exports) => {

  var doWork = (flag) => {
    if (flag) {
      let x = 3;
      return x;
    } else {
      return null;
    }
  };

  var doJob = () => {
    const y = 10;

    // use let inside of for loop
    // if we use let "i", then "i" will be undefined out of the loop
    //for (let i = 0; i < 10; i++) {}

    return y;
  };

  var swapping = () => {

    let func = () => [1, 3, 2];
    let [, x, y, z] = func();

    let getDevice = () => {
      return {
        name: 'iPhone',
        OS: 'iOS 9',
        designedBy: 'Apply',
        madeIn: 'China',
        dimensions: {
          width: '67.0 mm',
          length: '138.1 mm',
          height: '6.9 mm',
          weight: '129 g'
        }
      };
    };

    // destructing object
    let {
      name: first,
      OS: deviceOS,
      designedBy: deviceDesignedBy,
      madeIn: deviceMadeIn,
      dimensions: { weight: deviceWeight }
      } = getDevice();

    return {
      x: x,
      y: y,
      z: z,
      deviceName: first,
      deviceOS: deviceOS,
      deviceDesignedBy: deviceDesignedBy,
      deviceMadeIn: deviceMadeIn,
      deviceWeight: deviceWeight
    };

  };

  swapping();

  //console.log(doJob());
  console.log(doWork(true));

  exports.doJob = doJob;
  exports.doWork = doWork;
  exports.swapping = swapping;

})(this);
