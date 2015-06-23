//by default, module.exports = empty object
module.exports = function(array, verb, path) {
//the undefined return indicates an empty function

  var tempSplitArrDynamic = [];

  array.forEach(function(row){
    tempSplitArrDynamic.push(row.split('/'));
  })

  console.log(tempSplitArrDynamic);

  if((array[i].verb === verb) && (array[i].path === path)) {
    return {"verb": verb, "path": path};
  } else {
      return null;
  }



}


//
// { verb: 'get', path: '/about' },
// { verb: 'get', path: '/' },
// { verb: 'post', path: '/' },
// { verb: 'get', path: '/contact' }
