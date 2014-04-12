
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
    128: { flash: true, skullGlow: true, blocks: true, waves: true },
    135: { waves: true, blocks: true },
    136: { flash: true, skull: true, waves: true },
    140: { dot: true, waves: true },
    142: { dot2: true, waves: true },
    144: { flash: true, skull: true, waves: false },
    148: { blocks: true, waves: true },
    152: { flash: true, skullGlow: true },
    159: {},
    160: { flash: true, skull: true },
    168: { waves: true, blocks: true, slowball: true, dot: true },

    // 12.1 - 176

    172: { flash: true, skull: true },
    173: { flash: false, skull: false },
    174: { flash: true, skull: true },
    175: { flash: false, skull: false },
    176: { flash: true, skull: true },
    177: { flash: false, skull: false },
    178: { flash: true, skull: true },
    179: { flash: false, skull: false },
    180: { flash: true, skull: true },
    181: { flash: false, skull: false },
    182: { flash: true, skull: true },
    183: { flash: false, skull: false },
    184: { flash: true, skull: true },
    185: { flash: false, skull: false },
    186: { flash: true, skull: true },
    187: { flash: false, skull: false },
    188: { flash: true, skull: true },
    189: { flash: false, skull: false },
    190: { flash: true, skull: true },
    191: { flash: false, skull: false },
    192: { skullGlow: true, waves: true },
    200: { waves: true, dot: true },
    204: { waves: true, dot2: true },
    208: { dot: true, flash: true, skull: true, waves: true },
    210: { dot2: true },
    212: { dot: true },
    214: { dot2: true },
    216: { dot: true },
    218: { dot2: true },
    220: { dot: true },
    222: { dot2: true },
    224: { flash: true, skull: true, blocks: true },
    235: {},

    236: { flash: true, skull: true },
    337: { flash: false, skull: false },
    238: { flash: true, skull: true },
    239: { flash: false, skull: false },
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
    256: { flash: true, skullGlow: true , waves: true },
    260: { waves: true },
    264: { flash: true, skull: true },
    265: {},
    266: { flash: true, skull: true },
    272: { blocks: true, skullGlow: true },
    
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
    328: { skull: true, flash: true, slowball: true, waves: true },
    336: { slowball: true, waves: true, blocks: true },
    344: { slowball: true, waves: true, blocks: true, skullGlow: true },
    352: { flash: true, skull: true, slowball: true, waves: true, blocks: true },

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
    384: { slowball: true, waves: true },
    392: { slowball: true, waves: true, blocks: true, skullGlow: true, flash: true },
    // 28.1 - 432 build up
    432: { flash: true, skull: true },
    433: { flash: false, skull: false },
    434: { flash: true, skull: true },
    435: { flash: false, skull: false },
    436: { flash: true, skull: true },
    437: { flash: false, skull: false },
    438: { flash: true, skull: true },
    439: { flash: false, skull: false },
    440: { flash: true, skull: true },
    441: { flash: false, skull: false },
    442: { flash: true, skull: true },
    443: { flash: false, skull: false },
    444: { flash: true, skull: true },
    445: { flash: false, skull: false },
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
      console.log('A N I M A N G U L A R');
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
            console.log(bar + '.' + beat + ' : ' + step);
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

