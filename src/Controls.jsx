
var React = require('react');
var classnames = require('classnames');
var Icon = require('react-geomicons');

var keymap = [
  'Drop',
  'A', 'S', 'D', 'F',
  // 5, 6 bass
  'G', 'H',
  // 7, 8, 9, 10 fx
  'Q', 'W', 'E', 'R',
  // 11, 12, 13, 14 science
  'T', 'Y', 'U', 'I',
  // 15, 16, 17, 18 stabs
  'J', 'K', 'L', ';',
  // 19, 20 meows
  'O', 'P',
  // 21, 22, 23, 24 vocals
  '1', '2', '3', '4',
  // 25, 26, 27, 28 chords
  '7', '8', '9', '0',
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
    console.log(e.keyCode);
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
      // FX
      case 81: // Q
        e.preventDefault();
        this.switchSample(7, [7,8,9,10]);
        break;
      case 87: // W
        e.preventDefault();
        this.switchSample(8, [7,8,9,10]);
        break;
      case 69: // E
        e.preventDefault();
        this.switchSample(9, [7,8,9,10]);
        break;
      case 82: // R
        e.preventDefault();
        this.switchSample(10, [7,8,9,10]);
        break;
      // science
      case 84: // T
        e.preventDefault();
        this.switchSample(11, [11,12,13,14]);
        break;
      case 89: // Y
        e.preventDefault();
        this.switchSample(12, [11,12,13,14]);
        break;
      case 85: // U
        e.preventDefault();
        this.switchSample(13, [11,12,13,14]);
        break;
      case 73: // I
        e.preventDefault();
        this.switchSample(14, [11,12,13,14]);
        break;
      // stabs
      case 74: // J
        e.preventDefault();
        this.switchSample(15, [15,16,17,18]);
        break;
      case 75: // K
        e.preventDefault();
        this.switchSample(16, [15,16,17,18]);
        break;
      case 76: // L
        e.preventDefault();
        this.switchSample(17, [15,16,17,18]);
        break;
      case 186: // ;
        e.preventDefault();
        this.switchSample(18, [15,16,17,18]);
        break;
      // meow
      case 79: // O
        e.preventDefault();
        this.switchSample(19, [19,20]);
        break;
      case 80: // P
        e.preventDefault();
        this.switchSample(20, [19,20]);
        break;
      // vocals
      case 49: // 1
        e.preventDefault();
        this.switchSample(21, [21,22,23,24]);
        break;
      case 50: // 2
        e.preventDefault();
        this.switchSample(22, [21,22,23,24]);
        break;
      case 51: // 3
        e.preventDefault();
        this.switchSample(23, [21,22,23,24]);
        break;
      case 52: // 4
        e.preventDefault();
        this.switchSample(24, [21,22,23,24]);
        break;
      // chords
      case 55: // 7
        e.preventDefault();
        this.switchSample(25, [25,26,27,28]);
        break;
      case 56: // 8
        e.preventDefault();
        this.switchSample(26, [25,26,27,28]);
        break;
      case 57: // 9
        e.preventDefault();
        this.switchSample(27, [25,26,27,28]);
        break;
      case 48: // 0
        e.preventDefault();
        this.switchSample(28, [25,26,27,28]);
        break;
      case 90: // z
        e.preventDefault();
        this.props.toggleTerminator();
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
      <div className="flex-auto px1 mb1">
        <h3 className="h6 mt0">{name}</h3>
        <div className="flex border">
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
      <button key={'track-'+i}
        style={styles.button}
        className={
          classnames('button', 'button-narrow', 'flex-auto',
            {
              'vhs-flash vhs-infinite vhs-alternate': queued,
              'muted': unqueued,
              'button-transparent': !active,
              'black bg-white not-rounded vhs-pop': active,
            },
            (active && this.props.terminator) ? 'bg-red' : ''
          )
        }
        onClick={handleClick}>
        {keymap[i]}
      </button>
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
      <div className="p1"
        style={styles.container}>
        <button
          onClick={this.props.playPause}
          style={styles.button}
          className={classnames('h2', 'm1', 'button', 'button-transparent', { 'vhs-pop': playing })}>
          <Icon name={playing ? 'pause' : 'play'} />
        </button>
        <div className={classnames('md-flex', 'px1', 'mxn1', this.props.drop ? '' : 'vhs-bottom')}>
          <div className="flex flex-center flex-auto flex-last">
            {this.renderControlGroup('Vocals', [21,22,23,24])}
            {this.renderControlGroup('Chords', [25,26,27,28])}
          </div>
          <div className="flex flex-center flex-auto">
            {this.renderControlGroup('FX', [7,8,9,10])}
            {this.renderControlGroup('Science', [11,12,13,14])}
            {this.renderControlGroup('Meow', [19,20])}
          </div>
          <div className="flex flex-center flex-auto flex-first">
            {this.renderControlGroup('Drums', [1,2,3,4])}
            {this.renderControlGroup('Bass', [5,6])}
            {this.renderControlGroup('Stabs', [15,16,17,18])}
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Controls;

