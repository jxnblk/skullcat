
var React = require('react');
var Skull = require('./Skull.jsx');
var Tachyons = require('./Tachyons.jsx');
var Bass = require('./Bass.jsx');
var Lyrics = require('./Lyrics.jsx');
var Stabs = require('./Stabs.jsx');
var Fx = require('./Fx.jsx');
var StepVisualizer = require('./StepVisualizer.jsx');
var Icon = require('react-geomicons');

var Stage = React.createClass({

  propTypes: {
    step: React.PropTypes.number,
    tracks: React.PropTypes.array,
  },

  render: function() {
    var tracks = this.props.tracks;
    var active = {
      bass: (tracks[5].active || tracks[6].active),
      chorus: (tracks[20].active || tracks[20].active),
      verse: (tracks[21].active || tracks[22].active), 
    };
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
      }
    };

    return (
      <div className="relative flex-auto" style={styles.container}>
        <Tachyons {...this.props} />
        <Stabs {...this.props} />
        <Fx {...this.props} />
        <Bass {...this.props} />
        <Skull {...this.props} />
        <Lyrics {...this.props} />
        <div className="absolute left-0 bottom-0 right-0">
          <StepVisualizer
            drop={this.props.drop}
            step={this.props.step}
            length={32} />
        </div>
        <div className="flex flex-center center" style={styles.play}>
          <button className="mx-auto h0 button button-transparent"
            onClick={this.props.playPause}>
            <Icon name="play" />
          </button>
        </div>
      </div>
    )
  }

});

module.exports = Stage;

