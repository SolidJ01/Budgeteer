import React, {Component} from 'react';
import './App.css';
import {IOElement} from './ioelement.js';

export class IOList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      items: props.items,
      monthly: props.monthly,
      total: props.total,
      monsubcon: props.monsubcon,
    };
  }
  render() {
    return (
      <div class={"iolist " + this.state.type}>
        <div class="titleseg">
          <b>{this.state.type}</b>
        </div>

        <IOElement type={this.state.type}
          subcontent={this.state.monsubcon}
          name={"Monthly " + this.state.type}
          amount={this.state.monthly}/>

        <div class="sum" id={this.state.type}>
          <b class="sumtext">
            Total {}
          </b>
          <b class="sumamount">
            {this.state.monthly}:-
          </b>
        </div>
        {this.state.items}
      </div>
    );
  }
}
