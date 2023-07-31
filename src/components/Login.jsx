import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({
       
        email: "",
        password: "",
        
      });
      const handleSubmit = (e) => {
        e.preventDefault()
    
        fetch("https://cute-skirt-cow.cyclic.cloud/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(formdata)
        }).then((res)=>res.json()).then((result)=>{
            console.log(result);
            localStorage.setItem("token",result.token);
            navigate("/")
        })
      };


  return (
    <div>

<form onSubmit={e=>handleSubmit(e)}>
       
        <input
          type="text"
          name="email"
          placeholder="Enter email.."
          value={formdata.email}
          onChange={(e) => {
            setFormdata({ ...formdata, email: e.target.value });
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="Enter password.."
          value={formdata.password}
          onChange={(e) => {
            setFormdata({ ...formdata, password: e.target.value });
          }}
        />
        
        <input type="submit" value={"Login"} />
      </form>
      
    </div>
  )
}

export default Login
