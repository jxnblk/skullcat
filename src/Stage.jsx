
var React = require('react');
var Skull = require('./Skull.jsx');
var Tachyons = require('./Tachyons.jsx');
var Bass = require('./Bass.jsx');
var Lyrics = require('./Lyrics.jsx');
var Stabs = require('./Stabs.jsx');

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
      }
    };

    return (
      <div className="relative flex-auto" style={styles.container}>
        <Tachyons {...this.props} />
        <Stabs {...this.props} />
        <Bass {...this.props} />
        <Skull {...this.props} />
        <Lyrics {...this.props} />
      </div>
    )
  }

});

module.exports = Stage;

