// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var outputNodes = [];
  var rootNode = document.body;





  var checkerFunction = function(currentNode) {
      // var currentNode;
  if(currentNode.classList !== undefined) {
    if(currentNode.classList.contains(className)) {
      outputNodes.push(currentNode);
      }
    }

    var child = currentNode.childNodes;
    //checkerFunction(currentNode);


    if(child) {
        for (var i = 0; i < child.length; i++) {
          var currentNode = child[i];
          checkerFunction(currentNode);
        }
    }
  }

  checkerFunction(rootNode);


// checkerFunction
// if it does have child
// we call getElementsByClassName
  return outputNodes;
};
