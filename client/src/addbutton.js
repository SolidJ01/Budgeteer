import React, {Component} from 'react';

class Addbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div class="addbutton">
        <span onClick={this.handleClick}>
          <b>+</b>
        </span>
      </div>
    );
  }

  handleClick() {
    console.log('click handled');
  }
}

export default Addbutton;
