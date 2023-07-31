import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const Signup = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("https://cute-skirt-cow.cyclic.cloud/signup",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(formdata)
    }).then((res)=>res.json()).then((result)=>{
        console.log(result);
        navigate("/login")
    })
  };
  return (
    <div>
      <form onSubmit={e=>handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Enter name.."
          value={formdata.name}
          onChange={(e) => {
            setFormdata({ ...formdata, name: e.target.value });
          }}
        />
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
        <input
          type="number"
          name="name"
          placeholder="Enter age.."
          value={formdata.age}
          onChange={(e) => {
            setFormdata({ ...formdata, age: e.target.value });
          }}
        />
        <input type="submit" value={"Signup"} />
      </form>
      <Link to={"/login"}>login</Link>
    </div>
  );
};

export default Signup;
