import React        from 'react';
import Name         from './Name';
import API          from '../config/API';
import $          from 'jquery';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = { names: [] }
  }

  componentDidMount() {
    let randomize = this.randomize.bind(this);
    $(document).on('Victory', (event, name) => {
      let looser = this.state.names.find(function(object) {
        return object._id !== name._id;
      });
      fetch(API.matches.create, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          winnerId: name._id,
          looserId: looser._id,
        })
      }).then().then().then(randomize);
    });
    this.randomize();
  }

  render() {

    let names = this.state.names.map(function(object, index) {
      return (
        <Name key={index} object={object} />
      )
    });
    return (
      <div>
        <div>
          {names}
          <button onClick={this.randomize.bind(this)}>Randomize !</button>
        </div>
      </div>
    )
  }

  randomize() {
    fetch(API.matches.new)
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({
          names: json
        });
      })
  }
}

export default Board;