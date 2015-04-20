
var React = require('react');
var classnames = require('classnames');

var frames = [
  // 1.1
  { className: 'vhs-fade vhs-reverse' },
  { className: 'vhs-fade vhs-reverse' },
  { className: 'vhs-fade vhs-reverse' },
  { className: 'vhs-fade vhs-reverse' },
  // 1.2
  { className: 'vhs-fade vhs-reverse' },
  { className: 'vhs-fade vhs-reverse' },
  { className: 'vhs-fade vhs-reverse' },
  { className: 'vhs-fade vhs-reverse' },
  // 1.3
  { className: 'vhs-fade vhs-reverse' },
  { className: 'vhs-fade vhs-reverse' },
  { className: 'vhs-fade vhs-reverse' },
  { className: 'vhs-fade vhs-reverse' },
  // 1.4
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  // 2.1 
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  // 2.2
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  // 2.3
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  // 2.4
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  { className: 'display-none' },
  // 32
];


var Tachyons = React.createClass({

  render: function() {
    var playing = this.props.playing;
    var step = this.props.step;
    var tracks = this.props.tracks;
    var animationDuration = '1.5s';
    var active = false;
    if (tracks[9].active) {
      // FX 3
      active = true;
    }
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
        maxHeight: '100%',
      }
    };
    var className = classnames(
      'absolute',
      playing ? frames[step].className : ''
    );
    return (
      <div className={className} style={styles.container}>
        <svg 
          style={styles.svg}
          viewBox="0 0 1024 576"
          fill="currentColor"
          width="100%"
          height="576">
            <g className="warp1">
              <circle cx="512" cy="288" r="128" fill="none" />
              <circle cx="448" cy="160" r="2" />
              <circle cx="384" cy="304" r="2" />
              <circle cx="400" cy="368" r="2" />
              <circle cx="580" cy="344" r="2" />
              <circle cx="588" cy="256" r="2" />
              <circle cx="524" cy="192" r="2" />
            </g>
            <g className="warp2" fill="green">
              <circle cx="512" cy="288" r="128" fill="none"/>
              <circle cx="360" cy="160" r="2" fill="white" />
              <circle cx="576" cy="188" r="2" fill="white" />
              <circle cx="620" cy="288" r="2" fill="white" />
              <circle cx="604" cy="312" r="2" fill="white" />
              <circle cx="512" cy="388" r="2" fill="white" />
              <circle cx="436" cy="366" r="2" fill="white" />
            </g>
            <g className="warp3">
              <circle cx="512" cy="288" r="128" fill="none"/>
              <circle cx="384" cy="280" r="2" fill="white" />
              <circle cx="496" cy="160" r="2" fill="white" />
              <circle cx="560" cy="180" r="2" fill="white" />
              <circle cx="640" cy="180" r="2" fill="white" />
              <circle cx="604" cy="330" r="2" fill="white" />
              <circle cx="580" cy="390" r="2" fill="white" />
              <circle cx="460" cy="400" r="2" fill="white" />
            </g>
        </svg>
      </div>
    )
  }

});

module.exports = Tachyons;

