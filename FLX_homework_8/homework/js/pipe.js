function addOne(x) {
  return x + 1;
}

function pipe() {
  var x = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    var arg = arguments[i];
    x = arg(x)
  }
  return x;
}

pipe(1, addOne); 
pipe(1, addOne, addOne);