
var React = require('react');

var frames = {
  skull: [
    0,0,0,0, 1,1,0,0, 0,0,0,0, 1,1,0,0,
    0,0,0,0, 1,1,0,0, 0,0,0,0, 1,1,0,0,
  ],
  cat: [
    0,0,0,0, 0,0,1,1, 0,0,0,0, 0,0,1,1,
    0,0,0,0, 0,0,1,1, 0,0,0,0, 0,0,1,1,
  ]
};

var Lyrics = React.createClass({

  render: function() {
    var playing = this.props.playing;
    var step = this.props.step;
    var tracks = this.props.tracks;
    var animationDuration = '.1875s';
    var styles = {
      container: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: (tracks[20].active || tracks[21].active) ? '' : 'none',
      },
      skull: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        MozTransform: 'translate(-50%, 0%)',
        WebkitTransform: 'translate(-50%, 0%)',
        transform: 'translate(-50%, 0%)',
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
      },
      cat: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        MozTransform: 'translate(-50%, 0%)',
        WebkitTransform: 'translate(-50%, 0%)',
        transform: 'translate(-50%, 0%)',
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
      }
    };

    if (tracks[20].active || tracks[21].active) {
      styles.skull.display = frames.skull[step] ? '' : 'none';
      styles.cat.display = frames.cat[step] ? '' : 'none';
    }

    return (
      <div style={styles.container}>
        <div style={styles.skull} className="px3">
          <h1 className="h00 vhs-pop">skull</h1>
        </div>
        <div style={styles.cat} className="px3">
          <h1 className="h00 vhs-pop">cat</h1>
        </div>
      </div>
    )
  }

});

module.exports = Lyrics;

