import React        from 'react';
import ReactDOM     from 'react-dom';
import TweenMax     from 'gsap';


class Letter extends React.Component {

  render() {
    return (
      <div className='letter' key={this.props.letter + this.props.index} >
        <div className='front' key={this.props.letter + this.props.index} >
          {this.props.letter}
        </div>
        <div className='back'>
          ?
        </div>
      </div>

    )
  }

  componentWillEnter(callback) {
    let el        = ReactDOM.findDOMNode(this);
    let rand      = Math.floor(Math.random() * 3)
    let rotRand   = Math.floor(Math.random() * 5)
    TweenMax.to(el, rand, {
      rotationX:        1080 * rotRand,
      transformOrigin:  "bottom top",
      ease:             Power4.easeOut,
      onComplete:       callback
    });
  }

}

export default Letter;