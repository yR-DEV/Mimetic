module.exports = function (input){
  return input.replace("?", "").split("&").map(splitonEqual).reduce(setProperties, {});
}

var setProperties = function(acc, pair) {
  acc[pair[0]] = pair[1];
  return acc;
}

var splitonEqual = function(pair) {
  return pair.split(/[=]/);
}


//   if(input == null) {
//       return {};
//   }
// // write your fancy code here, return the result
//   var parseStr = input.replace("?", "").split(/[=&]/);
//   // parseStr = parseStr.split(/[=&]/);
//   expectedObj = {};
//   var key, value;
//   // console.log(parseStr);
//
//   parseStr.forEach(function (i) {
//     console.log(i);
//     if (i % 2 == 0) {
//       key = parseStr[i];
//       expectedObj[key] = parseStr[i + 1];
//     }
//   })
//   // for (i = 0; i < parseStr.length ; i ++) {
//   //   if (i % 2 == 0) {
//   //   key = parseStr[i];
//   //   expectedObj[key] = parseStr[i += 1];
//   //   }
//   // }
//   // return expectedObj;
}
