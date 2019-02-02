import React, { Component } from "react";
import axios from "axios";

console.log("hiii ract");

class App extends Component {
  state = {
    data: [],
    intervalIsSet: false,
    arr: new Object(),
    name: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/user")
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ data: data });
        this.setState({ arr: data });
        this.setState({ name: data[0].name });
      })
      .catch(ee => {
        console.log(ee);
      });
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  // componentWillUnmount() {
  //   if (this.state.intervalIsSet) {
  //     clearInterval(this.state.intervalIsSet);
  //     this.setState({ intervalIsSet: null });
  //   }
  // }

  render() {
    const pos = this.state.data.map(obj => {
      return <RetPer name={obj.name} age={obj.age} />;
    });
    return (
      <div>
        <h1>haai</h1>
        {pos}
        <button onClick={this.showdata}> get data </button>
      </div>
    );
  }
}

export default App;
