app.filter('checkmark', function() {
  return function(input) {
    return input.slice(0,4);
  }
});