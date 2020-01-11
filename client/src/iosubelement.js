import React, {Component} from 'react';
import './App.css';

export class IOSubelement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="iosubelement">
        <b className="ioelementname">
          {this.props.name}
        </b>
        <b className="ioelementamount">
          {this.props.amount}:-
        </b>
      </div>
    );
  }
}
