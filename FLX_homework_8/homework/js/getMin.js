function getMin() {
  var result = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] < result) {
      result = arguments[i];
    }
  }
  return result;
}

getMin(3, 0, -3); 