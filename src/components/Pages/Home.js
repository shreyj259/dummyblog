import React, { useEffect, useState } from 'react'
import {DeleteBlogPost, GetBlogData} from '../Api/Index'
import BlogPrew from '../BlogPrew';
import Loader from '../Loader';
const Home = () => { 
    
    const [blogData,setBlogData]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
      setLoading(true)
        GetBlogData().then((result)=>{
          setBlogData(result)
          setLoading(false);
        }).catch(()=>{
          alert("can't fetch the data")
        })
    },[])


    const handleDelete=(index)=>{
      setLoading(true)
      DeleteBlogPost(index).then(item=>{
        alert("Blog deleted successfully");
        setLoading(false)
        GetBlogData().then((result)=>{
          setBlogData(result)
        }).catch(()=>{
          alert("can't fetch the data")
        })
      }).catch(()=>{
        alert("can't delete the blog");
        setLoading(false);
      })
    }


  return (
    <>
    {loading?<Loader/>:blogData.map((item=><BlogPrew handleDelete={handleDelete} id={item.id} title={item.title} description={item.description} authorName={item.authorName} />))}
    </>
  )
}

export default Home