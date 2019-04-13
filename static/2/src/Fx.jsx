
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
  bar: [
    1,1,1,1, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  bubble: [
    0,0,1,1, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  horizon: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 1,1,1,1, 1,1,1,1, 1,1,1,1,
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
      box: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'none',
        WebkitTransformOrigin: '50% 50%',
        transformOrigin: '50% 50%',
      },
      bar: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        MozAnimationDuration: '.1875s',
        WebkitAnimationDuration: '.1875s',
        animationDuration: '.1875s',
        display: 'none',
      },
      bubble: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'none',
      },
      bubbleCircle: {
        WebkitTransformOrigin: '10.5 16',
        transformOrigin: '10.5 16',
      },
      horizon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        //WebkitTransformOrigin: '50% 50%',
        //transformOrigin: '50% 50%',
        display: 'none',
      },
    };

    if (playing) {
      if (tracks[7].active) {
        styles.horizontal.display = frames.horizontal[step] ? '' : 'none';
        styles.horizontal2.display = frames.horizontal[step] ? '' : 'none';
        styles.square.display = frames.square[step] ? '' : 'none';
      } else if (tracks[8].active) {
        styles.box.display = frames.box[step] ? '' : 'none';
      } else if (tracks[10].active) {
        styles.bar.display = frames.bar[step] ? '' : 'none';
        styles.bubble.display = frames.bubble[step] ? '' : 'none';
        styles.horizon.display = frames.horizon[step] ? '' : 'none';
      }
    }

    return (
      <div style={styles.container}>

        <svg style={styles.horizontal}
          className="vhs-bottom"
          preserveAspectRatio="none"
          viewBox="0 0 32 32">
          <path d="M0 16 H32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25" />
        </svg>
        <svg style={styles.horizontal2}
          className="vhs-bottom"
          preserveAspectRatio="none"
          viewBox="0 0 32 32">
          <path d="M0 16 H32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25" />
        </svg>
        <svg style={styles.square}
          className="vhs-bottom"
          viewBox="0 0 32 32">
          <rect x="15" y="2" width="2" height="2" fill="currentColor" />
        </svg>

        <svg style={styles.box}
          className="rotate-down"
          viewBox="0 0 32 32">
          <rect x="2" y="2" width="28" height="28"
            className="stroke" />
        </svg>
        <svg style={styles.box}
          className="rotate-down vhs-delay-2"
          viewBox="0 0 32 32">
          <rect x="2" y="2" width="28" height="28"
            className="stroke"
            style={styles.boxRect} />
        </svg>
        <svg style={styles.box}
          className="rotate-down vhs-delay-3"
          viewBox="0 0 32 32">
          <rect x="2" y="2" width="28" height="28"
            className="stroke"
            style={styles.boxRect} />
        </svg>
        <svg style={styles.box}
          className="rotate-down vhs-delay-4"
          viewBox="0 0 32 32">
          <rect x="2" y="2" width="28" height="28"
            className="stroke"
            style={styles.boxRect} />
        </svg>

        <svg style={styles.bar}
          className="vhs-top "
          viewBox="0 0 32 32">
          <rect x="4" y="26" width="24" height="2" />
        </svg>
        <svg style={styles.bubble}
          className="xvhs-pop"
          viewBox="0 0 32 32">
          <circle cx="10.5" cy="16" r="2"
            style={styles.bubbleCircle}
            className="vhs-pop stroke" />
        </svg>
        <svg style={styles.horizon}
          preserveAspectRatio="none"
          viewBox="0 0 32 32">
          <path className="rotate stroke" d="M-16 16 H48" />
        </svg>

      </div>
    )
  }

});

module.exports = Fx;

