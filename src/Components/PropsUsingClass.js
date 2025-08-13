import React,{Component} from "react";

class PropsUsingClass extends Component
{
    render(){
        const{name, age}=this.props
        return(
            <>
                <h1>Hii {name}</h1>
                <h2>your age is {age}</h2>
            </>
        )
    }
}

export default PropsUsingClass