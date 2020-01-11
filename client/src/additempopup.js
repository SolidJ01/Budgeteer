import React, {Component} from 'react';

export class Additempopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      type: props.type,
    }
  }

  render() {
    return (
      <div className={"popupcontainer " + this.state.expanded}>
        <div className="background" onClick={this.exit}>

        </div>
        <div className="popup">

        </div>
      </div>
    );
  }

  exit = () => {
    console.log('noot');
    this.setState({ expanded: false });
  }
}
