
var React = require('react');

var frames = {
  horizontal: [
    1,1,1,1, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  square: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,1,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  box: [
    0,0,0,0, 0,0,0,0, 1,1,1,1, 1,1,1,1,
    1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,0,
  ],
  wave: [
    1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1,
    1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,0,
  ],
  lines: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 1,1,1,1, 1,1,1,1, 1,1,1,0,
  ],
};

var Fx = React.createClass({

  render: function() {

    var tracks = this.props.tracks;
    var playing = this.props.playing;
    var step = this.props.step;

    var styles = {
      container: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      horizontal: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'none',
        MozAnimationDuration: '.1875s',
        WebkitAnimationDuration: '.1875s',
        animationDuration: '.1875s',
      },
      horizontal2: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'none',
        MozAnimationDuration: '.375s',
        WebkitAnimationDuration: '.375s',
        animationDuration: '.375s',
      },
      square: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'none',
        MozAnimationDuration: '.1875s',
        WebkitAnimationDuration: '.1875s',
        animationDuration: '.1875s',
      },
      lines: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'none',
        MozAnimationDuration: '.1875s',
        WebkitAnimationDuration: '.1875s',
        animationDuration: '.1875s',
      },
      line: {
        display: 'none',
        MozAnimationDuration: '1.5s',
        WebkitAnimationDuration: '1.5s',
        animationDuration: '1.5s',
      },
      box: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'none',
        WebkitTransformOrigin: '50% 50%',
        transformOrigin: '50% 50%',
      },
      boxRect: {
        //WebkitTransformOrigin: '16 17',
        //transformOrigin: '16 17',
      },
      wave: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'none',
      }
    };

    if (playing) {
      if (tracks[7].active) {
        styles.horizontal.display = frames.horizontal[step] ? '' : 'none';
        styles.horizontal2.display = frames.horizontal[step] ? '' : 'none';
        styles.square.display = frames.square[step] ? '' : 'none';
      } else if (tracks[8].active) {
        styles.box.display = frames.box[step] ? '' : 'none';
      } else if (tracks[10].active) {
        styles.wave.display = frames.wave[step] ? '' : 'none';
      } else if (tracks[12].active) {
        styles.lines.display = frames.lines[step] ? '' : 'none';
        styles.line.display = frames.lines[step] ? '' : 'none';
      }
    }

    return (
      <div style={styles.container}>

        <svg style={styles.horizontal}
          className="vhs-bottom"
          preserveAspectRatio="none"
          viewBox="0 0 32 32">
          <path d="M0 16 H32"
            className="stroke" />
        </svg>
        <svg style={styles.horizontal2}
          className="vhs-bottom"
          preserveAspectRatio="none"
          viewBox="0 0 32 32">
          <path d="M0 16 H32" className="stroke" />
        </svg>
        <svg style={styles.square}
          className="vhs-bottom"
          viewBox="0 0 32 32">
          <rect x="15" y="2" width="2" height="2" fill="white" />
        </svg>

        <svg style={styles.box}
          viewBox="0 0 32 32">
          <rect x="2" y="2" width="28" height="28"
            className="rotate-down stroke"
            style={styles.boxRect} />
        </svg>
        <svg style={styles.box}
          viewBox="0 0 32 32">
          <rect x="2" y="2" width="28" height="28"
            className="rotate-down vhs-delay-2 stroke"
            style={styles.boxRect} />
        </svg>
        <svg style={styles.box}
          viewBox="0 0 32 32">
          <rect x="2" y="2" width="28" height="28"
            className="rotate-down vhs-delay-3 stroke"
            style={styles.boxRect} />
        </svg>
        <svg style={styles.box}
          viewBox="0 0 32 32">
          <rect x="2" y="2" width="28" height="28"
            className="rotate-down vhs-delay-4 stroke"
            style={styles.boxRect} />
        </svg>

        <svg style={styles.wave}
          viewBox="0 0 32 32"
          preserveAspectRatio="none">
          <path 
            className="stroke cycle-right"
            d=" M-32 16 Q-24 -4 -16 16 T0 16 T16 16 T32 16 "/>
        </svg>
        <svg style={styles.wave}
          viewBox="0 0 32 32"
          preserveAspectRatio="none">
          <path 
            className="stroke cycle-right vhs-delay-3"
            d=" M-32 16 Q-24 -4 -16 16 T0 16 T16 16 T32 16 "/>
        </svg>

        <svg style={styles.lines}
          preserveAspectRatio="none"
          viewBox="0 0 32 32">
          <path style={styles.line} className="stroke vhs-flicker vhs-delay-1" d="M0 14 H32" />
          <path style={styles.line} className="stroke vhs-flicker " d="M0 15 H32" />
          <path style={styles.line} className="stroke vhs-flicker vhs-delay-3" d="M0 16 H32" />
          <path style={styles.line} className="stroke vhs-flicker vhs-delay-2" d="M0 17 H32" />
          <path style={styles.line} className="stroke vhs-flicker vhs-delay-4" d="M0 18 H32" />
        </svg>

      </div>
    )
  }

});

module.exports = Fx;

