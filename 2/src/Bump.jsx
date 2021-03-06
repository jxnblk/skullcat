className="stroke" 
var React = require('react');
var Bumpkit = require('bumpkit');
var classnames = require('classnames');
var Stage = require('./Stage.jsx');
var Controls = require('./Controls.jsx');
var StepVisualizer = require('./StepVisualizer.jsx');

var bumpkit = false;

try {
  bumpkit = new Bumpkit();
} catch(e) {
}

var mixer;
var samplers = [];
var clips = [];
var loopLength = 32;
var tempo = 80;

function initMixer(length) {
  mixer = bumpkit.createMixer();
  for (var i = 0; i < length; i++) {
    mixer.addTrack();
  }
}

function initSamplers(samples) {
  var stepDuration = 60 / (tempo * 4);
  for (var i = 0; i < samples.length; i++) {
    var length = (i === 0) ? 64 : loopLength;
    var dur = length * stepDuration;
    samplers[i] = bumpkit.createSampler().connect(mixer.tracks[i]);
    samplers[i].duration = dur;
  }
}

function loadSamples(samples, callback) {
  var loaded = 0;
  samples.forEach(function(sample, i) {
    (function(index) {
      bumpkit.loadBuffer(sample, function(buffer) {
        samplers[index].buffer(buffer);
        loaded++;
        if (typeof callback === 'function' && loaded === samples.length) {
          callback(loaded, index);
        }
      });
    })(i);
  });
}

function initClips(samples) {
  for (var i = 0; i < samples.length; i++) {
    var length = (i === 0) ? 64 : loopLength;
    clips[i] = bumpkit.createClip();
    clips[i].pattern = [];
    for (var s = 0; s < length; s++) {
      var step = (s === 0) ? 1 : 0;
      clips[i].pattern.push(step);
    }
    clips[i].connect(samplers[i]);
    clips[i].active = false;
  }
}



var Bump = React.createClass({

  getInitialState: function() {
    var tracks = this.props.samples.map(function(sample) {
      return { src: sample };
    });
    return {
      step: 0,
      playing: false,
      tracks: tracks,
      queue: [],
      unqueue: [],
      drop: true, 
      time: 0,
      ready: false,
      terminator: false,
    }
  },

  playPause: function() {
    this.processQueue();
    bumpkit.playPause();
    var playing = bumpkit.isPlaying;
    if (playing) {
      mixer.master.mute.gain.value = 1;
    } else {
      mixer.master.mute.gain.value = 0;
    }
    this.setState({ playing: playing, time: 0 });
  },

  addStepListener: function() {
    if (typeof window === 'undefined') { return false; }
    var self = this;
    window.addEventListener('step', function(e) {
      var step = e.detail.step
      var when = e.detail.when; 
      var lookahead = step + 1;
      var time = self.state.time + 1; 
      if (lookahead % 32 === 0) {
        self.autolaunch();
        self.processQueue();
      }
      if (self.state.drop) {
        if (step === 63) {
          self.endDrop();
        } else if (time > 64) {
          bumpkit.loopLength = loopLength;
          self.setState({ drop: false });
        }
      }
      self.setState({ step: step, time: time });
    });
  },

  activateTrack: function(i) {
    clips[i].active = true;
    var tracks = this.state.tracks;
    tracks[i].active = clips[i].active;
    this.setState({ tracks: tracks });
  },

  deactivateTrack: function(i) {
    clips[i].active = false;
    var tracks = this.state.tracks;
    tracks[i].active = clips[i].active;
    this.setState({ tracks: tracks });
  },

  queueTrack: function(i) {
    var queue = this.state.queue;
    queue.push(i);
    this.setState({ queue: queue });
  },

  unqueueTrack: function(i) {
    var unqueue = this.state.unqueue;
    unqueue.push(i);
    this.setState({ unqueue: unqueue });
  },

  processQueue: function() {
    var self = this;
    var queue = this.state.queue;
    var unqueue = this.state.unqueue;
    var tracks = this.state.tracks;
    queue.forEach(function(index, i) {
      self.activateTrack(index);
    });
    unqueue.forEach(function(index, i) {
      self.deactivateTrack(index);
    });
    this.setState({ queue: [], unqueue: [] });
  },

  toggleTrack: function(i) {
    var tracks = this.state.tracks;
    var queue = this.state.queue;
    var qIndex = queue.indexOf(i);
    if (!tracks[i].active && qIndex < 0) {
      this.queueTrack(i);
    } else if (tracks[i].active) {
      this.unqueueTrack(i);
    } else if (qIndex > -1) {
      queue.splice(qIndex, 1);
      this.setState({ queue: queue });
    }
  },

  setDrop: function() {
    this.activateTrack(0);
    bumpkit.loopLength = 64;
  },

  endDrop: function() {
    this.deactivateTrack(0);
    this.activateTrack(1);
    this.activateTrack(7);
    this.activateTrack(15);
    this.activateTrack(19);
    this.activateTrack(21);
  },

  toggleTerminator: function() {
    var terminator = !this.state.terminator;
    this.setState({ terminator: terminator });
  },

  autolaunch: function() {
    var self = this;
    var launches = [
      [5,6],
      [7,8,9,10],
      [11,12,13,14],
      [15,16,17,18],
      [19,20],
      [23,24],
      [25,26],
    ];
    launches.forEach(function(launch) {
      var active = false;
      var current;
      var next;
      launch.forEach(function(n, i) {
        if (self.state.tracks[n].active && self.state.unqueue.indexOf(n) < 0) {
          active = i;
          current = n;
        }
        next = launch[active+1] || launch[0];
      });
      if (active === false) { return false; }
      if (next) {
        self.deactivateTrack(current);
        self.queueTrack(next);
      }
    });
  },

  componentDidMount: function() {
    if (bumpkit && typeof window !== 'undefined') {
      var self = this;
      var samples = this.props.samples;
      bumpkit.tempo = tempo;
      bumpkit.loopLength = loopLength;
      initMixer(samples.length);
      initSamplers(samples);
      initClips(samples);
      this.addStepListener();
      loadSamples(samples, function(n, i) {
        self.setState({ ready: true });
      });
      this.setDrop();
    }
  },


  render: function() {
    return (
      <div className={classnames('flex flex-column', this.state.terminator ? 'red' : 'white')}
        style={{minHeight:'100vh',backgroundColor:'#000'}}>
        <Stage
          {...this.props}
          {...this.state}
          playPause={this.playPause} />
        <Controls
          {...this.props}
          {...this.state}
          loopLength={loopLength}
          playPause={this.playPause}
          toggleTrack={this.toggleTrack}
          toggleTerminator={this.toggleTerminator} />
      </div>
    )
  }

});

module.exports = Bump;


