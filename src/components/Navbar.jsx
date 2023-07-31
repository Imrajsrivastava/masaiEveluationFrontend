import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.clear("token");
        navigate("/signup");

    }
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <Link to={"/signup"}>Signup</Link>
      <Link to={"/blogs"}>Blogs</Link>
      <Link to={"/createblog"}>CreateBlog</Link>
      <Link to={"/"}>Home</Link>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Navbar
