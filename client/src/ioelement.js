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
    let isIncome = this.state.type == 'Income';
    return (
      <div key={this.state.name.toString()} className={"ioelement " + this.state.expanded}>
        <span onClick={()=>this.setState({expanded: !this.state.expanded})}>
        <div className="ioelementmain">
          <b className="ioelementname">
            {this.state.name}
          </b>
          <b className={"ioelementamount " + this.state.type}>
            <b className="indicator">
              {isIncome ? '+ ' : '- '}
            </b>
            {this.state.amount}:-
          </b>
        </div>
        </span>
        <div className="ioelementsubcontent">
          {this.state.subcontent}
        </div>
      </div>
    );
  }
}
