import React from 'react';

function Sidebar({appCall, appdata}) {
 const Tigger=(data)=>{
  appCall(data)
 }
 
  
  return (
    <div className='side-container'>
    <h1>User Lists</h1>
    <ul>
      {appdata.map(item=>
        <li key={item.id} onClick={()=>Tigger(item)}>
          {item.name}
        </li>
        )}
    </ul>
    </div>
    );
}

export default Sidebar