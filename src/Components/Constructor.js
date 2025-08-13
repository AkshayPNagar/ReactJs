import React,{Component} from "react";

class Constructor extends Component
{
    constructor(props)
    {
        super();
        console.log("Hello From Consturctor");
               
    }
render()
{
    return(
        <div>
            <h1>hello{this.props.name}</h1>
        </div>
    )
}
}

export default Constructor