import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    getBlogs();
  }, []);

  const loginfun = (err)=>{
    alert(err);
    navigate("/login")
  }

  const getBlogs = () => {
    fetch("https://cute-skirt-cow.cyclic.cloud/blogs", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result.msg){
          loginfun(result.msg)
          // alert("login first");
        }
        setBlog(result.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    fetch("https://cute-skirt-cow.cyclic.cloud/blogs/delete/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getBlogs();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {blog?.map((el) => {
        return (
          <div>
            <h2>{el.title}</h2>
            <h4>{el.content}</h4>
            <Link to={`/blog/edit/${el._id}`}>
              <button>edit</button>
            </Link>
            <button
              onClick={() => {
                handleDelete(el._id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
