
var React = require('react');
var classnames = require('classnames');

var frames = [
  1,1,1,1, 1,1,1,1, 1,1,1,1, 0,0,0,0,
  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
];


var Tachyons = React.createClass({

  render: function() {
    var playing = this.props.playing;
    var step = this.props.step;
    var tracks = this.props.tracks;
    var animationDuration = '2.25s';
    var active = false;
    if (tracks[9].active) {
      // FX 3
      active = true;
    }
    var styles = {
      container: {
        position: 'absolute',
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
    if (tracks[9].active) {
      styles.svg.display = frames[step] ? '' : 'none';
    }
    return (
      <div style={styles.container}>
        <svg 
          style={styles.svg}
          viewBox="0 0 1024 576"
          width="100%">
            <g className="warp1" fill="currentColor">
              <circle cx="512" cy="288" r="128" fill="none" />
              <circle cx="448" cy="160" r="2" />
              <circle cx="384" cy="304" r="2" />
              <circle cx="400" cy="368" r="2" />
              <circle cx="580" cy="344" r="2" />
              <circle cx="588" cy="256" r="2" />
              <circle cx="524" cy="192" r="2" />
            </g>
            <g className="warp2" fill="currentColor">
              <circle cx="512" cy="288" r="128" fill="none"/>
              <circle cx="360" cy="160" r="2" />
              <circle cx="576" cy="188" r="2" />
              <circle cx="620" cy="288" r="2" />
              <circle cx="604" cy="312" r="2" />
              <circle cx="512" cy="388" r="2" />
              <circle cx="436" cy="366" r="2" />
            </g>
            <g className="warp3" fill="currentColor">
              <circle cx="512" cy="288" r="128" fill="none"/>
              <circle cx="384" cy="280" r="2" />
              <circle cx="496" cy="160" r="2" />
              <circle cx="560" cy="180" r="2" />
              <circle cx="640" cy="180" r="2" />
              <circle cx="604" cy="330" r="2" />
              <circle cx="580" cy="390" r="2" />
              <circle cx="460" cy="400" r="2" />
            </g>
        </svg>
      </div>
    )
  }

});

module.exports = Tachyons;

