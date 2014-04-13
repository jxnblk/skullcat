
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
    80: { eyes: true, flash: false, skull: false },
    90: { eyes: true, flash: true, skull: true },
    92: { eyes: true, flash: false, skull: false },
    94: { eyes: true, flash: true, skull: true },
    95: { eyes: true, flash: false, skull: false },
    96: { eyes: true, flash: true, skull: true },
    98: { eyes: true, flash: false, skull: false },
    110: { eyes: true, flash: true, skull: true },
    111: { eyes: true, flash: false, skull: false },
    // 8.1 - 112
    112: { eyes: true, flash: true, skull: true },
    113: { eyes: true, flash: false, skull: false },
    114: { eyes: true, flash: true, skull: true },
    115: { eyes: true, flash: false, skull: false },
    116: { eyes: true, flash: true, skull: true },
    117: { eyes: true, flash: false, skull: false },
    118: { eyes: true, flash: true, skull: true },
    119: { eyes: true, flash: false, skull: false },
    120: { eyes: true, flash: true, skull: true },
    121: { eyes: true, flash: false, skull: false },
    122: { eyes: true, flash: true, skull: true },
    123: { eyes: true, flash: false, skull: false },
    128: { flash: true, skullGlow:true },
    134: { skullGlow:true },
    136: { flash: true, skull: true },
    142: {},
    144: { flash:true, skull:true },
    148: {},

    // 12.1 - 176

    // 16.1 - build up
    240: { flash: true, skull: true },
    241: { flash: false, skull: false },
    242: { flash: true, skull: true },
    243: { flash: false, skull: false },
    244: { flash: true, skull: true },
    245: { flash: false, skull: false },
    246: { flash: true, skull: true },
    247: { flash: false, skull: false },
    248: { flash: true, skull: true },
    249: { flash: false, skull: false },
    250: { flash: true, skull: true },
    251: { flash: false, skull: false },
    251: { flash: true, skull: true },
    252: { flash: false, skull: false },
    254: {},
 
    // 17.1 - splash
    256: { flash: true, skullGlow: true },
    
    300: { flash: true, skull: true },
    301: { flash: false, skull: false },
    302: { flash: true, skull: true },
    303: { flash: false, skull: false },
    // 20.1 - 304 build up
    304: { flash: true, skull: true },
    305: { flash: false, skull: false },
    306: { flash: true, skull: true },
    307: { flash: false, skull: false },
    308: { flash: true, skull: true },
    309: { flash: false, skull: false },
    310: { flash: true, skull: true },
    311: { flash: false, skull: false },
    312: { flash: true, skull: true },
    313: { flash: false, skull: false },
    314: { flash: true, skull: true },
    315: { flash: false, skull: false },
    316: { flash: true, skull: true },
    317: { flash: false, skull: false },
    318: {},
    // 21.1 - 320 splash
    320: { flash: true, skullGlow: true },
    327: {},

    // 24.1 - 368 build up
    368: { flash: true, skull: true },
    369: { flash: false, skull: false },
    370: { flash: true, skull: true },
    371: { flash: false, skull: false },
    372: { flash: true, skull: true },
    373: { flash: false, skull: false },
    374: { flash: true, skull: true },
    375: { flash: false, skull: false },
    376: { flash: true, skull: true },
    377: { flash: false, skull: false },
    378: { flash: true, skull: true },
    379: { flash: false, skull: false },
    380: { flash: true, skull: true },
    381: { flash: false, skull: false },
    382: {},

    // 25.1 - 384 splash
    // 28.1 - 432 build up
    446: {},
    // 29.1 - 448 splash
    // 32.1 - 496 build up
    // 33.1 - 512 splash - break
    // 36.1 - 560 - build up
    // 40.1 - 624 - build up
    // 44.1 - 688 - build up
    // 48.1 - 752 - build up
    // 52.1 - 816 - build up
    // 56.1 - 880 - build up
    // 60.1 - 944 - build up
    // 64.1 - 1008 - build up

  };
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, elem, attrs) {
      //console.log('A N I M A N G U L A R');
      var audio = $rootScope.audio;
      var ms;
      var counter;
      var timer;
      var bar = 1 ;
      var beat = 1;
      var oldbeat;
      var step;
      scope.ms = ms;
      var setCounter = function() {
        $interval.cancel(timer);
        var counter = function(){
          ms = Math.floor(audio.currentTime * 10) * 100;
          if(keyframes[step]) {
            scope.frame = keyframes[step];
          }
          scope.ms = Math.floor(ms);
          // 144 bpm // 2.4 bps // 0.0024 bpms
          step = Math.floor(ms * .0096) + 1;
          bar = Math.floor(step/16) + 1;
          beat = Math.floor(step/4) - ((bar - 1) * 4) + 1;
          if (beat != oldbeat) {
            //console.log(bar + '.' + beat + ' : ' + step);
          }
          scope.bar = bar;
          scope.beat = beat;
          oldbeat = beat;
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

