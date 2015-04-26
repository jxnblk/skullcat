
var React = require('react');

var frames = {
  skull: [
    0,0,0,0, 1,1,0,0, 0,0,0,0, 1,1,0,0,
    0,0,0,0, 1,1,0,0, 0,0,0,0, 1,1,0,0,
  ],
  cat: [
    0,0,0,0, 0,0,1,1, 0,0,0,0, 0,0,1,1,
    0,0,0,0, 0,0,1,1, 0,0,0,0, 0,0,1,0,
  ],
  who: [
    0,0,0,0, 0,0,0,0, 1,1,0,0, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  what: [
    0,0,0,0, 0,0,0,0, 0,0,1,1, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  yeah: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 1,1,1,1, 0,0,0,0,
  ],
  yeah2: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 1,1,1,1,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  okay: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 1,1,1,1,
  ],
  uhhuh: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 1,1,1,1,
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
  ],
  ahahaha: [
    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
    1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1,
    1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1,
    1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1,
  ],
};

var Lyrics = React.createClass({

  render: function() {
    var playing = this.props.playing;
    var step = this.props.step;
    var tracks = this.props.tracks;
    var animationDuration = '.1875s';
    var styles = {
      container: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        //display: (tracks[20].active || tracks[21].active) ? '' : 'none',
      },
      skull: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        MozTransform: 'translate(-50%, 0%)',
        WebkitTransform: 'translate(-50%, 0%)',
        transform: 'translate(-50%, 0%)',
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
        display: 'none',
      },
      cat: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        MozTransform: 'translate(-50%, 0%)',
        WebkitTransform: 'translate(-50%, 0%)',
        transform: 'translate(-50%, 0%)',
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
        display: 'none',
      },
      who: {
        position: 'absolute',
        top: '50%',
        left: '0',
        MozTransform: 'translate(0%, -50%)',
        WebkitTransform: 'translate(0%, -50%)',
        transform: 'translate(0%, -50%)',
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
        display: 'none',
      },
      what: {
        position: 'absolute',
        top: '50%',
        right: '0',
        MozTransform: 'translate(0%, -50%)',
        WebkitTransform: 'translate(0%, -50%)',
        transform: 'translate(0%, -50%)',
        MozAnimationDuration: animationDuration,
        WebkitAnimationDuration: animationDuration,
        animationDuration: animationDuration,
        display: 'none',
      },
      yeah: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        MozTransform: 'translate(-50%, 0)',
        WebkitTransform: 'translate(-50%, 0)',
        transform: 'translate(-50%, 0)',
        display: 'none',
      },
      uhhuh: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        MozTransform: 'translate(-50%, 0)',
        WebkitTransform: 'translate(-50%, 0)',
        transform: 'translate(-50%, 0)',
        display: 'none',
      },
      okay: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        MozTransform: 'translate(-50%, 0)',
        WebkitTransform: 'translate(-50%, 0)',
        transform: 'translate(-50%, 0)',
        display: 'none',
      },
      ahahaha: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        MozTransform: 'translate(-50%, 0)',
        WebkitTransform: 'translate(-50%, 0)',
        transform: 'translate(-50%, 0)',
        display: 'none',
      },
    };

    if (tracks[0].active) {
      styles.ahahaha.display = frames.ahahaha[step] ? '' : 'none';
    } else if (tracks[21].active || tracks[22].active) {
      styles.skull.display = frames.skull[step] ? '' : 'none';
      styles.cat.display = frames.cat[step] ? '' : 'none';
      styles.who.display = frames.who[step] ? '' : 'none';
      styles.what.display = frames.what[step] ? '' : 'none';
      styles.yeah.display = frames.yeah[step] ? '' : 'none';
    } else if (tracks[23].active) {
      styles.uhhuh.display = frames.uhhuh[step] ? '' : 'none';
      styles.okay.display = frames.okay[step] ? '' : 'none';
    } else if (tracks[24].active) {
      styles.yeah.display = frames.yeah2[step] ? '' : 'none';
      styles.okay.display = frames.okay[step] ? '' : 'none';
    }

    return (
      <div style={styles.container}>
        <div style={styles.skull} className="px3">
          <h1 className="h00 vhs-pop">skull</h1>
        </div>
        <div style={styles.cat} className="px3">
          <h1 className="h00 vhs-pop">cat</h1>
        </div>
        <div style={styles.who} className="px3">
          <h1 className="h1 vhs-pop">who?</h1>
        </div>
        <div style={styles.what} className="px3">
          <h1 className="h1 vhs-pop">what?</h1>
        </div>
        <div style={styles.yeah} className="px3">
          <h1 className="h00 vhs-top">yeah!</h1>
        </div>
        <div style={styles.uhhuh} className="px3">
          <h1 className="h00 vhs-top">uh huh</h1>
        </div>
        <div style={styles.okay} className="px3">
          <h1 className="h00 vhs-top">okay</h1>
        </div>
        <div style={styles.ahahaha} className="px3">
          <h1 className="h0 caps nowrap haha-right">Ahahahaha!!! hahahahahahahahahahahaha!!!</h1>
        </div>
      </div>
    )
  }

});

module.exports = Lyrics;

