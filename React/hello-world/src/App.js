
import { Component } from 'react';
import './App.css';
// import Greeting from './components/Greeting';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello'
// eslint-disable-next-line no-unused-vars
import msg from './components/msg'
class App extends Component {
  render(){
  return (
    <div className="App">
    <msg/>

    {
    /* <Greeting name="Ritika" lastName="Brewal"> 
    <p>This is child prop</p>
    </Greeting>
    <Greeting name="Priyanka" lastName="Saini">
    <button>Click Me</button>
    </Greeting>
    <Greeting name="Janvi" lastName="Gupta">
    <a href='#'>My Page</a>
    </Greeting> 
    
    <Welcome name="Ritika" lastName="Brewal"/> 
    <Welcome name="Priyanka" lastName="Saini"/> 
    <Welcome name="Janvi" lastName="Gupta" /> 
    <Hello/ > */}
    
    </div>
  )
}
}


export default App;
