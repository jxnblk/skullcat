
var React = require('react');
var classnames = require('classnames');
var Icon = require('react-geomicons');

var keymap = [
  'Drop',
  'A', 'S', 'D', 'F',
  // 5 bass
  'G', 'H',
  // 7 fx
  'Q', 'W', 'E', 'R', 'T', 'Y',
  // 13 stabs
  'J', 'K', 'L',
  // 16 meows
  'U', 'I',
  // 18 meows
  'O', 'P',
  // 20 vocals
  '1', '2', '3', '4',
];

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

  handleKeydown: function(e) {
    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
      return false;
    }
    switch (e.keyCode) {
      case 32:
        e.preventDefault();
        this.props.playPause();
        break;
      case 65: // A
        e.preventDefault();
        this.switchSample(1, [1,2,3,4,]);
        break;
      case 83: // S
        e.preventDefault();
        this.switchSample(2, [1,2,3,4,]);
        break;
      case 68: // D
        e.preventDefault();
        this.switchSample(3, [1,2,3,4,]);
        break;
      case 70: // F
        e.preventDefault();
        this.switchSample(4, [1,2,3,4,]);
        break;
      case 71: // G
        e.preventDefault();
        this.switchSample(5, [5,6]);
        break;
      case 72: // H
        e.preventDefault();
        this.switchSample(6, [5,6]);
        break;
      case 81: // Q
        e.preventDefault();
        this.switchSample(7, [7,8,9,10,11,12]);
        break;
      case 87: // W
        e.preventDefault();
        this.switchSample(8, [7,8,9,10,11,12]);
        break;
      case 69: // E
        e.preventDefault();
        this.switchSample(9, [7,8,9,10,11,12]);
        break;
      case 82: // R
        e.preventDefault();
        this.switchSample(10, [7,8,9,10,11,12]);
        break;
      case 84: // T
        e.preventDefault();
        this.switchSample(11, [7,8,9,10,11,12]);
        break;
      case 89: // Y
        e.preventDefault();
        this.switchSample(12, [7,8,9,10,11,12]);
        break;
      case 74: // J
        e.preventDefault();
        this.switchSample(13, [13,14,15]);
        break;
      case 75: // K
        e.preventDefault();
        this.switchSample(14, [13,14,15]);
        break;
      case 76: // L
        e.preventDefault();
        this.switchSample(15, [13,14,15]);
        break;
      case 85: // U
        e.preventDefault();
        this.switchSample(16, [16,17]);
        break;
      case 73: // I
        e.preventDefault();
        this.switchSample(17, [16,17]);
        break;
      case 79: // O
        e.preventDefault();
        this.switchSample(18, [18,19]);
        break;
      case 80: // O
        e.preventDefault();
        this.switchSample(19, [18,19]);
        break;
      case 49: // 1
        e.preventDefault();
        this.switchSample(20, [20,21,22,23]);
        break;
      case 50: // 2
        e.preventDefault();
        this.switchSample(21, [20,21,22,23]);
        break;
      case 51: // 3
        e.preventDefault();
        this.switchSample(22, [20,21,22,23]);
        break;
      case 52: // 4
        e.preventDefault();
        this.switchSample(23, [20,21,22,23]);
        break;
    }
  },

  bindKeys: function() {
    var self = this;
    window.addEventListener('keydown', function(e) {
      self.handleKeydown(e);
    });
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

  componentDidMount: function() {
    if (typeof window !== 'undefined') {
      this.bindKeys();
    }
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
          {keymap[i]}
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

