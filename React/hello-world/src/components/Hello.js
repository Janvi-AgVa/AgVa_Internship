import React from 'react'
const Hello=()=>{
    //JSX
    // return  (
    // <div className= 'dummyClass'>
    //     <h1>Hello Janvi</h1>
    // </div>
    // )

    
    // without JSX
    return React.createElement(
        'div',
        {id:'hello', className: 'dummyClass'},
        React.createElement('h1',null,'Hello JANVI')

    )
}
export default Hello