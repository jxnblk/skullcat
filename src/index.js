
var React = require('react');
var Root = require('./Root.jsx');

if (typeof document !== 'undefined') {
  // Client render code goes here...
  var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML);
  React.render(React.createElement(Root, initialProps), document);
}

// Exported static site renderer:
module.exports = function render(locals, callback) {
  var html = React.renderToString(React.createElement(Root, locals));
  callback(null, '<!DOCTYPE html>' + html);
};

