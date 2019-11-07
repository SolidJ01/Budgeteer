import React, {Component} from 'react';
import './App.css';

export class IOSubelement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="iosubelement">
        <b class="ioelementname">
          {this.props.name}
        </b>
        <b class="ioelementamount">
          {this.props.amount}:-
        </b>
      </div>
    );
  }
}
