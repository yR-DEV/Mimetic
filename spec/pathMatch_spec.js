var pathMatch = require('../lib/pathMatch');

describe('pathMatch', function () {
  //returns an object
  //the EXACT match, the correct object or the object that matches the inputs exactly

  it('returns the object that matches the inputs exactly', function () {
    //the set up= define inputs
    var routeDefinitions = [
      { verb: 'get', path: '/about' },
      { verb: 'get', path: '/' },
      { verb: 'post', path: '/' },
      { verb: 'get', path: '/contact' }
    ];

    //execution - calls the function
    var actual = pathMatch(routeDefinitions, 'get', '/about');
    //expections - check the result agains the expected result

    expect(actual).toEqual({ verb: 'get', path: '/about'});
  })


  it('it returns null if the definitions do not match', function () {
    //the set up= define inputs
    var routeDefinitions = [
      { verb: 'get', path: '/about' },
      { verb: 'get', path: '/' },
      { verb: 'post', path: '/' },
      { verb: 'get', path: '/contact' }
    ];

    //execution - calls the function
    var actual = pathMatch(routeDefinitions, 'get', '/foo');
    //expections - check the result agains the expected result
    expect(actual).toEqual(null);
  })


  if('returns the route definitions even if they contain dynamic segments', function () {
    var dynamicDefinitions = [
      { verb: 'get', path: '/artists/:artist_name/albums' },
      { verb: 'get', path: '/artists/:artist_name/albums/:album_id' },
      { verb: 'get', path: '/:name' },
    ];

    var actual = pathMatch(dynamicDefinitions, 'get', '/world');

    expect(actual).toEqual({verb: 'get', route: '/:name'})
  })
})
