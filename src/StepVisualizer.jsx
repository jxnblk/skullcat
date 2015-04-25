
var React = require('react');
var classnames = require('classnames');
var stepCount = require('./util/step-count');

var StepVisualizer = React.createClass({

  propTypes: {
    step: React.PropTypes.number,
    length: React.PropTypes.number
  },

  renderStep: function(step) {
    var active = (step === this.props.step);
    return (
      <div key={'step-dot-'+step}
        className={
          classnames({
            'muted gray': !active,
            'mr1': (step%4 == 3),
          })
        }>
        &bull;
      </div>
    )
  },

  render: function() {
    var steps = [];
    for (var i = 0; i < this.props.length; i++) {
      steps.push(i);
    }
    var styles = {
      container: {
        visibility: this.props.drop ? 'hidden' : '',
      }
    };
    return (
      <div className="flex px1" style={styles.container}>
        <div className="h2 bold flex flex-center mx-auto">
          {steps.map(this.renderStep)}
          <div className="h6 muted">
            {stepCount(this.props.step)}
          </div>
        </div>
      </div>
    )
  }

});

module.exports = StepVisualizer;

