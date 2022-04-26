import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {

  const [item,setItem] = useState([]);
  const [star, setStar] = useState(0)
  const [card,setCard] = useState("")

  useEffect(()=>{

    // axios.get("http://localhost:3004/food").then((data)=>{

    // setItem(data.data)
    // },)
    if(star===0) console.log("true")

    if(star===0){
      axios.get("http://localhost:8080/food").then((data)=>{

      
      setItem(data.data)
    },)
    }

    if(star===1 || star===2){
      setreview(star)
      }
      if(star===3 || star===4){
        setreview(star)
        }
  },[star])

  useEffect(()=>{
    if(card ==="Only card"){
      chukana("Only card")
    }
    if(card ==="Only cash"){
      chukana("Only cash")
    }

  },[card])
  
  function setreview(num){
    axios.get("http://localhost:8080/food").then((data)=>{

      const startItem=data.data.filter((e)=>{
        if(e.review>=num) {
           return e
        }
      })
      setItem(startItem)
    },)
    
  }

  function chukana(str){
    axios.get("http://localhost:8080/food").then((data)=>{

      const payment = data.data.filter((e)=>{
        if(e.pay===str){
          return e
        }
      })
      setItem(payment)
    },)
     
  }
  return (
    <div className="App">

      <h1>Khana Khajana</h1>
      <button onClick={()=>setStar(0)}>all</button>
      <button onClick={()=>setStar(1)}>1*</button>
      <button onClick={()=>setStar(2)}>2*</button>
      <button onClick={()=>setStar(3)}>3*</button>
      <button onClick={()=>setStar(4)}>4*</button>
      <button onClick={()=>setCard("Only card")}>Payment with card</button>
      <button onClick={()=>setCard("Only cash")}>Payment with cash</button>
        <div className='item'>
          {item.map((e)=>{ 
            return (
            <div className='amar'>
            <img src={e.img} alt="" height={"200px"} width={"200px"} />
            <div>
            <p>{e.name}</p>
            <p>{e.item}</p>
            <p>{e.review}</p>
            <p>{e.total_votes}</p>
            <p>{e.pay}</p>
            </div>
            </div>)
          })}
        </div> 
    </div>
  );
}

export default App;
