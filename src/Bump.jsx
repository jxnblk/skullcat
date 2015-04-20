
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
    var dur = loopLength * stepDuration;
    samplers[i] = bumpkit.createSampler().connect(mixer.tracks[i]);
    samplers[i].duration = dur;
  }
}

function loadSamples(samples) {
  samples.forEach(function(sample, i) {
    (function(index) {
      bumpkit.loadBuffer(sample.src, function(buffer) {
        samplers[index].buffer(buffer);
      });
    })(i);
  });
}

function initClips(samples) {
  for (var i = 0; i < samples.length; i++) {
    clips[i] = bumpkit.createClip();
    clips[i].pattern = [];
    for (var s = 0; s < loopLength; s++) {
      var step = (s === 0) ? 1 : 0;
      clips[i].pattern.push(step);
    }
    clips[i].connect(samplers[i]);
    clips[i].active = false;
  }
}



var Bump = React.createClass({

  getInitialState: function() {
    return {
      currentStep: 0,
      playing: false,
      tracks: this.props.samples,
      queue: [],
      unqueue: [],
      drop: true,
      time: -1
    }
  },

  playPause: function() {
    this.processQueue();
    bumpkit.playPause();
    var playing = bumpkit.isPlaying;
    this.setState({ playing: playing });
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
        self.processQueue();
      }
      self.setState({ currentStep: step, time: time });
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

  componentDidMount: function() {
    if (bumpkit && typeof window !== 'undefined') {
      var samples = this.props.samples;
      bumpkit.tempo = tempo;
      bumpkit.loopLength = loopLength;
      initMixer(samples.length);
      initSamplers(samples);
      initClips(samples);
      this.addStepListener();
      loadSamples(samples);
    }
  },


  render: function() {
    var playing = this.state.playing;
    var step = this.state.currentStep;
    var tracks = this.state.tracks;
    return (
      <div className="flex flex-column white bg-black" style={{minHeight:'100vh'}}>
        <Stage
          playing={playing}
          tracks={tracks}
          step={step}
          />
        <Controls
          playing={playing}
          playPause={this.playPause}
          step={this.state.currentStep}
          loopLength={loopLength}
          tracks={tracks}
          queue={this.state.queue}
          unqueue={this.state.unqueue}
          toggleTrack={this.toggleTrack} />
        <StepVisualizer
          step={step}
          length={loopLength} />
      </div>
    )
  }

});

module.exports = Bump;


