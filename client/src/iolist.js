import React, {Component} from 'react';
import './App.css';
import {IOElement} from './ioelement.js';

export class IOList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      items: props.items,
    };
  }
  render() {
    return (
      <div class="iolist">
        <div class="titleseg">
          <b>{this.state.type}</b>
        </div>

        <IOElement type={this.state.type}
          subcontent="hej"
          name={"Monthly " + this.state.type}
          amount="10539"/>

        <div class="sum" id={this.state.type}>
          <b class="sumtext">
            Total {this.state.type}
          </b>
          <b class="sumamount">
            10539:-
          </b>
        </div>
        {this.state.items}
      </div>
    );
  }
}
