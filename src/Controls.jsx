
var React = require('react');
var classnames = require('classnames');

var Controls = React.createClass({

  propTypes: {
    toggleTrack: React.PropTypes.func.isRequired,
    tracks: React.PropTypes.array.isRequired,
    queue: React.PropTypes.array.isRequired,
    unqueue: React.PropTypes.array.isRequired,
    step: React.PropTypes.number.isRequired,
  },

  renderTrack: function(track, i) {
    var self = this;
    function handleClick(e) {
      self.props.toggleTrack(i);
    }
    var queued = false;
    var unqueued = false;
    if (this.props.queue.indexOf(i) > -1) {
      queued = true;
    }
    if (this.props.unqueue.indexOf(i) > -1) {
      unqueued = true;
    }
    var styles = {
      button: {
        MozAnimationDuration: '.375s', // 4 steps
        WebkitAnimationDuration: '.375s',
        animationDuration: '.375s',
      },
      progress: {
        width: '100%',
      }
    };
    var progress = (this.props.step % track.steps) / track.steps;
    return (
      <div key={'track-'+i}>
        <button style={styles.button}
          className={
            classnames('button', 'button-transparent',
              {
                'vhs-flash vhs-infinite vhs-alternate': queued || unqueued,
                'red': track.active,
              }
            )
          }
          onClick={handleClick}>
          {track.name} {i}
        </button>
        <progress
          className={classnames('progress', { 'red': track.active })}
          style={styles.progress}
          value={progress} />
      </div>
    )
  },

  render: function() {
    return (
      <div>
        controls
        <hr />
        <div className="flex">
          {this.props.tracks.map(this.renderTrack)}
        </div>
      </div>
    )
  }

});

module.exports = Controls;

