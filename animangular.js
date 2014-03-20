
plangular.directive('animangular', function($rootScope, $timeout) {
  var keyframes = {
    10: { log: 'o hai' },
    250: { dot: true },
    300: { dot: false },
    700: { dot: true },
    750: { dot: false },
    2950: { flash: true },
    3000: { flash: false },
    3450: { flash: true },
    3550: { flash: false },
    10800: { flash: true, skull: true },
    10850: { flash: false, skull: false },
    11300: { flash: true, skull: true },
    11350: { flash: false, skull: false },
    13000: { flash: true, skull: true },
    13050: { flash: false, eyes: false, skull: true }
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
      audio.addEventListener('play', function() {
        ms = Math.floor(audio.currentTime * 10) * 100;
        var counter = function(){
          ms+=10
          if(keyframes[ms]) {
            console.log(keyframes[ms]);
            scope.$apply(function() {
              scope.frame = keyframes[ms];
            });
          }
          scope.ms = Math.floor(ms);
          timer = $timeout(counter,10);
        };
        timer = $timeout(counter,10);
      });
      audio.addEventListener('pause', function() {
        console.log('paused');
        $timeout.cancel(timer);
      });
    }
  }
});

