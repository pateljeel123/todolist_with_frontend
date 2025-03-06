import axios from "axios";
import { useState } from "react";
function Note(){

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault()

        const data={
            email:email,
            password:password,


        }
        axios.post("http://localhost:3000/data")
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{console.log(err)})
        
    }
    return(
        <>
    
        <div>

            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="email"/> <br /><br />
            <input type="password" value={password} placeholder="password" />
        </div>

        </>
    )
}

export default Note;