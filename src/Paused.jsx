
var React = require('react');
var Icon = require('react-geomicons');

var Paused = React.createClass({

  render: function() {
    return (
      <div className="mx-auto">
        <button className="caps mx-auto button button-big button-transparent"
          onClick={this.props.playPause}>
          <Icon name="play" className="h0" />
        </button>
        <div className="m1">
          <a href="//github.com/jxnblk/skullcat"
            className="m1 button button-outline">
            GitHub
          </a>

          <a href="https://twitter.com/intent/tweet?text=Here comes the skullcat&amp;url=http://jxnblk.com/skullcat&amp;via=jxnblk"
            target="_blank"
            className="m1 button button-outline">
            Tweet
          </a>
        </div>
        <div className="m1">
          <a href="/skullcat/1"
            className="button button-transparent">
            Original Version
          </a>
          <a href="/skullcat/guidelines"
            className="button button-transparent">
            Original Version
          </a>
        </div>
      </div>
    )
  }

})

module.exports = Paused;

