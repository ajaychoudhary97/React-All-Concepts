import React, {  useState } from 'react'
import axios from "axios";
const GetDataApi = () => {
    
    const [mydata, setMyData] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // useEffect(()=>{
    //         axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
    //             // console.log(res);
    //             setMyData(res.data);
    //         })
    // },[])
    // console.log(mydata);

    const postData = (e)=>{
        e.preventDefault();
        let obj = {name,email}
        axios.post("https://jsonplaceholder.typicode.com/users",obj).then((res)=>{
            console.log(res, "Data Post Successfully");
            setMyData(res, "Data Post Successfully");
            setName("");
            setEmail("");
        })
    }


  return (
        <>
        <h1>Get Data with Api Calling</h1>
        <form method='POST'>
        <input type='text' name="name" value={name}  onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <input type='email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <button onClick={postData}>Submit</button>
        </form>
        </>
  )
}

export default GetDataApi