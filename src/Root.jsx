
var React = require('react');
var Html = require('react-html');
var Bump = require('./Bump.jsx');

var Root = React.createClass({

  render: function() {

    var initialProps = {
      __html: safeStringify(this.props)
    };
    var s3path = this.props.s3path;

    var samples = this.props.samples.map(function(sample) {
      return s3path + sample;
    });

    return (
      <Html {...this.props}>
        <Bump samples={samples} />
        <script id="initial-props"
          type="application/json"
          dangerouslySetInnerHTML={initialProps} />
      </Html>
    )
  }

});

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

module.exports = Root;

