import React from "react";

let a=10;
let b=30;
let msg ="";
if(a+b >20)
{
    msg="Welcome"
}

else{
    msg="Byy"
}
const car_object ={name:"tata", colour:"red"}

function Hello(){

    return(
    <>
        <h1>Hello</h1>
        <h2>{a+b}</h2>
        <h3>{10+5}</h3>
        <h4>5+5</h4>
        

        <h3 style={{color:"red"}}>{ car_object.colour}</h3>

        <h1>{msg}</h1>
        </>
    )
}
export default Hello;
