
var React = require('react');
var Skull = require('./Skull.jsx');
var Tachyons = require('./Tachyons.jsx');
var Bass = require('./Bass.jsx');
var Lyrics = require('./Lyrics.jsx');
var Stabs = require('./Stabs.jsx');
var Fx = require('./Fx.jsx');
var Science = require('./Science.jsx');
var Chords = require('./Chords.jsx');
var StepVisualizer = require('./StepVisualizer.jsx');
var Icon = require('react-geomicons');

var Stage = React.createClass({

  propTypes: {
    step: React.PropTypes.number,
    tracks: React.PropTypes.array,
  },

  render: function() {
    var tracks = this.props.tracks;
    var styles = {
      container: {
        overflowX: 'hidden'
      },
      play: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: (this.props.drop && !this.props.playing) ? '' : 'none',
      },
      paused: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: (!this.props.drop && !this.props.playing) ? '' : 'none',
      }
    };

    return (
      <div className="relative flex-auto" style={styles.container}>
        <Tachyons {...this.props} />
        <Stabs {...this.props} />
        <Fx {...this.props} />
        <Science {...this.props} />
        <Chords {...this.props} />
        <Bass {...this.props} />
        <Skull {...this.props} />
        <Lyrics {...this.props} />
        <div className="absolute left-0 bottom-0 right-0">
          <StepVisualizer
            drop={this.props.drop}
            step={this.props.step}
            length={32} />
        </div>
        <div className="flex flex-center center" style={styles.paused}>
          <div className="mx-auto">
            <button className="caps mx-auto button button-big button-transparent"
              onClick={this.props.playPause}>
              <Icon name="play" className="h0" />
            </button>
            <div>
              <a href="//github.com/jxnblk/skullcat"
                className="m1 button button-outline">
                GitHub
              </a>
              <a href="#!"
                className="m1 button button-outline">
                Tweet
              </a>
            </div>
            <div>
              <a href="/skullcat/1"
                className="m1 button button-transparent">
                Original Version
              </a>
              <a href="/skullcat/guidelines"
                className="m1 button button-transparent">
                Original Version
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-center center" style={styles.play}>
          <button className="caps mx-auto button button-big button-transparent"
            autoFocus="true"
            onClick={this.props.playPause}>
            <Icon name="play" className="h0" />
            <div>Drop It</div>
          </button>
        </div>
      </div>
    )
  }

});

module.exports = Stage;

