'use strict';

((exports) => {

  let doWork = (flag) => {
    if (flag) {
      let x = 3;
      return x;
    } else {
      return null;
    }
  };

  let doJob = () => {
    const y = 10;

    // gives error
    //y = 12;

    // use let inside of for loop
    // if we use let "i", then "i" will be undefined out of the loop
    //for (let i = 0; i < 10; i++) {}

    return y;
  };

  let loadProfiles = (userNames = []) => {
    return userNames.length;
  };

  let namedParameters = (name, { popular, expires, activeClass } = {}) => {
    popular = popular || 'hello world';
    expires = expires || '2015-12-31';

    return {
      name: name,
      popular: popular,
      expires: expires,
      activeClass: activeClass
    }
  };

  let swapping = () => {

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

    // destructuring
    let doSomething = (url, {data, cache, headers}) => {
      return data;
    };

    let result = doSomething('/posts/', {
      data: 'test',
      cache: false
    });

    // destructuring object
    let {
      name: deviceName,
      OS: deviceOS,
      designedBy: deviceDesignedBy,
      madeIn: deviceMadeIn,
      dimensions: { weight: deviceWeight }
      } = getDevice();

    return {
      x: x,
      y: y,
      z: z,
      deviceName: deviceName,
      deviceOS: deviceOS,
      deviceDesignedBy: deviceDesignedBy,
      deviceMadeIn: deviceMadeIn,
      deviceWeight: deviceWeight,
      result: result
    };

  };

  let defParameters = (name = 'Anton') => {
    return name;
  };

  // destructuring + def parameters
  //let doTest = (url, {name = 'Anton', surname = 'Goncharuk', job = 'Software Developer'}) => {
  //  return job;
  //};

  let restParameters = (name, ...numbers) => {
    let result = 0;

    numbers.forEach((n) => {
      result += n;
    });

    return result;
  };

  let displayTags = (...tags) => {
    var allTags = [];

    for (let i in tags) {
      allTags.push(tags[i]);
    }

    return allTags;
  };

  let doSpread = (x, y, z) => {
    return x + y + z;
  };

  let doTemplateLiterals = () => {
    let category = 'software';
    let id = '23';

    return `http://google.com/${category}/${id}`;
  };

  let upper = (strings, ...values) => {
    let result = '';

    for (var i = 0; i < strings.length; i++) {
      result += strings[i];

      if (i < values.length) {
        result += values[i];
      }
    }
    return result.toUpperCase();
  };

  // exporting
  exports.doWork = doWork;
  exports.doJob = doJob;
  exports.loadProfiles = loadProfiles;
  exports.namedParameters = namedParameters;
  exports.swapping = swapping;
  exports.defParameters = defParameters;
  exports.restParameters = restParameters;
  exports.displayTags = displayTags;
  exports.doSpread = doSpread;
  exports.doTemplateLiterals = doTemplateLiterals;
  exports.upper = upper;

})(window);
