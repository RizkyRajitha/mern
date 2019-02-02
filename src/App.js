import React, { Component } from "react";
import RetPer from "./components/Person";
import Rr from "./components/users";
import axios from "axios";

console.log("hiii ract");

class App extends Component {
  state = {
      users : []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/user")
      .then(res => {
        console.log(res.data);
        this.setState({users:res.data})
      })
      .catch(e => {
        console.log(e);
      });
  }

  // btn1handler = (e)=>{
  // console.log(e.target.name);
  // this.setState({people:[{name:'dewindi',age:Math.random()*100},{name:'Hashini',age:'22'},{name:'Kajini',age:'21'}]})
  // }

  render() {
    const pos = this.state.users.map(obj => {
      return <RetPer name={obj.name} age={obj.age} hometown={obj.hometown}/>;
    });

    return (
      <div>
        <h1>hello JSX</h1>

        <button className="btn1" onClick={this.btn1handler} name="butt">
          change state
        </button>

        {pos}

        <Rr />
      </div>
    );
  }
}

export default App;
