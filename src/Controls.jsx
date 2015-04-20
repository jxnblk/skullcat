
var React = require('react');
var classnames = require('classnames');
var Icon = require('react-geomicons');

var Controls = React.createClass({

  propTypes: {
    playing: React.PropTypes.bool.isRequired,
    playPause: React.PropTypes.func.isRequired,
    toggleTrack: React.PropTypes.func.isRequired,
    tracks: React.PropTypes.array.isRequired,
    queue: React.PropTypes.array.isRequired,
    unqueue: React.PropTypes.array.isRequired,
    step: React.PropTypes.number.isRequired,
  },

  switchSample: function(index, tracks) {
    var self = this;
    tracks.forEach(function(i) {
      if (i !== index && self.props.tracks[i].active) {
        self.props.toggleTrack(i);
      }
    })
    this.props.toggleTrack(index);
  },

  renderControlGroup: function(name, arr) {
    var self = this;
    var handler = function(index) {
      self.switchSample(index, arr);
    };
    return (
      <div className="px1 mb1">
        <h3 className="h6 mt0">{name}</h3>
        <div className="flex">
          {arr.map(function(index, i) {
            return self.renderTrack(index, i, handler)
          })}
        </div>
      </div>
    )
  },

  renderTrack: function(i, n, handler) {
    var self = this;
    if (typeof handler !== 'function') {
      var handler = this.props.toggleTrack;
    }
    function handleClick(e) {
      handler(i);
    }
    var queued = false;
    var unqueued = false;
    var active = this.props.tracks[i].active;
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
      }
    };
    return (
      <div key={'track-'+i}>
        <button style={styles.button}
          className={
            classnames('button', 'button-narrow',
              {
                'vhs-flash vhs-infinite vhs-alternate': queued,
                'muted': unqueued,
                'button-transparent': !active,
                'black bg-white': active,
              }
            )
          }
          onClick={handleClick}>
          {n+1}
        </button>
      </div>
    )
  },

  render: function() {
    var self = this;
    var playing = this.props.playing;
    return (
      <div className="flex px1">
        <div className="mx-auto flex flex-center flex-wrap mxn1">
          <button onClick={this.props.playPause}
            className={classnames('h2', 'button', 'button-narrow', 'button-transparent')}>
            <Icon name={playing ? 'pause' : 'play'} />
          </button>
          {this.renderControlGroup('Drums', [1,2,3,4])}
          {this.renderControlGroup('Bass', [5,6])}
          {this.renderControlGroup('FX', [7,8,9,10,11,12])}
          {this.renderControlGroup('Stabs', [13,14,15])}
          {this.renderControlGroup('Meow', [16,17])}
          {this.renderControlGroup('Chords', [18,19])}
          {this.renderControlGroup('Vocals', [20,21,22,23])}
        </div>
      </div>
    )
  }

});

module.exports = Controls;

