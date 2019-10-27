import React, {Component} from 'react';
import './App.css';

export class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div class="topbar">

      </div>
    );
  }
}

function MenuButtonJS(props) {
  return (
    <div class="menubutton">
      <span class="spanlink">
        <div class="menuicon">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </span>
    </div>
  );
}
