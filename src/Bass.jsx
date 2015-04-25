
var React = require('react');
var classnames = require('classnames');

var frames1 = [
  1,1,1,1, 1,1,1,1, 1,1,1,1, 0,0,0,0,
  1,1,1,1, 1,1,1,1, 0,0,1,1, 0,1,1,0
];

var frames2 = [
  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  1,1,1,1, 1,1,1,1, 1,0,1,1, 0,1,1,1
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
        WebkitTransform: 'translate3d(-50%, -50%, 0)',
        transform: 'translate3d(-50%, -50%, 0)',
        display: active ? '' : 'none',
      },
      svg: {
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
      },
      circle: {
        WebkitTransformOrigin: '16 16',
        transformOrigin: '16 16',
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
      }
    };
    var className = 'vhs-zoom';
    if (playing) {
      if (tracks[5].active) {
        styles.svg.display = frames1[step] ? '' : 'none';
      } else if (tracks[6].active) {
        styles.svg.display = frames2[step] ? '' : 'none';
      }
    }
    return (
      <div className="absolute" style={styles.container}>
        <svg xmlns="http://www.w3.org/2000/svg"
          style={styles.svg}
          viewBox="0 0 32 32"
          width="768"
          height="768">
          <circle cx="16" cy="16" r="12"
            className="stroke vhs-zoom"
            style={styles.circle} />
        </svg>
      </div>
    )
  }

});

module.exports = Bass;


