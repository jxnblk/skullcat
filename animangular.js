
plangular.directive('animangular', function($rootScope, $timeout) {
  var keyframes = {
    10: { log: 'o hai' },
    6000: { flash: true },
    6050: { flash: false },
    6100: { flash: true },
    6150: { flash: false },
    7200: { flash: true, skull: true },
    7250: { flash: false, skull: false },
    7300: { flash: true, skull: true },
    7350: { flash: false, skull: false },
    7400: { flash: true, skull: true },
    7450: { flash: false, eyes: false, skull: true },
    7800: { eyes: false, skull: false },
    8600: { eyes: false, skull: true },
    8900: { eyes: false, skull: false, flash: true },
    8950: { eyes: false, skull: false, flash: false },
    9000: { eyes: false, skull: false, flash: true },
    9050: { eyes: false, skull: false, flash: false },
    10000: { eyes: false, skull: true, flash: true },
    10050: { eyes: false, skull: true, flash: false },
    10200: { eyes: false, skull: false, flash: true },
    10250: { eyes: false, skull: false, flash: false },
    10400: { eyes: false, skull: true, flash: true },
    10450: { eyes: false, skull: true, flash: false },
    10600: { eyes: false, skull: false, flash: true },
    10650: { eyes: false, skull: false, flash: false },
    10800: { eyes: false, skull: true, flash: true },
    10850: { eyes: false, skull: true, flash: false },
    11000: { eyes: false, skull: false, flash: true },
    11050: { eyes: false, skull: false, flash: false },
    11200: { eyes: false, skull: true, flash: true },
    11250: { eyes: false, skull: true, flash: false },
    11400: { eyes: false, skull: false, flash: true },
    11450: { eyes: false, skull: false, flash: false },
    11600: { eyes: false, skull: true, flash: true },
    11650: { eyes: false, skull: true, flash: false },
    11790: { eyes: false, skull: false, flash: false },
    11800: { eyes: false, skull: true, flash: true },
    11850: { eyes: false, skull: true, flash: false },
    11900: { eyes: false, skull: false, flash: false },
    12000: { eyes: false, skull: true, flash: false },
    12400: { eyes: false, skull: false, flash: false },
    12500: { eyes: false, skull: true, flash: false },
    13000: { eyes: false, skull: false, flash: true },
    13650: { eyes: false, skull: false, flash: false, waves: true },
    13800: { eyes: false, skull: false, flash: false, skullGlow: true },
    14500: { eyes: false, skull: true, flash: true, skullGlow: false },
    14550: { eyes: false, skull: true, flash: false, skullGlow: false, waves: true },
    14600: { eyes: false, skull: false, skullGlow: true },
    15000: { eyes: false, skull: true, waves: true, skullGlow: true },
    15500: { dot: true, eyes: false, skull: false, waves: true, skullGlow: false },
    16500: { eyes: false, skull: false, waves: false, bars: true },
    17200: { eyes: false, skull: false, waves: true, bars: false, skullGlow: true }
  };
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, elem, attrs) {
      console.log('A N I M A N G U L A R');
      var audio = $rootScope.audio;
      var ms;
      var counter;
      var timer;
      scope.ms = ms;
      var setCounter = function() {
        $timeout.cancel(timer);
        ms = Math.floor(audio.currentTime * 10) * 100;
        var counter = function(){
          ms+=10;
          if(keyframes[ms]) {
            scope.$apply(function() {
              scope.frame = keyframes[ms];
            });
          }
          scope.ms = Math.floor(ms);
          scope.bar = Math.floor(scope.ms * .0006) + 1;
          scope.beat = Math.floor(scope.ms * .0024) - ((scope.bar - 1) * 4) + 1;
          timer = $timeout(counter,10);
        };
        timer = $timeout(counter,10);
      };
      audio.addEventListener('play', function() {
        setCounter();
      });
      audio.addEventListener('pause', function() {
        console.log('paused');
        $timeout.cancel(timer);
      });
      audio.addEventListener('seeked', function() {
        setCounter();
      });
    }
  }
});

