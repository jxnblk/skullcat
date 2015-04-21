
var React = require('react');
var classnames = require('classnames');

var frames1 = [
  // 1.1
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  // 1.2
  { circle1: 'vhs-fade' },
  { circle1: 'vhs-fade' },
  { circle1: 'vhs-fade' },
  { circle1: 'vhs-fade' },
  // 1.3
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  // 1.4
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  // 2.1 
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  // 2.2
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  // 2.3
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  // 2.4
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
];

var frames2 = [
  // 1.1
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  // 1.2
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  // 1.3
  { circle2: 'vhs-bottom' },
  { circle2: 'vhs-bottom' },
  { circle2: 'vhs-bottom' },
  { circle2: 'vhs-bottom' },
  // 1.4
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  // 2.1 
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  // 2.2
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  // 2.3
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  // 2.4
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
  { circle2: 'display-none' },
];

var frames3 = [
  // 1.1
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  // 1.2
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  // 1.3
  { circle3: 'vhs-left' },
  { circle3: 'vhs-left' },
  { circle3: 'vhs-left' },
  { circle3: 'vhs-left' },
  // 1.4
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  // 2.1 
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  // 2.2
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  // 2.3
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  // 2.4
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
  { circle3: 'display-none' },
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
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
      },
      svg: {
        height: '100%',
        maxHeight: '100%'
      },
      circle1: {
        MozAnimationDuration: '.75s',
        WebkitAnimationDuration: '.75s',
        animationDuration: '.75s',
      },
      circle2: {},
      circle3: {},
    };
    if (playing) {
      if (tracks[13].active) {
        var classNames = frames1[step]; 
        classNames.circle2 = 'display-none';
        classNames.circle3 = 'display-none';
      } else if (tracks[14].active) {
        var classNames = frames2[step]; 
        classNames.circle1 = 'display-none';
        classNames.circle3 = 'display-none';
      } else if (tracks[15].active) {
        var classNames = frames3[step]; 
        classNames.circle1 = 'display-none';
        classNames.circle2 = 'display-none';
      } else {
        var classNames = {};
        classNames.circle1 = 'display-none';
        classNames.circle2 = 'display-none';
        classNames.circle3 = 'display-none';
      }
    } else {
      var classNames = {
        circle1: '',
        circle2: '',
        circle3: '',
      };
    }
    return (
      <div className="absolute" style={styles.container}>
        <svg style={styles.svg}
          width="100%"
          viewBox="0 0 32 32">
          <g opacity="0.25">
            <circle
              style={styles.circle1}
              className={classNames.circle1}
              cx="16" cy="16" r="16" fill="white" />
          </g>
          <circle
            className={classNames.circle2}
            opacity="0.75"
            cx="16" cy="4" r="2" fill="white" />
        </svg>
      </div>
    )
  }

});

module.exports = Stabs;

