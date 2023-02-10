import { Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetBlogPost } from './Api/Index'
import Loader from './Loader'

const BlogPage = () => {
    const [post,setPost]=useState()
    const {id}=useParams();
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        GetBlogPost(id).then(data=>{
            setPost(data)
            setLoading(false)
        }
            ).catch(()=>{
                setLoading(false);
                alert("Can't fetch the data")
            })
    },[])
    
  return (<>{post?loading?<Loader/>:<Paper sx={{my:2,p:2}}>
    <Typography sx={{fontSize:"22px",borderBottom:"1px solid grey",paddingY:1}}>
        {post.title}
    </Typography>

    <Typography sx={{paddingY:1}}>
        {post.description}
    </Typography>

    <Typography sx={{textAlign:"right"}}>
       { "-" + post.authorName}
    </Typography>
</Paper>:null}</>
    
  )
}

export default BlogPage