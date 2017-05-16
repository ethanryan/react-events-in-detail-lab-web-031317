import React from 'react' // import react
//import ReactDOM from 'react-dom' // import react

class DelayedButton extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

//setTimeout(function(){ alert("Hello"); }, 3000);

  handleClick(event) {
    //console.log(event.type); // prints 'click'
    event.persist(); //persists data
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay) ;
    //debugger
  }

  render() {
    return (
      <div>
        <h1>here's a button</h1>
        <h1>DelayedButton Button Here:</h1>
        <button onClick={this.handleClick}>I'm a button, huh</button>
      </div>
    );
  }
}

export default DelayedButton


//ReactDOM.render
