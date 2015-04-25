
var React = require('react');
var classnames = require('classnames');

// backdrop
var framesBackdrop = [
  0,0,0,0, 1,1,1,1, 0,0,0,0, 0,0,0,0,
  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
];
// zig zag
var framesZigZag = [
  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  0,0,0,0, 0,0,0,0, 0,0,0,0, 1,1,1,0,
];

var frames2 = [
  0,0,0,0, 0,0,0,0, 1,1,1,1, 0,0,0,0,
  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
];

var frames3 = [
  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
];


var Stabs = React.createClass({

  render: function() {
    var playing = this.props.playing;
    var step = this.props.step;
    var tracks = this.props.tracks;
    var animationDuration = '.375s';
    var active = playing && (tracks[13].active || tracks[14].active || tracks[15].active);
    var classes = {
      zigzag: '',
    };
    var styles = {
      container: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        //display: active ? '' : 'none',
      },
      svg: {
        position: 'absolute',
        height: '100%',
        maxHeight: '100%',
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
        height: '100%',
        maxHeight: '100%',
        MozAnimationDuration: '.1875s',
        WebkitAnimationDuration: '.1875s',
        animationDuration: '.1875s',
      },
      circle1: {
        display: 'none',
        position: 'absolute',
        height: '100%',
        maxHeight: '100%',
        MozAnimationDuration: '.1875s',
        WebkitAnimationDuration: '.1875s',
        animationDuration: '.1875s',
      },
      circle2: {
        display: 'none',
      },
      circle3: {
        display: 'none'
      },
    };
    if (playing) {
      if (tracks[13].active) {
        styles.backdrop.display = framesBackdrop[step] ? '' : 'none';
        styles.zigzag.display = framesZigZag[step] ? '' : 'none';
        classes.zigzag = framesZigZag[step] ? 'vhs-left' : '';
      } else if (tracks[14].active) {
        styles.circle1.display = frames2[step] ? '' : 'none';
      } else if (tracks[15].active) {
        styles.circle3.display = frames3[step] ? '' : 'none';
      }
    }
    return (
      <div className="absolute" style={styles.container}>
        <div className="vhs-fade bg-striped" style={styles.backdrop} />
        <svg style={styles.zigzag}
          className="vhs-left"
          width="100%"
          viewBox="0 0 32 32">
          <path
            d="M0 16 L4 20 L12 12 L20 20 L28 12 L32 16"
            fill="none"
            stroke="white"
            strokeWidth="0.25" />
        </svg>
        <svg style={styles.zigzag}
          className="vhs-right"
          width="100%"
          viewBox="0 0 32 32">
          <path
            d="M0 16 L4 12 L12 20 L20 12 L28 20 L32 16"
            fill="none"
            stroke="white"
            strokeWidth="0.25" />
        </svg>
        <svg style={styles.circle1}
          className="vhs-right"
          width="100%"
          viewBox="0 0 32 32">
          <path d="M34 -2 L-2 34" fill="none" stroke="white" strokeWidth=".25" />
          <circle cx="16" cy="4" r="3" fill="none" stroke="none" strokeWidth=".25" />
        </svg>
        <svg style={styles.svg}
          width="100%"
          viewBox="0 0 32 32">
          <circle
            className="vhs-pop"
            style={styles.circle2}
            cx="16" cy="4" r="2" fill="white" />
        </svg>
      </div>
    )
  }

});

module.exports = Stabs;

