// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // if it is string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    return "null";
  }
   else if (Array.isArray(obj)) {
    if(obj.length === 0) {
      return '[]';
    } else {
      var holderArray = [];
      var stringOfElements;
      for (var i = 0; i < obj.length; i++) {
        var current = obj[i];
        if (Array.isArray(current)) {
          //holderArray.concat(stringifyJSON(current));
          stringifyJSON(current);
        }

        holderArray.push(stringifyJSON(obj[i]));

      }
      stringOfElements = holderArray.join(',');
      return '[' + stringOfElements + ']';
    }
  } else if (typeof obj === 'object') {

    var fullObj = [];
      for (var key in obj) {
        var theKey;
        var theValue;

        if (typeof obj[key] === 'function' || obj[key] === undefined) {
          continue;
        }
        if(typeof obj[key] === 'object') {
          stringifyJSON(obj[key]);
        }
        theKey = stringifyJSON(key);
        theValue = stringifyJSON(obj[key]);

        //fullObj.push(theKey)
        //fullObj.push(':')
        //fullObj.push(theValue);
        var temp =  theKey + ':' + theValue;
        fullObj.push(temp);
        // var fullObjString = fullObj.join(',');

    }

    return '{' + fullObj.join(',') + '}';


  }
  return ""+obj;
};
