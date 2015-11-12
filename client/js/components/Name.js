import React                    from 'react';
import ReactDOM                 from 'react-dom';
import Letter                   from './Letter';
import API                      from '../config/API';
import ReactTransitionGroup     from 'react-addons-transition-group';
import $                        from 'jquery';
import TweenMax                 from 'gsap';

class Name extends React.Component {

  render() {
    let spacesArray = Array.apply(null, Array(15 - this.props.object.name.length)).map(function() {
      return String.fromCharCode(160);
    });

    let splittedName = spacesArray.concat(this.props.object.name.split(''));

    let letters = splittedName.map(function(el, i) {
      return(
          <Letter key={i + el} index={i} letter={el} />
      )
    });
    return (
      <div onClick={this.victory.bind(this)} className='first-name'>
        <ReactTransitionGroup>
          {letters}
        </ReactTransitionGroup>

      </div>
    )
  }

  victory() {
    let el = ReactDOM.findDOMNode(this);
    setTimeout(() => {
      $(document).trigger('Victory', { _id: this.props.object._id });
    }, 500);

    // animate clicked name
    TweenMax.fromTo(el, 2, {
      opacity: 0.1,
      backgroundColor: '#2BFF38'
    }, {
      opacity: 1,
      backgroundColor: 'white'
    });

    // prevent click with transparent overlay
    TweenMax.fromTo('#overlay', 2, {
      display: 'block'
    }, {
      display: 'none'
    });
  }

}

export default Name;