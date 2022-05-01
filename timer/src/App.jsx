import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useSyncExternalStore } from 'react';

function App() {

  const [start,setStart] = useState(1)
  const [end, setEnd] = useState(10)

  useEffect(()=>{

    const timer = setInterval(()=>{
      setStart((p)=>p+1)

    },1000)

    return ()=>{
      if(end==start) clearInterval(timer)
    }

  },[])


  return (
    <div className="App">

      <h1>{start}</h1>
     
    </div>
  );
}

export default App;
