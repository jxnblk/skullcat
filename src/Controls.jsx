
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

  switchSample: function(index, tracks) {
    var self = this;
    tracks.forEach(function(i) {
      if (i !== index && self.props.tracks[i].active) {
        self.props.toggleTrack(i);
      }
    })
    this.props.toggleTrack(index);
  },

  renderTrack: function(track, i, handler) {
    var self = this;
    if (typeof handler !== 'function') {
      var handler = this.props.toggleTrack;
    }
    function handleClick(e) {
      handler(i);
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
      }
    };
    return (
      <div key={'track-'+i}>
        <button style={styles.button}
          className={
            classnames('button', 'button-transparent',
              {
                'vhs-flash vhs-infinite vhs-alternate': queued,
                'muted': unqueued,
                'red': track.active,
              }
            )
          }
          onClick={handleClick}>
          {i}
        </button>
      </div>
    )
  },

  render: function() {
    var self = this;
    var tracks = this.props.tracks;
    var switchDrums = function(index) {
      self.switchSample(index, [1,2,3,4]);
    };
    var switchBass = function(index) {
      self.switchSample(index, [5,6]);
    };
    var switchFx = function(index) {
      self.switchSample(index, [7,8,9,10,11,12]);
    };
    var switchStabs = function(index) {
      self.switchSample(index, [13,14,15]);
    };
    var switchMeow = function(index) {
      self.switchSample(index, [16,17]);
    };
    var switchChords = function(index) {
      self.switchSample(index, [18,19]);
    };
    var switchVocals = function(index) {
      self.switchSample(index, [20,21,22,23]);
    };
    return (
      <div>
        <div className="flex flex-wrap">
          <div>
            <h3 className="h5">Drums</h3>
            <div className="flex">
              {this.renderTrack(tracks[1], 1, switchDrums)}
              {this.renderTrack(tracks[2], 2, switchDrums)}
              {this.renderTrack(tracks[3], 3, switchDrums)}
              {this.renderTrack(tracks[4], 4, switchDrums)}
            </div>
          </div>
          <div>
            <h3 className="h5">Bass</h3>
            <div className="flex">
              {this.renderTrack(tracks[5], 5, switchBass)}
              {this.renderTrack(tracks[6], 6, switchBass)}
            </div>
          </div>
          <div>
            <h3 className="h5">FX</h3>
            <div className="flex">
              {this.renderTrack(tracks[7], 7, switchFx)}
              {this.renderTrack(tracks[8], 8, switchFx)}
              {this.renderTrack(tracks[9], 9, switchFx)}
              {this.renderTrack(tracks[10], 10, switchFx)}
              {this.renderTrack(tracks[11], 11, switchFx)}
              {this.renderTrack(tracks[12], 12, switchFx)}
            </div>
          </div>
          <div>
            <h3 className="h5">Stabs</h3>
            <div className="flex">
              {this.renderTrack(tracks[13], 13, switchStabs)}
              {this.renderTrack(tracks[14], 14, switchStabs)}
              {this.renderTrack(tracks[15], 15, switchStabs)}
            </div>
          </div>
          <div>
            <h3 className="h5">Meow</h3>
            <div className="flex">
              {this.renderTrack(tracks[16], 16, switchMeow)}
              {this.renderTrack(tracks[17], 17, switchMeow)}
            </div>
          </div>
          <div>
            <h3 className="h5">Chords</h3>
            <div className="flex">
              {this.renderTrack(tracks[18], 18, switchChords)}
              {this.renderTrack(tracks[19], 19, switchChords)}
            </div>
          </div>
          <div>
            <h3 className="h5">Vocals</h3>
            <div className="flex">
              {this.renderTrack(tracks[20], 20, switchVocals)}
              {this.renderTrack(tracks[21], 21, switchVocals)}
              {this.renderTrack(tracks[22], 22, switchVocals)}
              {this.renderTrack(tracks[23], 23, switchVocals)}
            </div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Controls;

