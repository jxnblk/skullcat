
var React = require('react');

var frames = {
  wave: [
    1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1,
    1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,0,
  ],
  lines: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 1,1,1,1, 1,1,1,1, 1,1,1,0,
  ],
  x: [
    1,1,1,1, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  bolt: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,0,
  ]
};

var Science = React.createClass({

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
      wave: {
        position: 'absolute',
        top: '25%',
        width: '100%',
        height: '50%',
        maxHeight: '100%',
        display: 'none',
      },
      bolt: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        MozAnimationDuration: '1.5s',
        WebkitAnimationDuration: '1.5s',
        animationDuration: '1.5s',
        display: 'none',
      },
      x: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'none',
      }
    };

    if (playing) {
      if (tracks[11].active) {
        styles.wave.display = frames.wave[step] ? '' : 'none';
      } else if (tracks[12].active) {
        styles.bolt.display = frames.bolt[step] ? '' : 'none';
      } else if (tracks[13].active) {
        styles.x.display = frames.x[step] ? '' : 'none';
      } else if (tracks[14].active) {
        styles.lines.display = frames.lines[step] ? '' : 'none';
        styles.line.display = frames.lines[step] ? '' : 'none';
      }
    }

    return (
      <div style={styles.container}>

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

        <svg style={styles.x}
          className="vhs-flicker"
          viewBox="0 0 32 32">
          <path className="stroke"
            d="M20.25 14.5 l3 3 M23.25 14.5 l-3 3" />
        </svg>

        <svg style={styles.bolt}
          className="vhs-pop vhs-reverse"
          preserveAspectRatio="none"
          viewBox="0 0 32 32">
          <path className="stroke" d="M0 16 L14 12 L18 20 L32 16" />
        </svg>
        <svg style={styles.bolt}
          className="vhs-pop vhs-reverse vhs-delay-3"
          preserveAspectRatio="none"
          viewBox="0 0 32 32">
          <path className="stroke" d="M0 16 L12 10 L20 22 L32 16" />
        </svg>
        <svg style={styles.bolt}
          className="vhs-pop vhs-reverse vhs-delay-4"
          preserveAspectRatio="none"
          viewBox="0 0 32 32">
          <path className="stroke" d="M0 16 L10 6 L22 26 L32 16" />
        </svg>

      </div>
    )
  }

});

module.exports = Science;

