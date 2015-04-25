
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
    var queue = this.props.queue;
    tracks.forEach(function(i) {
      var qIndex = queue.indexOf(i);
      if (i !== index && (self.props.tracks[i].active || qIndex > -1)) {
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
        <div className="flex border border-white">
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
            classnames('button',
              {
                'vhs-flash vhs-infinite vhs-alternate': queued,
                'muted': unqueued,
                'button-transparent': !active,
                'black bg-white not-rounded vhs-pop': active,
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
    var styles = {
      container: {
        visibility: this.props.drop ? 'hidden' : '',
      },
      button: {
        position: 'fixed',
        top: 0,
        right: 0,
      }
    };
    return (
      <div className="flex px1 mt2"
        style={styles.container}>
        <button
          onClick={this.props.playPause}
          style={styles.button}
          className={classnames('h2', 'm1', 'button', 'button-transparent', { 'vhs-pop': playing })}>
          <Icon name={playing ? 'pause' : 'play'} />
        </button>
        <div className={classnames('mx-auto flex flex-center flex-wrap mxn1', this.props.drop ? '' : 'vhs-bottom')}>
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

