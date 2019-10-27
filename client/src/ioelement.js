import React, {Component} from 'react';
import './App.css';

export class IOElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      type: props.type,
      subcontent: props.subcontent,
      name: props.name,
      amount: props.amount,
    };
  }
  render() {
    return (
      <div class={"ioelement " + this.state.expanded}>
        <span onClick={()=>this.setState({expanded: !this.state.expanded})}>
        <div class="ioelementmain">
          <b class="ioelementname">
            {this.state.name}
          </b>
          <b class={"ioelementamount " + this.state.type}>
            {this.state.amount}:-
          </b>
        </div>
        </span>
        <div class="ioelementsubcontent">
          {this.state.subcontent}
        </div>
      </div>
    );
  }
}
