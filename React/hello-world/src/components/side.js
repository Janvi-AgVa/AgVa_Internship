import React, {Component} from 'react'
const side=(props)=>{             //arrow function

    return( 
        <div>
            <h1>
                Data Base of AgVa
            </h1>
            {props.children}
        </div>
    
    )
    }

export default side