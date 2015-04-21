
var React = require('react');
var classnames = require('classnames');

var frames1 = [
  // 1.1
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  // 1.2
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  // 1.3
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  // 1.4
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  // 2.1 
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  // 2.2
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  // 2.3
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  // 2.4
  { className: 'display-none' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'display-none' },
];

var frames2 = [
  // 1.1
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  // 1.2
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  // 1.3
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  // 1.4
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  // 2.1 
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  // 2.2
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  // 2.3
  { className: 'vhs-zoom' },
  { className: 'display-none' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  // 2.4
  { className: 'display-none' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
  { className: 'vhs-zoom' },
];


var Bass = React.createClass({

  render: function() {
    var playing = this.props.playing;
    var step = this.props.step;
    var tracks = this.props.tracks;
    var animationDuration = '2.25s';
    var active = (tracks[5].active || tracks[6].active);
    var styles = {
      container: {
        top: '50%',
        left: '50%',
        WebkitTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
        display: active ? '' : 'none',
      },
      svg: {
        opacity: 0.25,
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
      }
    };
    var className = '';
    if (playing) {
      if (tracks[5].active) {
        var className = frames1[step].className; 
      } else if (tracks[6].active) {
        var className = frames2[step].className; 
      }
    }
    return (
      <div className="absolute" style={styles.container}>
        <svg xmlns="http://www.w3.org/2000/svg"
          style={styles.svg}
          className={className}
          viewBox="0 0 32 32"
          width="640"
          height="640">
          <circle cx="16" cy="16" r="12"
            fill="none"
            stroke="white"
            strokeWidth="0.5"/>
          <circle cx="16" cy="16" r="13"
            fill="none"
            stroke="black"
            strokeWidth="0.5"/>
        </svg>
      </div>
    )
  }

});

module.exports = Bass;


