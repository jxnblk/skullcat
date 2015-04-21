
var React = require('react');
var classnames = require('classnames');

var frames = [
  // 1.1
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  // 1.2
  { skull: 'vhs-pop', cat: 'display-none' },
  { skull: 'vhs-pop', cat: 'display-none' },
  { skull: 'display-none', cat: 'vhs-pop' },
  { skull: 'display-none', cat: 'vhs-pop' },
  // 1.3
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  // 1.4
  { skull: 'vhs-pop', cat: 'display-none' },
  { skull: 'vhs-pop', cat: 'display-none' },
  { skull: 'display-none', cat: 'vhs-pop' },
  { skull: 'display-none', cat: 'vhs-pop' },
  // 2.1 
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  // 2.2
  { skull: 'vhs-pop', cat: 'display-none' },
  { skull: 'vhs-pop', cat: 'display-none' },
  { skull: 'display-none', cat: 'vhs-pop' },
  { skull: 'display-none', cat: 'vhs-pop' },
  // 2.3
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  { skull: 'display-none', cat: 'display-none' },
  // 2.4
  { skull: 'vhs-pop', cat: 'display-none' },
  { skull: 'vhs-pop', cat: 'display-none' },
  { skull: 'display-none', cat: 'vhs-pop' },
  { skull: 'display-none', cat: 'vhs-pop' },
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
        display: (tracks[20].active || tracks[21].active) ? '' : 'none',
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

    if (playing) {
      var classNames = {
        skull: classnames('h00', 'xh00-responsive', frames[step].skull),
        cat: classnames('h00', 'xh00-responsive', frames[step].cat),
      }
    } else {
      var classNames = {
        skull: classnames('h00', 'h00-responsive', 'display-none'),
        cat: classnames('h00', 'h00-responsive', 'display-none'),
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

