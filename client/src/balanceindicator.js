import React, {Component} from 'react';
import './App.css';

export class BalanceIndicator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="balanceindicator">
        <div className="balanceindmain">
          <b>Balance</b>
        </div>
        <div className="balance">
          {this.props.balance}
        </div>
      </div>
    );
  }
}
