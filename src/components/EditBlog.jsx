import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
  const {id} = useParams()

  const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
     
    
      
    });

  useEffect(()=>{
    getOneBlog();
  },[id])

  const getOneBlog = ()=>{
    fetch("https://cute-skirt-cow.cyclic.cloud/blogs/"+id,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type":"application/json"
    },
    }).then((res)=>res.json()).then((result)=>{
  console.log(result)
  setFormdata(result.blog)

    }).catch((err)=>{
      console.log(err)
    })
  }

   console.log(formdata)

      const handleSubmit = (e) => {
        e.preventDefault()
    
        fetch("https://cute-skirt-cow.cyclic.cloud/blogs/edit/"+id,{
            method:"PUT",
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "content-type":"application/json"
            },
            body:JSON.stringify(formdata)
        }).then((res)=>res.json()).then((result)=>{
            console.log(result);
          
            navigate("/blogs")
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
       
       <input type="submit" value={"update"} />
     </form>
     
    </div>
  )
}

export default EditBlog
