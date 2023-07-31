import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {

    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({
       
        title: "",
        content: "",
        
      });
      const handleSubmit = (e) => {
        e.preventDefault()
    
        fetch("https://cute-skirt-cow.cyclic.cloud/blogs/create",{
            method:"POST",
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "content-type":"application/json"
            },
            body:JSON.stringify(formdata)
        }).then((res)=>res.json()).then((result)=>{
            console.log(result);
          
            // navigate("/")
        }).catch((err)=>{
            console.log(err)
        })
      };
  return (
    <div>
      <form onSubmit={e=>handleSubmit(e)}>
       
       <input
         type="text"
         name="title"
         placeholder="Enter title.."
         value={formdata.title}
         onChange={(e) => {
           setFormdata({ ...formdata, title: e.target.value });
         }}
       />
       <input
         type="text"
         name="content"
         placeholder="Enter content.."
         value={formdata.content}
         onChange={(e) => {
           setFormdata({ ...formdata, content: e.target.value });
         }}
       />
       
       <input type="submit" value={"CreateContent"} />
     </form>
     
    </div>
  )
}

export default CreateBlog
