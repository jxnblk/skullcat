
var React = require('react');
var classnames = require('classnames');

var frames1 = [
  // 1.1
  { className: 'vhs-pop' },
  { className: '' },
  { className: 'vhs-left' },
  { className: '' },
  // 1.2
  { className: 'vhs-flicker' },
  { className: 'vhs-flicker' },
  { className: 'vhs-right' },
  { className: '' },
  // 1.3
  { className: '' },
  { className: '' },
  { className: 'vhs-pop' },
  { className: '' },
  // 1.4
  { className: 'vhs-flicker' },
  { className: 'vhs-pop' },
  { className: 'vhs-right' },
  { className: '' },
  // 2.1 
  { className: 'vhs-pop' },
  { className: '' },
  { className: 'vhs-pop' },
  { className: '' },
  // 2.2
  { className: 'vhs-flicker' },
  { className: 'vhs-flicker' },
  { className: 'vhs-left' },
  { className: '' },
  // 2.3
  { className: '' },
  { className: '' },
  { className: 'vhs-pop' },
  { className: '' },
  // 2.4
  { className: 'vhs-flicker' },
  { className: 'vhs-pop' },
  { className: 'vhs-right' },
  { className: '' },
];

var frames2 = [
  // 1.1
  { className: 'vhs-pop' },
  { className: '' },
  { className: '' },
  { className: '' },
  // 1.2
  { className: '' },
  { className: '' },
  { className: '' },
  { className: '' },
  // 1.3
  { className: '' },
  { className: '' },
  { className: 'vhs-pop' },
  { className: '' },
  // 1.4
  { className: '' },
  { className: 'vhs-pop' },
  { className: '' },
  { className: '' },
  // 2.1 
  { className: 'vhs-pop' },
  { className: '' },
  { className: 'vhs-pop' },
  { className: '' },
  // 2.2
  { className: '' },
  { className: '' },
  { className: '' },
  { className: '' },
  // 2.3
  { className: '' },
  { className: '' },
  { className: 'vhs-pop' },
  { className: '' },
  // 2.4
  { className: '' },
  { className: 'vhs-pop' },
  { className: '' },
  { className: '' },
];


var Skull = React.createClass({

  render: function() {
    var playing = this.props.playing;
    var step = this.props.step;
    var tracks = this.props.tracks;
    var animationDuration = '.1875s';
    var active = (tracks[1].active || tracks[2].active || tracks[3].active || tracks[4].active);
    var styles = {
      container: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: active ? '' : 'none',
      },
      svg: {
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
      }
    };
    var className = '';
    if (playing) {
      if (tracks[1].active || tracks[2].active || tracks[4].active) {
        var className = frames1[step].className; 
      } else if (tracks[3].active) {
        var className = frames2[step].className; 
      }
    }
    return (
      <div className="absolute" style={styles.container}>
        <svg xmlns="http://www.w3.org/2000/svg"
          style={styles.svg}
          className={className}
          viewBox="0 0 32 32"
          width="512"
          height="512">
          <path fill="#fff" d="M16 7 C13 7 2 9 2 16 C2 23 6 23 10 24 L11 28 L12 26 L20 26 L21 28 L22 24 C26 23 30 23 30 16 C30 9 19 7 16 7 M4 18 A4 4 0 0 1 12 18 A4 4 0 0 1 4 18 M20 18 A4 4 0 0 1 28 18 A4 4 0 0 1 20 18 "/>
        </svg>
      </div>
    )
  }

});

module.exports = Skull;

