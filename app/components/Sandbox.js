import React from "react";

export default class Sandbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tyler",
    };

    this.updateName = this.updateName.bind(this);
  }
  updateName() {
    this.setState({
      name: "Mikenzi",
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello, {this.state.name}</h1>
        <button onClick={this.updateName}>Change Name</button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Sandbox />, document.getElementById("app"));
