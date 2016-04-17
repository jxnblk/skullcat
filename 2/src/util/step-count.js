
module.exports = function(step) {
  step = step + 1;
  var beat = Math.ceil(step/4);
  var tick = step%4 || 4;
  return beat + '.' + tick;
};

