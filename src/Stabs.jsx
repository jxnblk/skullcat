
var React = require('react');
var classnames = require('classnames');

var frames = [
  // 1.1
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  // 1.2
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  { circle1: 'display-none' },
  // 1.3
  { circle1: 'vhs-left' },
  { circle1: 'vhs-left' },
  { circle1: 'vhs-left' },
  { circle1: 'vhs-left' },
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


var Stabs = React.createClass({

  render: function() {
    var playing = this.props.playing;
    var step = this.props.step;
    var tracks = this.props.tracks;
    var animationDuration = '.1875s';
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
      }
    };
    if (playing) {
      var classNames = frames[step]; 
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
          <circle className={classNames.circle1} cx="28" cy="4" r="2" fill="white" />
        </svg>
      </div>
    )
  }

});

module.exports = Stabs;

