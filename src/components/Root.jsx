
var React = require('react');
var Html = require('react-html');

var Root = React.createClass({

  render: function() {

    var initialProps = {
      __html: safeStringify(this.props)
    };

    return (
      <Html {...this.props}>
        skullcat 2
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

