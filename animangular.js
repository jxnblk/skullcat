
plangular.directive('animangular', function($rootScope, $timeout, $interval) {
  var keyframes = {
    1: { log: 'o hai', eyes: true },
    64: { eyes: true, flash: true, skull: true },
    65: { eyes: true, flash: false, skull: false },
    66: { eyes: true, flash: true, skull: true },
    70: { eyes: true, flash: false, skull: false },
    76: { eyes: true, flash: true, skull: true },
    77: { eyes: true, flash: false, skull: false },
    78: { eyes: true, flash: true, skull: true },
    80: { eyes: true, flash: false, skull: false }
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
      var bar = 1 ;
      var beat = 1;
      var oldbeat;
      var step;
      var offset = 0;
      scope.ms = ms;
      console.log(offset);
      var setCounter = function() {
        $interval.cancel(timer);
        var counter = function(){
          ms = Math.floor(audio.currentTime * 10) * 100;
          //ms+=10;
          if(keyframes[step]) {
            scope.frame = keyframes[step];
          }
          scope.ms = Math.floor(ms);
          // 144 bpm // 2.4 bps // 0.0024 bpms
          step = Math.floor(ms * .0096) + 1;
          //bar = Math.floor(ms * .0006) + 1;
          //beat = Math.floor(ms * .0024) - ((bar - 1) * 4) + 1;
          bar = Math.floor(step/16) + 1;
          beat = Math.floor(step/4) - ((bar - 1) * 4) + 1;
          scope.bar = bar;
          scope.beat = beat;
          if (beat != oldbeat) { 
            console.log(bar + '.' + beat + ' : ' + step);
          }
          oldbeat = beat;
          //timer = $interval(counter,10);
        };
        timer = $interval(counter,24);
      };
      audio.addEventListener('playing', function() {
        setCounter();
      });
      audio.addEventListener('pause', function() {
        console.log('paused');
        $interval.cancel(timer);
      });
      audio.addEventListener('seeked', function() {
        setCounter();
      });
    }
  }
});

