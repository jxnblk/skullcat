
var React = require('react');
var classnames = require('classnames');

var frames = [
  // 1.1
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  // 1.2
  { skull: 'vhs-left', cat: 'display-none' },
  { skull: 'vhs-left', cat: 'display-none' },
  { skull: 'vhs-left', cat: 'vhs-right' },
  { skull: 'vhs-left', cat: 'vhs-right' },
  // 1.3
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  // 1.4
  { skull: 'vhs-left', cat: 'display-none' },
  { skull: 'vhs-left', cat: 'display-none' },
  { skull: 'vhs-left', cat: 'vhs-right' },
  { skull: 'vhs-left', cat: 'vhs-right' },
  // 2.1 
  { skull: 'display-none', cat: 'display-non' },
  { skull: 'display-none', cat: 'display-non' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  // 2.2
  { skull: 'vhs-left', cat: 'display-none' },
  { skull: 'vhs-left', cat: 'display-none' },
  { skull: 'vhs-left', cat: 'vhs-right' },
  { skull: 'vhs-left', cat: 'vhs-right' },
  // 2.3
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  // 2.4
  { skull: 'vhs-left', cat: 'display-none' },
  { skull: 'vhs-left', cat: 'display-none' },
  { skull: 'vhs-left', cat: 'vhs-right' },
  { skull: 'vhs-left', cat: 'vhs-right' },
];


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
      },
      skull: {
        position: 'absolute',
        display: (tracks[20].active || tracks[21].active) ? '' : 'none',
        top: '50%',
        left: 0,
        MozTransform: 'translateY(-50%)',
        WebkitTransform: 'translateY(-50%)',
        transform: 'translateY(-50%)',
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
      },
      cat: {
        position: 'absolute',
        display: (tracks[20].active || tracks[21].active) ? '' : 'none',
        top: '50%',
        right: 0,
        MozTransform: 'translateY(-50%)',
        WebkitTransform: 'translateY(-50%)',
        transform: 'translateY(-50%)',
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
      }
    };

    if (playing) {
      var classNames = {
        skull: classnames('h00', 'h00-responsive', frames[step].skull),
        cat: classnames('h00', 'h00-responsive', frames[step].cat),
      }
    } else {
      var classNames = {
        skull: classnames('h00', 'h00-responsive'),
        cat: classnames('h00', 'h00-responsive'),
      };
    }

    return (
      <div style={styles.container}>
        <div style={styles.skull} className="px3">
          <h1 className={classNames.skull}>skull</h1>
        </div>
        <div style={styles.cat} className="px3">
          <h1 className={classNames.cat}>cat</h1>
        </div>
      </div>
    )
  }

});

module.exports = Lyrics;

