
var React = require('react');
var Bumpkit = require('bumpkit');
var classnames = require('classnames');
var bumpkit = false;

try {
  bumpkit = new Bumpkit();
} catch(e) {
  console.log('server side');
}

var mixer;
var samplers = [];
var clips = [];
var tracksLength = 8;

function initMixer() {
  mixer = bumpkit.createMixer();
  for (var i = 0; i < tracksLength; i++) {
    mixer.addTrack();
  }
}

function initSamplers() {
  for (var i = 0; i < tracksLength; i++) {
    samplers[i] = bumpkit.createSampler().connect(mixer.tracks[i]);
    samplers[i].duration = 3;
  }
}

function loadSamples(samples) {
  samples.forEach(function(sample, i) {
    (function(index) {
      bumpkit.loadBuffer(sample, function(buffer) {
        console.log(sample, buffer);
        samplers[index].buffer(buffer);
      });
    })(i);
  });
}

function initClips() {
  for (var i = 0; i < tracksLength; i++) {
    clips[i] = bumpkit.createClip();
    clips[i].pattern = [
      1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
      0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    ];
    clips[i].connect(samplers[i]);
    clips[i].active = false;
  }
}


if (bumpkit) {
  initMixer();
  initSamplers();
  initClips();
  bumpkit.loopLength = 16;
}

var Bump = React.createClass({

  getInitialState: function() {
    return {
      loopLength: 32,
      tempo: 96,
      currentStep: 0,
      playing: false,
      tracks: [
        true, false, false, false,
        false, false, false, false,
      ],
    }
  },

  playPause: function() {
    bumpkit.playPause();
    var playing = bumpkit.isPlaying;
    console.log('playpause', bumpkit, playing);
    this.setState({ playing: playing });
  },

  addStepListener: function() {
    if (typeof window === 'undefined') { return false; }
    var self = this;
    window.addEventListener('step', function(e) {
      var step = e.detail.step
      self.setState({ currentStep: step });
    });
  },

  toggleTrack: function(i) {
    clips[i].toggle();
    var tracks = this.state.tracks;
    tracks[i] = clips[i].active;
    this.setState({ tracks: tracks });
  },

  componentDidMount: function() {
    if (typeof window !== 'undefined') {
      this.addStepListener();
      loadSamples(this.props.samples);
      bumpkit.tempo = this.state.tempo;
    }
  },

  renderTrack: function(track, i) {
    var self = this;
    function handleClick(e) {
      self.toggleTrack(i);
    }
    return (
      <button
        className={classnames('button', 'button-transparent', track ? 'red' : 'blue' )}
        onClick={handleClick}>
        {i}
      </button>
    )
  },

  render: function() {
    var playing = this.state.playing;
    var step = this.state.currentStep;
    return (
      <div>
        <div>bumpkit</div>
        <hr />
        <code>{playing ? 'playing' : 'paused'}</code>
        <code>{step}</code>
        <label>Tempo</label>
        <input type="number" readOnly value={this.state.tempo} />
        <hr />
        <button onClick={this.playPause}>Play/Pause</button>
        <hr />
        <div className="flex">
          {this.state.tracks.map(this.renderTrack)}
        </div>
      </div>
    )
  }

});

module.exports = Bump;


