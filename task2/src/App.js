import './App.css';
import Main from './components/Main'
import Sidebar from './components/Sidebar';
import { useState, useEffect}  from 'react';
function App() {
  //Api
  const [data ,setData] = useState([]);

  const apiGet=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response )=> response.json())
        .then((json) => {
          console.log(json)
          setData(json)
        })
    };

  useEffect(
    ()=>{
      apiGet();
    }
  );

      const[appdata,setAppdata]=useState([]);

      const appCall=(appdata) =>{
        setAppdata(appdata);
      }


      
      return (
    
        <div className="App">
          <h1>Hello</h1>
          <Sidebar appCall={appCall} appdata= {data} />
          <Main data={appdata}/>
          
        </div>
      );
  
}

export default App;
