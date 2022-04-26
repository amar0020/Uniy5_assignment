import {axios} from "axios";
import { useState, useEffect } from "react";

export const EmployeeList = () => {

  const [list,setList] = useState([])

  // axios.get("http://localhost:8080/employee").then(({data})=>{
  //   setData(data)
  //   console.log(data)
  // })

  
  

  useEffect(()=>{
    fetch("http://localhost:8080/employee",{
      method:"GET"
    }).then((data)=>{
    data.data.json()
  }).then((dataaa)=>{
    setList(dataaa)
  })
},[list])

  return (
    <div className="list_container">

      {/* On clicking this card anywhere, user goes to user details */}
      {list.map((e)=><div className="employee_card">
        <img className="employee_image"  src={e.image}/>
        <span className="employee_name"> {e.name}</span>
        <span className="employee_title">{e.title}</span>
      </div>)}
    </div>
  );
};
