import React from 'react'
// function Greeting(){
//     return <h1>Hello Janvi</h1>
// }
// export const Greeting=()=><h1>Hello Janvi</h1> //arrow function
const Greeting=props=>{             //arrow function
console.log(props)
return( 
    <div>
        <h1>
            Hello {props.name} {props.lastName}
        </h1>
        {props.children}
    </div>

)
}

export default Greeting