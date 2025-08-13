import React from "react";
let s =20000;
function HelloMessage(props)
{
    return(
        <>
            <h1>Hello{props.name }{props.age}</h1>
            <h2>Byy{props.name}</h2>
            <h3>Salary{s}</h3>
        </>
    )
}

export default HelloMessage