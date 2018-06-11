// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var outputNodes = [];
  var rootNode = document.body;

  var checkerFunction = function() {

  }
  var childNodes = rootNode.childNodes;

  console.log(rootNode.classList)

  if(rootNode.classList.contains(className)) {
    outputNodes.push(rootNode);
    checker = 1;
  }

  // if(childNodes) {
  //   for(var i = 0; i < childNodes.length; i++) {
  //     rootNode = childNodes[i];
  //     return outputNodes.concat(getElementsByClassName(childNodes[i]));
  //   }
  // }

  // if it has child node, recursion
  // etElementsByClassName
  return outputNodes;
};
