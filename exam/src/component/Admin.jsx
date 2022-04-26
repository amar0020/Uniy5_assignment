import { useState } from "react";

import axios from "axios"

export const Admin = () => {


    const [form,setForm] = useState({
        employee_name:"",
        employee_id:"",
        title:"",
        salary:"",
        image:"",
        username:"",
        password:"",
        task:"",
        status:"",
        team:""
    })

    const handlechange=(e)=>{
        const [name] = e.target;
        setForm({...form,[name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/employee",form).then((data)=>{
            console.log(data)
        })
    }
  return (
    <form className="createEmployee" onSubmit={handleSubmit}>
      <input type="text" placeholder="Employee Name" name="employee_name" onChange={handlechange}/>
      <input type="text" placeholder="Employee id" name="employee_id"  onChange={handlechange}/>
      <select name="title" onChange={handlechange}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input type="number" placeholder="Salary" name="salary" onChange={handlechange}/>
      <input type="text" placeholder="Image" name="image" onChange={handlechange}/>
      <input type="text" placeholder="User Name" name="username"  onChange={handlechange}/>
      <input type="password" placeholder="Password" name="password" onChange={handlechange} />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={handlechange}
      />
      <select name="status" id="status" onChange={handlechange}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={handlechange}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
