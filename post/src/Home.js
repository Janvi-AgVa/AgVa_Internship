import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  console.log(cookies.get('Token'));
  
  useEffect(() => {
    if(!cookies.get('Token')){
      navigate('/');
     }
  }, []);


  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  )
};

export default Home;