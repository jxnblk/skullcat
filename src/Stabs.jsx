
var React = require('react');
var classnames = require('classnames');

var frames1 = [
  0,0,0,0, 1,1,1,1, 1,1,0,0, 0,0,0,0,
  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
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
    var styles = {
      container: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: active ? '' : 'none',
      },
      svg: {
        height: '100%',
        maxHeight: '100%',
        outline: '2px solid red'
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
      circle1: {
        display: 'none',
        MozAnimationDuration: '.75s',
        WebkitAnimationDuration: '.75s',
        animationDuration: '.75s',
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
        styles.backdrop.display = frames1[step] ? '' : 'none';
      } else if (tracks[14].active) {
        styles.circle2.display = frames2[step] ? '' : 'none';
      } else if (tracks[15].active) {
        styles.circle3.display = frames3[step] ? '' : 'none';
      }
    }
    return (
      <div className="absolute" style={styles.container}>
        <div className="vhs-fade bg-white" style={styles.backdrop} />
        <svg style={styles.svg}
          width="100%"
          viewBox="0 0 32 32">
          <circle
            className="vhs-fade"
            style={styles.circle1}
            cx="16" cy="16" r="14" fill="none" stroke="white" stroke-width=".5" />
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

