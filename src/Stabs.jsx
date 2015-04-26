
var React = require('react');
var classnames = require('classnames');

var frames = {
  backdrop: [
    0,0,0,0, 1,1,1,1, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  zigzag: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 1,1,1,0,
  ],
  diagonal1: [
    0,0,0,0, 0,0,0,0, 1,1,1,1, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  diagonal2: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,1,
    1,1,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  dots: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,1,
  ],
  bar: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 1,1,1,1,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ]
};


var Stabs = React.createClass({

  render: function() {
    var playing = this.props.playing;
    var step = this.props.step;
    var tracks = this.props.tracks;
    var animationDuration = '.375s';

    var styles = {
      container: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      backdrop: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'none',
        MozAnimationDuration: '1.5s',
        WebkitAnimationDuration: '1.5s',
        animationDuration: '1.5s',
      },
      zigzag: {
        display: 'none',
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        MozAnimationDuration: '.1875s',
        WebkitAnimationDuration: '.1875s',
        animationDuration: '.1875s',
      },
      diagonal: {
        display: 'none',
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        MozAnimationDuration: '.1875s',
        WebkitAnimationDuration: '.1875s',
        animationDuration: '.1875s',
      },
      dots: {
        display: 'none',
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        MozAnimationDuration: '.1875s',
        WebkitAnimationDuration: '.1875s',
        animationDuration: '.1875s',
      },
      bar: {
        display: 'none',
        position: 'absolute',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        MozAnimationDuration: '.75s',
        WebkitAnimationDuration: '.75s',
        animationDuration: '.75s',
      },
    };

    if (playing) {
      if (tracks[15].active) {
        styles.backdrop.display = frames.backdrop[step] ? '' : 'none';
        styles.zigzag.display = frames.zigzag[step] ? '' : 'none';
      } else if (tracks[16].active) {
        styles.diagonal.display = frames.diagonal1[step] ? '' : 'none';
      } else if (tracks[17].active) {
        styles.diagonal.display = frames.diagonal2[step] ? '' : 'none';
        styles.dots.display = frames.dots[step] ? '' : 'none';
      } else if (tracks[18].active) {
        styles.bar.display = frames.bar[step] ? '' : 'none';
      }
    }

    return (
      <div className="absolute" style={styles.container}>

        <div className="vhs-fade bg-currentcolor" style={styles.backdrop} />

        <svg style={styles.zigzag}
          className="vhs-left"
          viewBox="0 0 32 32">
          <path
            d="M0 16 L4 20 L12 12 L20 20 L28 12 L32 16"
            className="stroke" />
        </svg>
        <svg style={styles.zigzag}
          className="vhs-right"
          viewBox="0 0 32 32">
          <path
            d="M0 16 L4 12 L12 20 L20 12 L28 20 L32 16"
            className="stroke" />
        </svg>

        <svg style={styles.diagonal}
          className="vhs-right"
          viewBox="0 0 32 32">
          <path d="M34 -2 L-2 34" className="stroke" />
        </svg>

        <svg style={styles.dots}
          className="vhs-zoom"
          viewBox="0 0 32 32">
          <circle cx="4" cy="16" r="1" />
          <circle cx="28" cy="16" r="1" />
        </svg>

        <svg style={styles.bar}
          className="vhs-fade"
          preserveAspectRatio="none"
          viewBox="0 0 32 32">
          <rect y="14" width="32" height="2" />
        </svg>

      </div>
    )
  }

});

module.exports = Stabs;

