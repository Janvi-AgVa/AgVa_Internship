import React from 'react';
function Main({data}) {
  return (
    <div className='main-container'>
    <h1>Welcome!!</h1>
    <h4>User Details</h4>
    <p> Email: {data.email}</p>
    <p> Username :{data.username}</p>
    <p> Address :{data?.address?.city}</p>
    </div>
  );
}

export default Main