import React from 'react' // import react
//import ReactDOM from 'react-dom' // import react

class CoordinatesButton extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.type); // prints 'click'
    var x = event.clientX
    var y = event.clientY
    var array = this.props.onReceiveCoordinates
    array([x, y])
    //debugger
  }

  render() {
    return (
      <div>
        <h1>here's a button</h1>
        <h1>CoordinatesButton Button Here:</h1>
        <button onClick={this.handleClick}>I'm a button, huh</button>
      </div>
    );
  }
}

export default CoordinatesButton


//ReactDOM.render
