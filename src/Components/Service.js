import React from "react";

class Service extends React.Component {
  constructor() {
    super();

    this.state={
        name:"Akshay",
        Age:22
    }
  }


  updateAge()
  {
    this.setState({
        Age :this.state.Age+1
    })
  }

  render() {
    const{name, Age}=this.state;
    return (
        <div>
    <h1>Hello This is {name}</h1>
    <h2>I am {Age} year old</h2>

        <button onClick={()=>this.updateAge()}>Next Year</button>
        </div>
   
)
  }
}

export default Service;
