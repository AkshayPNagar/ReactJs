import React from "react";

class StateEx extends React.Component
{
    
constructor()
{
    super();

    this.state={
        name:1
    }
}

changeName()
{
    this.setState({
        name:this.state.name+1
    })
}

    render(){
        const {name}= this.state
        return (
            <>
                <h1>{name}</h1>
                <button onClick={()=>this.changeName()}>Submit</button>
            </>
        )
    }
}
export default StateEx