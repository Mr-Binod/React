import React, {Component} from "react";
import Card from "./components/card/Card";

class App extends React.Component {
 
  constructor() {
    super()
    this.state = {
      count : 0
    }
  }
countHandler = () => {
  console.log(123)
  this.setState({count : this.state.count + 1})
  }

  render() {
    return (
    <>
      <div>{this.state.count}</div>
      <Card content='안녕하세요' />
      <Card content='헬로' />
      <button onClick={this.countHandler}>증가</button>
    </>
    )
  }
}
export default App;
