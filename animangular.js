
plangular.directive('animangular', function($rootScope, $timeout, $interval) {
  var keyframes = {
    1: { log: 'o hai', eyes: true },
    64: { eyes: true, flash: true, skull: true },
    65: { eyes: true },
    66: { eyes: true, flash: true, skull: true },
    70: { eyes: true },
    76: { eyes: true, flash: true, skull: true },
    77: { eyes: true },
    78: { eyes: true, flash: true, skull: true },
    80: { eyes: true },
    90: { eyes: true, flash: true, skull: true },
    92: { eyes: true },
    94: { eyes: true, flash: true, skull: true },
    95: { eyes: true },
    96: { eyes: true, flash: true, skull: true },
    98: { eyes: true },
    110: { eyes: true, flash: true, skull: true },
    111: { eyes: true },
    // 8.1 - 112
    112: { eyes: true, flash: true, skull: true },
    113: { eyes: true },
    114: { eyes: true, flash: true, skull: true },
    115: { eyes: true },
    116: { eyes: true, flash: true, skull: true },
    117: { eyes: true },
    118: { eyes: true, flash: true, skull: true },
    119: { eyes: true },
    120: { eyes: true, flash: true, skull: true },
    121: { eyes: true },
    122: { eyes: true, flash: true, skull: true },
    123: { eyes: true },
    // 9.1
    128: { dot: true, strobe: true, skullGlow: true },
    134: { dot2: true, skullGlow:true },
    136: { flash: true, skull: true },
    140: { dot: true  },
    144: { flash: true, skull: true },
    146: { dot2: true, flash: true, skull: true },
    150: { dot2: true },
    152: { flash: true, dot: true },
    158: { dot2: true },
    160: { dot2: true, flash: true, skull: true },
    164: { dot: true },
    170: { dot2: true },
    // 11.1 - 176 build up
    172: { flash: true, skull: true },
    173: {},
    174: { flash: true, skull: true },
    175: {},
    176: { flash: true, skull: true },
    177: {},
    178: { flash: true, skull: true },
    179: {},
    180: { flash: true, skull: true },
    181: {},
    182: { flash: true, skull: true },
    183: {},
    184: { flash: true, skull: true },
    185: {},
    186: { flash: true, skull: true },
    187: {},
    188: { flash: true, skull: true },
    189: {},
    190: { flash: true, skull: true },
    191: {},
    192: { dot: true, flash: true, skullGlow: true, zag: true },
    198: { dot2: true, skullGlow: true, zag: true },
    200: { flash: true, skull: true },
    204: { dot: true, skull: true },
    207: {},
    208: { skull: true },
    210: { dot2: true },
    216: { dot: true },
    222: { dot2: true },
    224: { flash: true, skull: true },
    228: { dot: true, skull: true },
    234: { dot2: true },

    // 16.1 - build up
    240: { dot: true, flash: true, skull: true },
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
    256: { flash: true, skullGlow: true, diamond: true, zag: true },
    260: { skullGlow: true, diamond: true, diamond2: true },
    264: { flash: true, skullGlow: true, diamond: true, diamond2: true },
    268: { skullGlow: true, diamond: true, diamond2: true },
    272: { flash: true, skullGlow: true, diamond: true, diamond2: true, zig1: true },
    276: { skullGlow: true, diamond: true, diamond2: true },
    280: { flash: true, skullGlow: true, diamond: true, diamond2: true, zig2: true },
    286: { skullGlow: true, diamond: true, diamond2: true },
    288: { flash: true, skullGlow: true, diamond: true, diamond2: true, zag: true },
    292: { skullGlow: true, diamond: true, diamond2: true },
    296: { flash: true, skull: true, zig1: true },
    
    300: { flash: true, skull: true },
    301: {},
    302: { flash: true, skull: true },
    303: {},
    // 20.1 - 304 build up
    304: { flash: true, skull: true, zig2: true },
    305: {},
    306: { flash: true, skull: true, zig1: true },
    307: {},
    308: { flash: true, skull: true, zig2: true },
    309: {},
    310: { flash: true, skull: true, zig1: true },
    311: {},
    312: { flash: true, skull: true, zig2: true },
    313: {},
    314: { flash: true, skull: true, zig1: true },
    315: {},
    316: { flash: true, skull: true, zig2: true },
    317: {},
    318: { flash: true, skull: true, zig1: true },
    319: {},
    // 21.1 - 320 splash
    320: { strobe: true, skullGlow: true, diamond: true, ringWarp: true, stars: true },
    328: { skullGlow: true, diamond: true, ringWarp: true, stars: true },
    336: { strobe: true, skullGlow: true, diamond: true },
    344: { skullGlow: true, diamond: true },
    352: { skullGlow: true, diamond: true, zag: true },
    360: { flash: true, skullGlow: true, diamond: true },

    362: {},
    // 24.1 - 368 build up
    364: { flash: true, skull: true },
    365: {},
    366: { flash: true, skull: true },
    367: {},
    368: { flash: true, skull: true },
    369: {},
    370: { flash: true, skull: true },
    371: {},
    372: { flash: true, skull: true },
    373: {},
    374: { flash: true, skull: true },
    375: {},
    376: { flash: true, skull: true },
    377: {},
    378: { flash: true, skull: true },
    379: {},
    380: { flash: true, skull: true },
    381: {},
    382: { flash: true, skull: true },
    383: {},
    // 25.1 - 384 splash
    384: { dot: true, skullGlow: true },
    390: { dot2: true, skullGlow: true },
    392: { dot2: true, skullGlow: true, zig1: true, flash: true },
    396: { dot: true, skullGlow: true },
    400: { flash: true, dot: true, skullGlow: true },
    402: { flash: true, dot2: true, skullGlow: true },
    408: { dot: true, skullGlow: true, zig2: true, flash: true },
    414: { dot2: true, skullGlow: true },
    416: { dot2: true, skullGlow: true, flash: true },
    420: { dot: true, skullGlow: true },
    424: { dot: true, skullGlow: true, zig1: true },
    426: { dot2: true, skullGlow: true, zig1: true },
    // 28.1 - 432 build up
    432: { dot: true, flash: true, skull: true },
    433: { dot: true },
    434: { dot: true, flash: true, skull: true },
    435: { dot: true },
    436: { dot: true, flash: true, skull: true },
    437: { dot: true },
    438: { dot2: true, flash: true, skull: true },
    439: { dot2: true },
    440: { dot2: true, flash: true, skull: true },
    441: { dot2: true },
    442: { flash: true, skull: true },
    443: {},
    444: { dot: true, flash: true, skull: true },
    445: { dot: true },
    446: { dot: true, flash: true, skull: true },
    447: {},
    // 29.1 - 448 splash
    448: { dot: true, flash: true, skullGlow: true, ringWarp: true, stars: true },
    454: { dot2: true, skullGlow: true, ringWarp: true, stars: true },
    460: { dot: true, skullGlow: true, ringWarp: true, stars: true },
    466: { dot2: true, skullGlow: true },
    472: { dot: true, skullGlow: true },


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

    1008: {}
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

