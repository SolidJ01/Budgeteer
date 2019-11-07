import React, {Component} from 'react';
import './App.css';

export class BalanceIndicator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="balanceindicator">
        <div class="balanceindmain">
          <b>Balance</b>
        </div>
        <div class="balance">
          {this.props.balance}
        </div>
      </div>
    );
  }
}
