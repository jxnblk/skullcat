
var React = require('react');
var classnames = require('classnames');

var frames = {
  dots: [
    1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1,
    1,1,1,1, 1,1,1,1, 1,1,1,1, 0,0,0,0,
  ],
  keys: [
    1,0,0,1, 1,0,1,1, 0,1,1,0, 1,1,0,1,
    1,0,0,1, 1,0,1,1, 0,1,1,0, 1,1,0,1,
  ],
};


var Chords = React.createClass({

  render: function() {
    var playing = this.props.playing;
    var step = this.props.step;
    var tracks = this.props.tracks;

    var styles = {
      container: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      dots: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'none',
      },
      keys: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'none',
        MozAnimationDuration: '.09375s',
        WebkitAnimationDuration: '.09375s',
        animationDuration: '.09375s',
      },
    };

    if (playing) {
      if (tracks[25].active) {
      } else if (tracks[27].active) {
        styles.dots.display = frames.dots[step] ? '' : 'none';
      } else if (tracks[28].active) {
        styles.keys.display = frames.keys[step] ? '' : 'none';
      }
    }

    return (
      <div className="absolute" style={styles.container}>

        <svg style={styles.dots}
          className="rotate-down"
          viewBox="0 0 32 32">
          <circle cx="16" cy="4" r="0.5" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(30 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(60 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(90 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(120 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(150 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(180 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(210 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(240 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(270 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(300 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(330 16 16)" />
        </svg>
        <svg style={styles.dots}
          className="rotate-down vhs-delay-4"
          viewBox="0 0 32 32">
          <circle cx="16" cy="4" r="0.5" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(30 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(60 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(90 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(120 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(150 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(180 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(210 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(240 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(270 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(300 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(330 16 16)" />
        </svg>
        <svg style={styles.dots}
          className="rotate-down vhs-delay-5"
          viewBox="0 0 32 32">
          <circle cx="16" cy="4" r="0.5" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(30 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(60 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(90 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(120 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(150 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(180 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(210 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(240 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(270 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(300 16 16)" />
          <circle cx="16" cy="4" r="0.5" transform="rotate(330 16 16)" />
        </svg>

        <svg style={styles.keys}
          className="vhs-top"
          viewBox="0 0 32 32">
          <rect x="7.5" y="6" width="1" height="1" />
          <rect x="11.5" y="6" width="1" height="1" />
          <rect x="15.5" y="6" width="1" height="1" />
          <rect x="19.5" y="6" width="1" height="1" />
          <rect x="23.5" y="6" width="1" height="1" />
        </svg>

      </div>
    )
  }

});

module.exports = Chords;

